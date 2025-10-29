# Plan de test

## Unit
- Calcul totaux commande, taxes.
- RLS policies (tests positifs/négatifs).

## Intégration
- Création commande → items → status updates realtime.
- Stripe webhook → update paid.

## E2E (Playwright)
- Scan QR (simulé) → commander → suivre → marquer servi.
- À emporter → créneau → paiement → QR retrait.

## Performance
- Charge sur KDS (pics).
