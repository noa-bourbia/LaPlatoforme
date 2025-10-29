# Sécurité & RLS

## Principes
- Lecture publique du menu, écriture réservée staff.
- JWT roles: admin, server, kitchen.
- Tables protégées par RLS.

## Exemples Policies (pseudo)
- products: allow select to anon; insert/update/delete admin only.
- orders: insert server/kitchen/admin; update status par rôle (kitchen: preparing/ready; server: served/cancelled).
- order_items: insert server/admin; delete/patch server/admin.

## Paiement
- Ne jamais faire confiance au client pour `total`.
- Recalcul serveur + PaymentIntent Stripe.

## Secrets
- `SERVICE_ROLE_KEY` jamais côté client.
- Webhooks Stripe signés.
