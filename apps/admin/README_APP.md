# Admin Dashboard - Restaurant Connect

Interface d'administration pour gérer le restaurant, produits, staff et analytics.

## Technologies

- **Framework** : React 18 + Vite
- **État** : TanStack Query
- **Styling** : Tailwind CSS
- **Backend** : Supabase
- **Charts** : Recharts (à ajouter)
- **QR Generation** : qrcode.react

## Installation

\`\`\`bash
cd apps/admin
npm install
\`\`\`

## Configuration

Créer un fichier \`.env.local\` :

\`\`\`env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_ENV=development
\`\`\`

## Développement

\`\`\`bash
npm run dev
\`\`\`

Ouvrir [http://localhost:5174](http://localhost:5174)

## Fonctionnalités

### Dashboard
- **Statistiques** : CA jour/semaine/mois
- **Graphiques** : évolution commandes, top ventes
- **KPIs** : temps moyen préparation, taux annulation

### Gestion Produits
- **CRUD complet** : créer, modifier, supprimer produits
- **Catégories** : entrées, plats, desserts, boissons
- **Disponibilité** : activer/désactiver produits
- **Allergènes** : gestion des allergènes par produit

### Gestion Staff
- **Utilisateurs** : liste du personnel
- **Rôles** : admin, server, kitchen
- **Invitations** : envoyer invitations Supabase Auth

### QR Codes Tables
- **Génération** : QR codes pour chaque table
- **Export PDF** : document imprimable (A4)
- **Preview** : visualiser avant impression

## Sécurité

- Connexion requise (Supabase Auth)
- Rôle "admin" obligatoire (RLS)
- Toutes les actions vérifiées côté serveur

## Build

\`\`\`bash
npm run build
\`\`\`

## Déploiement

\`\`\`bash
npm run build
vercel --prod
\`\`\`
