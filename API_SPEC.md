# API Spec (MVP)

Base: Supabase REST (auto) + Edge Functions si besoin.

## Produits
- `GET /rest/v1/products?available=eq.true` – Menu public
- `POST /rest/v1/products` (admin)
- `PATCH /rest/v1/products?id=eq.{id}` (admin)
- `DELETE /rest/v1/products?id=eq.{id}` (admin)

## Commandes
- `POST /rest/v1/orders` – Créer commande
  ```json
  {
    "type": "dine_in",
    "table_id": "UUID-OPTIONNEL",
    "payment_status": "unpaid"
  }
  ```
- `POST /rest/v1/order_items` – Ajouter items
  ```json
  { "order_id":"...", "product_id":"...", "qty":2, "note":"bien cuit" }
  ```
- `PATCH /rest/v1/orders?id=eq.{id}` – Changer status: pending → preparing → ready → served/cancelled

## Paiement (Stripe)
- `POST /functions/v1/create-checkout-session`
  - body: `{ order_id, success_url, cancel_url }`
- Webhook `POST /functions/v1/stripe-webhook` → met `payment_status=paid`.

## Notifications (FCM)
- `POST /functions/v1/notify` – staff/cuisine/clients (topic by table/order).

## Realtime (Supabase)
- Subscribe `orders` & `order_items` par table ou commande.

## Erreurs
- JSON `{ "error": { "code": "...", "message": "..." } }`.
