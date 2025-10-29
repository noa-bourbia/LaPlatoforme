# Restaurant Connect – QR, À Emporter, App Staff & KDS

Solution connectée pour la prise de commande **sur place (QR par table)** et **à emporter**, avec **application serveur**, **dashboard cuisine (KDS)** et **admin**.

## Modules
- Client QR & Emporter (Web)
- Staff (Serveur) App
- Cuisine (KDS) Dashboard
- Admin Dashboard

## Démarrer
1. Lire `PRD.md` pour la vision produit.
2. Lire `ARCHITECTURE.md` & `DATA_MODEL.md` pour l’architecture et le schéma.
3. Configurer l’environnement : `DEV_SETUP.md` + `ENV_VARS.md`.
4. Implémenter API : `API_SPEC.md`.
5. Prototyper UI via `FIGMA_PROMPT.md` & `UI_GUIDELINES.md`.

## Piles techniques (MVP)
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Front**: Next.js (client) + React/Expo (staff), React (KDS/Admin)
- **Paiement**: Stripe
- **Notifications**: Firebase Cloud Messaging (FCM)
- **Déploiement**: Vercel (web), Supabase (DB), Render/Railway (API Node si besoin)

## Docs utiles
- Sécurité : `SECURITY.md`
- Paiements : `PAYMENTS.md`
- Impression cuisine : `PRINTING.md`
- Déploiement : `DEPLOYMENT.md`
- Tests : `TEST_PLAN.md`
- Analytics : `ANALYTICS.md`
- Accessibilité : `ACCESSIBILITY.md`
- Roadmap : `ROADMAP.md`
