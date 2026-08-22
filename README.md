# BoissonMan

Application de gestion pour supermarché de boissons — login (Gérant / Caissier), tableau de bord, caisse (scan code-barres caméra ou douchette USB, panier, reçu imprimable A6), stocks, catégories, fournisseurs, clients (fidélité), rapports, employés.

Implémentation à partir du prototype de design Claude Design (`../application-gestion-supermarch-boisson/project/BoissonMan.dc.html`), en Node.js pur (aucune dépendance npm) + JS/CSS/HTML vanilla, avec persistance réelle des données dans `data/db.json`.

## Lancer l'app

```
node server.js
```

Puis ouvrir http://127.0.0.1:8791/

Sur le PC de la caisse, le raccourci `deploy/Lancer-BoissonMan.vbs` démarre le serveur en arrière-plan et ouvre l'app dans une fenêtre Chrome dédiée (sans onglets ni barre d'adresse).

## Structure

- `server.js` — serveur HTTP (fichiers statiques + API JSON), aucune dépendance externe
- `data/db.json` — données persistées (créé automatiquement avec des données de démonstration au premier démarrage)
- `public/` — front-end (HTML/CSS/JS vanilla, aucune étape de build)
- `deploy/` — lanceur Windows

## Notes

- Connexion : deux boutons de rôle (Gérant / Caissier), comme dans le prototype de design — pas de mot de passe. Le nom affiché correspond au premier employé actif ayant ce rôle dans `data/db.json`.
- Le scan caméra utilise ZXing (chargé depuis unpkg) ; sans connexion internet, seule la saisie au clavier / douchette USB fonctionne.
