# Application Node.js : lecture vidéo en streaming

Ce projet utilise **Node.js** pour créer un serveur HTTP. Voici les étapes pour installer et exécuter l'application localement.

## Prérequis

Assurez-vous que Node.js est installé sur votre machine.

- [Télécharger Node.js](https://nodejs.org/) : Choisissez la version LTS (recommandée) pour garantir la stabilité.
- Vérifiez l'installation en exécutant ces commandes dans le terminal :
  ```bash
  node -v
  npm -v
  ```
  Cela devrait afficher les versions de `node` et `npm` si l'installation a été effectuée avec succès.

## Installation

1. Accédez au dossier du projet :
   ```bash
   cd votre-repo
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer l'application

Pour lancer l'application, exécutez la commande suivante dans le dossier du projet :

```bash
node server.js
```

L'application démarrera sur le **port 3000**. Vous pouvez accéder à l'application en ouvrant votre navigateur et en visitant :

```
http://localhost:3000
```

## Configuration du port

Par défaut, l'application est configurée pour utiliser le **port 3000**. Si vous souhaitez utiliser un autre port, vous pouvez modifier la constante `PORT` dans le fichier `server.js` :

```javascript
const PORT = 3000;
```

Ensuite, relancez l'application avec `node server.js`.

## Utilisation

Une fois l'application lancée, ouvrez `http://localhost:3000` dans votre navigateur pour voir l'application en action.

## Dépannage

- **Port 3000 déjà utilisé** : Si le port 3000 est occupé par une autre application, vous pouvez soit :
  - Arrêter l'application qui utilise ce port.
  - Modifier le numéro de port dans le fichier `server.js`, puis relancer l'application.
- **Node.js non installé** : Suivez les instructions de la section Prérequis pour installer Node.js.

---

Voilà ! Ce fichier `README.md` devrait vous aider à guider l'utilisateur pour lancer votre application Node.js sur le port 3000.
