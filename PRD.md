# PRD – Restaurant Connect

## 1) Objectifs
- Réduire l’attente et les erreurs.
- Fluidifier le service salle ↔ cuisine.
- Proposer à emporter avec créneau.
- Base évolutive vers SaaS.

## 2) Personae
- Client en salle (QR).
- Client à emporter.
- Serveur (prise/édition).
- Cuisinier (KDS).
- Gérant (admin & stats).

## 3) Parcours clés
- **Sur place**: Scan QR table → Menu → Panier → Envoyer → Suivi temps réel → Paiement (now/later) → Demande addition.
- **À emporter**: Menu → Créneau → Paiement en ligne → QR retrait.
- **Serveur**: Connexion → Tables → Nouvelle commande / Modifier → Suivi “prêt/servi”.
- **Cuisine**: Connexion → Liste commandes live → Bascules d’états → Historique jour.
- **Admin**: Stats, CRUD menu, gestion comptes, génération QR tables.

## 4) Fonctionnalités MVP
- QR par table, regroupement commandes par table.
- Realtime status: attente → préparation → prêt → servi.
- Paiement Stripe (Checkout) + option payer à la fin.
- KDS simple, tri par sections.
- Admin CRUD menu + QR PDF.

## 5) KPIs
- Temps moyen commande→prêt.
- % adoption QR vs prise manuelle.
- Taux erreurs/annulations.
- CA par heure / plat.

## 6) Hors scope (Phase 2+)
- Mode offline avancé.
- Fidélité & IA reco.
- Multi-restaurants (SaaS).
- TV cuisine multi-colonnes.
