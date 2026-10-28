# TP React : projet 001

Dans ce TP, j'ai créé un projet React avec Vite pour réaliser mon CV avec trois composants. Ce fichier explique toutes les étapes que j'ai suivies.

## Les consignes du TP

Le professeur nous demande de :

1. Créer un projet nommé `001` avec Vite.
2. Mettre toutes les étapes dans le fichier README.
3. Expliquer le rôle des dossiers et des fichiers indispensables.
4. Créer mon CV avec trois composants : informations personnelles, compétences et expériences.

## Pourquoi utiliser Vite ?

React est une bibliothèque : pour l'utiliser, il faut un projet bien organisé. Vite est un outil qui crée ce projet pour moi, avec tous les fichiers de départ, au lieu de tout installer à la main. Son nom veut dire « rapide » en français.

J'utilise Vite pour plusieurs raisons :

- **Il crée le projet en une seule commande.** Je n'ai pas à créer les dossiers et les fichiers moi-même.
- **Il démarre très vite.** Avec `npm run dev`, mon projet s'ouvre presque tout de suite.
- **Il met la page à jour tout seul.** Quand j'enregistre un fichier, le navigateur change immédiatement, sans que je recharge la page.
- **Il est léger et simple.** Le projet contient seulement l'essentiel, donc il est facile à comprendre.
- **Il est très utilisé aujourd'hui.** Il remplace Create React App, l'ancien outil utilisé au début du cours, qui n'est plus mis à jour.

## Ce qu'il faut avoir avant de commencer

- Node.js installé sur l'ordinateur
- Visual Studio Code

## Les étapes que j'ai suivies

### Étape 1 : créer le projet

1. J'ai ouvert mon dossier de cours (`Cours REACT`) dans Visual Studio Code.
2. J'ai ouvert le terminal : menu Terminal, puis New Terminal.
3. J'ai tapé :
   ```
   npm create vite@latest 001
   ```
4. Vite m'a posé des questions. J'ai répondu :
   - Framework : **React**
   - Variante : **JavaScript**
   - Linter : **Oxlint** (choix par défaut)
   - Install with npm and start now ? : **No**
5. Vite a créé le dossier `001` avec tous les fichiers de départ.

### Étape 2 : entrer dans le projet

```
cd 001
```
`cd` veut dire « changer de dossier ». Il faut être dans `001` avant de taper les commandes `npm`.

### Étape 3 : installer les bibliothèques

```
npm install
```
Cette commande télécharge tout ce dont le projet a besoin et crée le dossier `node_modules`.

### Étape 4 : lancer le projet

```
npm run dev
```
Le terminal affiche l'adresse `http://localhost:5173/`. Je l'ouvre dans le navigateur (Ctrl + clic sur le lien) pour voir mon projet. Le terminal doit rester ouvert pendant que je travaille. À chaque fois que j'enregistre un fichier (Ctrl + S), la page se met à jour toute seule.

### Étape 5 : créer les trois composants

Dans le dossier `src`, j'ai créé trois fichiers :

- `InfoPerso.jsx`
- `Competences.jsx`
- `Experiences.jsx`

Chaque composant est une fonction qui retourne du JSX (du HTML écrit dans du JavaScript). Son nom commence par une majuscule. À la fin du fichier, j'écris `export default NomDuComposant;` pour le rendre disponible aux autres fichiers.

### Étape 6 : afficher les composants dans App.jsx

Dans `src/App.jsx`, j'ai écrit :

1. les `import` tout en haut, pour récupérer les composants :
   ```jsx
   import './App.css';
   import InfoPerso from './InfoPerso';
   import Competences from './Competences';
   import Experiences from './Experiences';
   ```
2. les balises des composants dans le `return`, pour les afficher :
   ```jsx
   <div className="cv">
     <InfoPerso />
     <Competences />
     <Experiences />
   </div>
   ```

Importer ne suffit pas : il faut aussi écrire la balise du composant pour qu'il s'affiche.

### Étape 7 : ajouter le style

J'ai écrit le style dans `src/App.css`. Il est appliqué parce que `App.jsx` importe `App.css`. J'ai donné une classe à chaque partie avec `className`, puis j'ai écrit le style de cette classe dans `App.css`.

## Le rôle des trois composants

