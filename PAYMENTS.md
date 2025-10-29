# Paiements (Stripe)

## Flux
1. Créer order (unpaid).
2. Créer Checkout Session → redirect.
3. Webhook `payment_intent.succeeded` → `orders.payment_status=paid`.
4. Si “payer à la fin”: facture unique par table.

## Notes
- Toujours recalculer le montant côté serveur à partir des prix DB.
- Gérer `cancel_url` proprement.

