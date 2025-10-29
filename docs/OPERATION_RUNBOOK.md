# Runbook Opérations

## Incidents
- Stripe down → bascule en “payer à la fin”.
- Supabase down → commandes en manuel, ressaisie plus tard.
- Imprimante HS → KDS = source de vérité.

## Sauvegardes
- Snapshots DB quotidiens.
- Export CSV hebdo.

## Mises à jour
- Déploiement bleu/vert si possible.
- Tests E2E rapides avant prod.
