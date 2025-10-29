# Restaurant Connect - MVP

Solution connectée pour la prise de commande **sur place (QR par table)** et **à emporter**, avec **application serveur**, **dashboard cuisine (KDS)** et **admin**.

## 🏗️ Architecture

Monorepo pnpm avec :

- **apps/web-client** - Client web (Next.js 14) pour commandes QR et takeaway
- **apps/staff** - Application serveur/tablette (Next.js)
- **apps/kds** - Kitchen Display System (React + Vite)
- **apps/admin** - Dashboard administrateur (React + Vite)
- **packages/shared** - Types TypeScript, schémas Zod, utilitaires
- **packages/ui** - Design system (composants React + Tailwind)
- **supabase/** - Migrations SQL et Edge Functions

## 🚀 Démarrage rapide

### Prérequis

- Node.js 20+
- pnpm 8+
- Compte Supabase
- Compte Stripe (mode test)

### Installation

\`\`\`bash
# Installer pnpm si nécessaire
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Cloner et installer les dépendances
cd restaurant-connect-docs
pnpm install

# Configurer les variables d'environnement
cp apps/web-client/.env.example apps/web-client/.env.local
cp apps/staff/.env.example apps/staff/.env.local
cp apps/kds/.env.example apps/kds/.env.local
cp apps/admin/.env.example apps/admin/.env.local

# Éditer les fichiers .env avec vos clés Supabase et Stripe
\`\`\`

### Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Exécuter les migrations SQL :

\`\`\`bash
# Dans le dashboard Supabase SQL Editor :
# 1. Exécuter supabase/migrations/00001_initial_schema.sql
# 2. Exécuter supabase/migrations/00002_rls_policies.sql
# 3. Exécuter supabase/migrations/00003_seed_data.sql
\`\`\`

3. Déployer les Edge Functions :

\`\`\`bash
# Installer Supabase CLI
npm install -g supabase

# Login
supabase login

# Déployer les fonctions
supabase functions deploy create-checkout-session
supabase functions deploy stripe-webhook
supabase functions deploy notify
\`\`\`

### Lancer les applications

\`\`\`bash
# Lancer toutes les apps en parallèle
pnpm dev

# Ou individuellement :
pnpm --filter web-client dev    # Port 3000
pnpm --filter staff dev          # Port 3001
pnpm --filter kds dev            # Port 5173
pnpm --filter admin dev          # Port 5174
\`\`\`

## 📱 Applications

### Web Client (Client QR & Takeaway)

- **URL** : http://localhost:3000
- **Routes** :
  - `/` - Page d'accueil
  - `/table/[id]` - Menu pour commande sur place (QR)
  - `/takeaway` - Menu pour commande à emporter
  - `/cart` - Panier
  - `/checkout` - Paiement (Stripe)
  - `/order/[id]` - Suivi de commande (temps réel)

### Staff App (Serveur/Tablette)

- **URL** : http://localhost:3001
- **Fonctionnalités** :
  - Authentification Supabase
  - Vue des tables et statuts
  - Création/modification de commandes
  - Suivi temps réel des commandes

### KDS (Kitchen Display System)

- **URL** : http://localhost:5173
- **Fonctionnalités** :
  - Board des commandes en temps réel
  - Transitions de statut (pending → preparing → ready → served)
  - Vue historique journalière
  - Affichage optimisé pour écrans cuisine

### Admin Dashboard

- **URL** : http://localhost:5174
- **Fonctionnalités** :
  - Stats et analytics (CA, commandes, temps moyen)
  - CRUD produits
  - Gestion utilisateurs et rôles
  - Génération QR codes tables (PDF)

## 🔐 Sécurité

- **RLS (Row Level Security)** activé sur toutes les tables
- **Validation serveur** : recalcul des totaux avant paiement
- **Rôles** : admin, server, kitchen
- **Clés** : ANON_KEY côté client, SERVICE_ROLE_KEY côté serveur uniquement

Voir `SECURITY.md` pour plus de détails.

## 💳 Paiements Stripe

Configuration webhook Stripe :

\`\`\`
URL: https://your-project.supabase.co/functions/v1/stripe-webhook
Events: checkout.session.completed
\`\`\`

Voir `PAYMENTS.md` pour plus de détails.

## 📊 Base de données

### Tables principales

- `tables` - Tables du restaurant
- `products` - Menu (plats, boissons)
- `orders` - Commandes
- `order_items` - Détails des commandes
- `users` - Personnel (staff)

Voir `DATA_MODEL.md` et `schema.sql` pour le schéma complet.

## 🧪 Tests

\`\`\`bash
# Tests unitaires
pnpm test

# Tests E2E (Playwright)
pnpm --filter web-client test:e2e
\`\`\`

Voir `TEST_PLAN.md` pour les scénarios de test.

## 📦 Build & Déploiement

\`\`\`bash
# Build toutes les apps
pnpm build

# Build packages shared
pnpm --filter @restaurant-connect/shared build
pnpm --filter @restaurant-connect/ui build
\`\`\`

### Déploiement

- **Web apps** : Vercel
- **Database** : Supabase
- **Edge Functions** : Supabase Functions

Voir `DEPLOYMENT.md` pour les instructions complètes.

## 📚 Documentation

- `PRD.md` - Product Requirements Document
- `ARCHITECTURE.md` - Architecture technique
- `API_SPEC.md` - Spécifications API
- `USER_FLOWS.md` - Parcours utilisateurs
- `UI_GUIDELINES.md` - Guidelines UI/UX
- `SECURITY.md` - Sécurité et RLS
- `ENV_VARS.md` - Variables d'environnement
- `ROADMAP.md` - Roadmap et Phase 2

## 🗺️ Roadmap Phase 2

- Mode offline avancé (PWA)
- Programme de fidélité
- Multi-restaurants (SaaS)
- TV cuisine multi-colonnes
- Analytics avancées
- Notifications push natives

## 🤝 Contributing

Voir `CONTRIBUTING.md`

## 📄 License

Voir `LICENSE.md`

---

**Restaurant Connect** - Propulsé par Next.js, Supabase, Stripe & React
