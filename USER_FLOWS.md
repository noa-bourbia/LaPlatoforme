# User Flows

## Client – Sur place (QR)
1. Scan QR (table 12) → `/table/12`
2. Voir menu → ajouter au panier
3. Confirmer commande → `orders` + `order_items`
4. Suivi live: pending → preparing → ready → served
5. Paiement: Stripe (now) ou “payer à la fin”

## Client – À emporter
1. `/takeaway` → menu → créneau
2. Paiement en ligne
3. Reçoit code/QR retrait

## Serveur
- Connexion
- Vue tables + statuts
- Nouvelle commande manuelle / modifier
- Marquer servi / annuler

## Cuisine (KDS)
- Connexion (role kitchen)
- Liste live commandes
- Bascule status: preparing → ready → served

## Admin
- Dashboard + stats
- CRUD menu
- Comptes staff
- Générer QR tables
