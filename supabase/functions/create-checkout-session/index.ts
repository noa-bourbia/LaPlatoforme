import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14.10.0?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CreateCheckoutRequest {
  order_id: string;
  success_url: string;
  cancel_url: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { order_id, success_url, cancel_url }: CreateCheckoutRequest = await req.json();

    if (!order_id || !success_url || !cancel_url) {
      throw new Error('Missing required parameters');
    }

    // Fetch order details from Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

    const orderResponse = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${order_id}&select=*,order_items(qty,product:products(name,price))`, {
      headers: {
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`,
      },
    });

    const orders = await orderResponse.json();
    
    if (!orders || orders.length === 0) {
      throw new Error('Order not found');
    }

    const order = orders[0];

    // Create line items for Stripe
    const lineItems = order.order_items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.product.name,
        },
        unit_amount: Math.round(item.product.price * 100), // Convert to cents
      },
      quantity: item.qty,
    }));

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${success_url}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url,
      metadata: {
        order_id: order_id,
      },
    });

    return new Response(
      JSON.stringify({ url: session.url, session_id: session.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: { code: 'PAYMENT_ERROR', message: error.message } }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
