import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NotificationRequest {
  order_id: string;
  message: string;
  topic?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { order_id, message, topic }: NotificationRequest = await req.json();

    // This is a placeholder for FCM integration
    // In production, you would use Firebase Admin SDK to send notifications
    
    const fcmServerKey = Deno.env.get('FCM_SERVER_KEY');
    
    if (!fcmServerKey) {
      console.warn('FCM_SERVER_KEY not configured. Skipping notification.');
      return new Response(
        JSON.stringify({ success: true, skipped: true }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Example FCM payload
    const payload = {
      notification: {
        title: 'Restaurant Connect',
        body: message,
      },
      data: {
        order_id,
      },
      ...(topic ? { topic } : {}),
    };

    // Send to FCM (placeholder - would need actual FCM endpoint)
    console.log('Would send FCM notification:', payload);

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: { message: (error as Error).message } }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