### InfoPerso
Il affiche mon nom, mon titre, une courte présentation, mon email, mon téléphone et mon adresse, dans un bandeau violet. Les mots « Email », « Téléphone » et « Adresse » et leurs valeurs sont dans des balises `<span>` pour avoir des couleurs différentes.

### Competences
Il affiche la liste de mes compétences sous forme de pastilles. Chaque compétence est un `<li>` dans une liste `<ul>`.

### Experiences
Il affiche mes deux projets, chacun dans une carte blanche : AGRI-MANAGER et Gestion des Colis.

## Le rôle des dossiers et des fichiers

| Élément | Rôle |
|---|---|
| `node_modules/` | Contient les bibliothèques installées. On n'y touche pas. |
| `public/` | Contient les fichiers qui ne changent pas (images, icônes). |
| `src/` | Contient mon code. C'est là que je travaille. |
| `src/assets/` | Contient les images utilisées dans le code. |
| `src/main.jsx` | Le point de départ : il affiche `App` dans la page. |
| `src/App.jsx` | Le composant principal : il rassemble tous les composants. |
| `src/App.css` | Le style de mon application (couleurs, centrage, pastilles, cartes). |
| `src/index.css` | Le style général de toute la page. |
| `src/InfoPerso.jsx` | Le composant de mes informations personnelles. |
| `src/Competences.jsx` | Le composant de mes compétences. |
| `src/Experiences.jsx` | Le composant de mes expériences. |
| `index.html` | La page HTML unique. Elle contient `<div id="root">`, la boîte où React affiche tout. |
| `package.json` | La carte d'identité du projet : son nom, ses bibliothèques et ses commandes. |
| `package-lock.json` | Les versions exactes des bibliothèques installées. |
| `vite.config.js` | La configuration de Vite. |
| `.gitignore` | La liste des fichiers que Git ne doit pas envoyer (comme `node_modules`). |
| `README.md` | Ce fichier : il explique le projet. |

## Comment tout fonctionne ensemble

```
index.html  →  main.jsx  →  App.jsx  →  InfoPerso
                                        Competences
                                        Experiences
```

1. `index.html` contient une boîte vide.
2. `main.jsx` demande à React d'afficher `App` dans cette boîte.
3. `App.jsx` contient les trois composants et les affiche.
4. Chaque composant affiche son propre morceau de page.

## Les mots importants

- **Composant** : un morceau de page écrit dans son propre fichier.
- **JSX** : du HTML écrit dans du JavaScript.
- **export** : rendre un composant disponible pour les autres fichiers.
- **import** : aller chercher un composant dans un autre fichier.
- **className** : donner une classe CSS à un élément (en React, on n'écrit pas `class`).
- **span** : une petite balise qui permet de colorer un morceau de texte dans une ligne.

## Les problèmes que j'ai rencontrés

1. **`nmp` au lieu de `npm`** : le terminal ne reconnaissait pas la commande. J'ai corrigé l'orthographe.
2. **`vite@latex` au lieu de `vite@latest`** : j'ai corrigé la faute.
3. **« Failed to resolve import »** : j'avais écrit `"./ InfoPerso"` avec un espace dans `App.jsx`. J'ai supprimé l'espace.
4. **Erreur `ENOENT` avec `package.json`** : j'avais tapé `npm run dev` dans `Cours REACT` et non dans `001`. J'ai tapé `cd 001` d'abord.
5. **Le style ne s'appliquait pas** : `App.jsx` n'importait pas `App.css`. J'ai ajouté `import './App.css';` en haut.
6. **Texte invisible** : une couleur claire sur un fond clair. J'ai choisi des couleurs qui contrastent avec le fond.

## Ce que j'ai appris

- Créer un projet React avec Vite et le lancer avec `npm run dev`.
- Comprendre le rôle des dossiers et des fichiers d'un projet React.
- Créer des composants, chacun dans son propre fichier.
- Utiliser `export` pour partager un composant, et `import` pour le récupérer.
- Assembler plusieurs composants dans `App.jsx`.
- Utiliser `className` et un fichier CSS pour changer les couleurs et la mise en page.
- Lire un message d'erreur pour trouver ce qui ne va pas.

## Résultat final

Voici mon CV tel qu'il s'affiche dans le navigateur :

![Mon CV final](./cv.png)

---

