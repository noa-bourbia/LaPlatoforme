# 🎯 Guide de Démarrage Rapide - Restaurant Connect

## 📋 Checklist de Configuration

### ☑️ 1. Prérequis Installés
- [ ] Node.js 20+
- [ ] pnpm (ou npm)
- [ ] Compte Supabase créé
- [ ] Compte Stripe créé (mode test)

### ☑️ 2. Configuration Supabase
- [ ] Projet Supabase créé
- [ ] Migrations SQL exécutées (3 fichiers)
- [ ] Edge Functions déployées
- [ ] Secrets configurés (Stripe keys)

### ☑️ 3. Configuration Stripe
- [ ] Mode test activé
- [ ] Webhook configuré
- [ ] Clés API notées

### ☑️ 4. Variables d'Environnement
- [ ] `.env.local` créé pour web-client
- [ ] `.env.local` créé pour staff
- [ ] `.env.local` créé pour kds
- [ ] `.env.local` créé pour admin

### ☑️ 5. Installation
- [ ] `pnpm install` exécuté
- [ ] Packages shared et ui buildés

## 🚀 Commandes Principales

### Installation & Setup

\`\`\`bash
# Activer pnpm (si nécessaire)
source ~/.bashrc

# Installer toutes les dépendances
pnpm install

# Build packages partagés
pnpm build:packages
\`\`\`

### Développement

\`\`\`bash
# Lancer toutes les apps (recommandé)
pnpm dev

# Ou lancer individuellement :
pnpm dev:web      # Web Client - http://localhost:3000
pnpm dev:staff    # Staff App - http://localhost:3001
pnpm dev:kds      # KDS - http://localhost:5173
pnpm dev:admin    # Admin - http://localhost:5174
\`\`\`

### Build Production

\`\`\`bash
# Build tout le projet
pnpm build

# Build par app
pnpm --filter web-client build
pnpm --filter staff build
pnpm --filter kds build
pnpm --filter admin build
\`\`\`

### Linting & Formatage

\`\`\`bash
# Lint toutes les apps
pnpm lint

# Format code
pnpm format

# Vérifier formatage
pnpm format:check
\`\`\`

### Tests

\`\`\`bash
# Tests unitaires
pnpm test

# Tests E2E (à implémenter)
pnpm test:e2e
\`\`\`

### Nettoyage

\`\`\`bash
# Supprimer node_modules et build
pnpm clean
\`\`\`

## 🧪 Test du Projet (Checklist)

### Test Web Client

1. **Lancer l'app** : `pnpm dev:web`
2. **Ouvrir** : http://localhost:3000
3. **Tester** :
   - [ ] Page d'accueil s'affiche
   - [ ] Clic "Demo: Table 1" → affiche menu
   - [ ] Ajouter produit au panier → badge panier s'incrémente
   - [ ] Clic "Panier" → voir items
   - [ ] Modifier quantités → total se met à jour
   - [ ] Clic "Valider" → création commande (si Supabase configuré)

### Test Takeaway

1. **Clic** "Commander à emporter"
2. **Tester** :
   - [ ] Menu s'affiche
   - [ ] Ajouter produits
   - [ ] Clic "Commander" → page checkout
   - [ ] Sélectionner créneau
   - [ ] Clic "Payer" → redirection Stripe (si configuré)

### Test Supabase Connection

\`\`\`bash
# Dans DevTools Console du navigateur :
localStorage.clear()
# Recharger page
# Tenter de créer une commande
# Vérifier dans Network tab si requête Supabase passe
\`\`\`

### Test Stripe (mode test)

1. **Créer commande takeaway**
2. **Cartes de test** :
   - Succès : `4242 4242 4242 4242`
   - Date : n'importe quelle date future
   - CVC : n'importe quel 3 chiffres

## 📱 URLs des Applications

| Application | URL | Description |
|------------|-----|-------------|
| Web Client | http://localhost:3000 | Commandes QR & Takeaway |
| Staff App | http://localhost:3001 | App serveur/tablette |
| KDS | http://localhost:5173 | Kitchen Display System |
| Admin | http://localhost:5174 | Dashboard admin |

## 🔧 Dépannage Rapide

### Erreur "pnpm: command not found"
\`\`\`bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
\`\`\`

### Erreur "Cannot find module '@restaurant-connect/shared'"
\`\`\`bash
cd packages/shared
pnpm install
pnpm build
cd ../..
\`\`\`

### Erreur Supabase "Invalid API key"
- Vérifier `.env.local` a bien `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Vérifier les valeurs copiées depuis Supabase dashboard

### Erreur Port déjà utilisé
\`\`\`bash
# Trouver et tuer le processus
lsof -ti:3000 | xargs kill -9  # Pour port 3000
lsof -ti:5173 | xargs kill -9  # Pour port 5173
\`\`\`

### Erreur Build Next.js
\`\`\`bash
cd apps/web-client
rm -rf .next
pnpm install
pnpm dev
\`\`\`

## 📖 Documentation Complète

- **README_PROJECT.md** : Vue d'ensemble du projet
- **IMPLEMENTATION_SUMMARY.md** : Résumé de l'implémentation
- **PHASE_2_TODO.md** : Fonctionnalités Phase 2
- **apps/*/README_APP.md** : Guide par application

## 🎯 Prochaines Actions Recommandées

1. ✅ **Configurer Supabase** (si pas encore fait)
2. ✅ **Tester Web Client** avec données seed
3. ✅ **Implémenter Staff App** (login + tables)
4. ✅ **Implémenter KDS** (board commandes)
5. ✅ **Implémenter Admin** (CRUD produits)
6. ✅ **Ajouter tests E2E**
7. ✅ **Déployer sur Vercel**

## 💡 Conseils

- **Commencez par le Web Client** : c'est l'app la plus complète
- **Testez avec les données seed** : 4 produits et 3 tables déjà créés
- **Utilisez le mode dev de Stripe** : pas de vraies transactions
- **Surveillez la console** : erreurs Supabase souvent liées aux policies RLS
- **Documentez vos modifications** : facilite la maintenance

---

**Bon développement ! 🚀**

Si vous rencontrez des problèmes, consultez les fichiers de documentation ou créez une issue.
