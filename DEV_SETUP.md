# Dev Setup

## Prérequis
- Node 20+, pnpm ou npm
- Supabase CLI
- Stripe (test)
- Firebase (FCM)

## Étapes
1. `supabase init` puis appliquer schéma (`schema.sql` et `supabase_policies.sql`).
2. Créer `.env` (voir `ENV_VARS.md`).
3. Lancer front web (Next.js): `pnpm dev`.
4. Configurer FCM web push (si notifs web).
5. Créer endpoints Functions (Stripe session + webhook).

## Monorepo suggéré
- `/apps/web-client`
- `/apps/staff`
- `/apps/kds`
- `/apps/admin`
- `/packages/ui` (design system)
- `/packages/shared` (types, utils)
