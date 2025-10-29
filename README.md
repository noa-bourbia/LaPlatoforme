# 🍽️ Restaurant Connect - MVP

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-purple)](https://stripe.com/)

Solution connectée complète pour la prise de commande **sur place (QR par table)** et **à emporter**, avec **application serveur**, **dashboard cuisine (KDS)** et **admin**.

## 🚀 Démo Rapide

```bash
# Installation
pnpm install

# Lancer toutes les apps
pnpm dev
```

**URLs** :
- 🌐 **Web Client** : http://localhost:3000 (Commandes QR & Takeaway)
- 👔 **Staff App** : http://localhost:3001 (Application serveur)
- 🍳 **KDS** : http://localhost:5173 (Kitchen Display System)
- 🎛️ **Admin** : http://localhost:5174 (Dashboard admin)

## ✨ Fonctionnalités

### ✅ Client Web (100% Fonctionnel)
- 📱 **Commande QR** : Scanner QR sur table → commander → suivre en temps réel
- 🥡 **Commande à emporter** : Choisir créneau → payer en ligne → retirer
- 🛒 **Panier intelligent** : Quantités, notes spéciales, calcul automatique
- 💳 **Paiement Stripe** : Checkout sécurisé avec webhook
- ⚡ **Suivi temps réel** : Statut commande mis à jour en direct (Supabase Realtime)

### ⏳ Staff, KDS & Admin (Structures Créées)
- 👔 **App Serveur** : Gestion tables, prise de commande manuelle
- 🍳 **KDS** : Board Kanban cuisine, changements de statut
- 🎛️ **Admin** : Dashboard stats, CRUD produits, QR codes

## 🏗️ Architecture

```
Monorepo pnpm
├── apps/
│   ├── web-client/    # Next.js 14 - Client QR & Takeaway ✅
│   ├── staff/         # Next.js - App Serveur ⏳
│   ├── kds/           # React + Vite - Kitchen Display ⏳
│   └── admin/         # React + Vite - Admin Dashboard ⏳
├── packages/
│   ├── shared/        # Types TypeScript + Zod ✅
│   └── ui/            # Design System ✅
└── supabase/
    ├── migrations/    # SQL Schema + RLS ✅
    └── functions/     # Edge Functions (Stripe) ✅
```

## 📦 Technologies

- **Frontend** : Next.js 14, React 18, TypeScript, Tailwind CSS
- **État** : Zustand (panier), TanStack Query (API)
- **Backend** : Supabase (PostgreSQL + Auth + Realtime)
- **Paiement** : Stripe Checkout + Webhooks
- **Validation** : Zod
- **Build** : pnpm workspaces, Vite

## 🔧 Installation & Démarrage

### Prérequis
- Node.js 20+
- pnpm 8+ ([installer](https://pnpm.io/installation))
- Compte [Supabase](https://supabase.com)
- Compte [Stripe](https://stripe.com) (mode test)

### Setup Rapide

```bash
# 1. Cloner le repo
git clone https://github.com/noa-bourbia/LaPlatoforme.git
cd LaPlatoforme

# 2. Installer dépendances
pnpm install

# 3. Configurer variables d'environnement
cp apps/web-client/.env.example apps/web-client/.env.local
# Éditer avec vos clés Supabase et Stripe

# 4. Lancer le projet
pnpm dev
```

👉 **Guide complet** : [QUICK_START.md](QUICK_START.md)

## 📖 Documentation

- 📄 **[DELIVERY_REPORT.md](DELIVERY_REPORT.md)** - Rapport complet de livraison ⭐
- 🚀 **[QUICK_START.md](QUICK_START.md)** - Guide démarrage rapide ⭐
- 📝 **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Résumé technique
- 📅 **[PHASE_2_TODO.md](PHASE_2_TODO.md)** - Roadmap Phase 2
- 📁 **[FILES_INDEX.md](FILES_INDEX.md)** - Index des fichiers

### Documentation Technique Originale
- `PRD.md` - Product Requirements Document
- `ARCHITECTURE.md` - Architecture technique
- `DATA_MODEL.md` - Modèle de données
- `API_SPEC.md` - Spécifications API
- `SECURITY.md` - Sécurité et RLS
- `PAYMENTS.md` - Intégration Stripe
- Voir tous les fichiers .md pour plus de détails

## 🎯 Statut du Projet

```
█████████████████████░░░░░  65% COMPLET

✅ Web Client (QR + Takeaway)     100%
✅ Packages (shared + ui)         100%  
✅ Backend (Supabase + Stripe)    100%
✅ Configuration & Setup          100%
⏳ Staff App                       25%
⏳ KDS                             25%
⏳ Admin                           25%
⏳ Tests E2E                        0%
```

## 🧪 Test du Web Client

```bash
# Lancer le web client
pnpm dev:web

# Ouvrir http://localhost:3000
# Tester le flow QR : /table/1
# Tester le takeaway : /takeaway
```

## 🗺️ Roadmap

### Phase 1 (MVP) - ✅ LIVRÉ
- ✅ Web Client complet
- ✅ Backend Supabase + Stripe
- ✅ Packages partagés

### Phase 2 (En cours) - ⏳
- ⏳ Staff App - Login, Tables, Orders
- ⏳ KDS - Board Kanban, Actions
- ⏳ Admin - Dashboard, CRUD, QR codes

### Phase 3 (Futur)
- 🔜 Tests E2E Playwright
- 🔜 PWA & Mode Offline
- 🔜 Notifications Push
- 🔜 Programme Fidélité
- 🔜 Multi-restaurants (SaaS)

## 🤝 Contribution

Les contributions sont les bienvenues ! Voir [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

Voir [LICENSE.md](LICENSE.md).

---

**Restaurant Connect** - Propulsé par Next.js, Supabase, Stripe & React
