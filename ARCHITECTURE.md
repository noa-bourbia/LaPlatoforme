# Architecture

## Vue d’ensemble

```mermaid
graph LR
ClientQR[Client QR / Emporter] --> API[(Supabase API / Edge Functions)]
Staff[App Serveur] --> API
KDS[Dashboard Cuisine] --> API
Admin[Admin Dashboard] --> API
API <--> DB[(PostgreSQL - Supabase)]
API --> Realtime[(Supabase Realtime)]
API --> Stripe[Stripe]
API --> FCM[Firebase Cloud Messaging]
```
## Composants
- **DB**: Postgres (Supabase) – tables, RLS, vues pour stats.
- **Auth**: Supabase Auth (roles staff/admin), session JWT.
- **Realtime**: channels pour `orders` & `order_items`.
- **Fronts**:
  - Web Client (Next.js)
  - Staff App (Expo/React Native ou Next.js tablettes)
  - KDS (React Web)
  - Admin (React Web)
- **Paiement**: Stripe Checkout + webhooks.
- **Notifications**: FCM (topics par table/commande).

## Sécurité
- RLS stricte (voir `SECURITY.md`).
- Différencier “public” (lecture menu) et “staff” (CRUD).
