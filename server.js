const http = require("http");
const fs = require("fs");
const path = require("path");

// port de connection au serveur
const PORT = 3000;

const server = http.createServer((request, response) => {
  // 3. Définir le type de contenu
  response.setHeader("Content-Type", "video/mp4");

  try {
    // 5. Gérer les requêtes && 6. Fonctions Utilisées: join statSync et size
    const videoPath = path.join(__dirname, "resources/video.mp4");
    const videoStats = fs.statSync(videoPath);
    const videoSize = videoStats.size;

    // 7. Créer un flux de lecture && 8. fonction Utilisée : createReadStream
    const videoStream = fs.createReadStream(videoPath);

    // 9. Gérer les événements du flux && 10. Fonctions utilisées: pipe et open
    videoStream.on("open", () => {
      // 4. Définir le code de statut et les en-têtes
      response.writeHead(200, {
        "Content-Length": videoSize,
      });
      videoStream.pipe(response);
    });
    // gestion des erreurs lecture video
    videoStream.on("error", (err) => {
      console.error("Erreur dans la lecture du fichier video :", err);
      response.statusCode = 500;
      response.end();
    });
  } catch (error) {
    // Gérer l'erreur si le fichier n'existe pas
    if (error.code === "ENOENT") {
      // Envoyer une page HTML d'erreur indiquant que le fichier est introuvable
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      response.end(`
          <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
         
              <h1>Erreur 404 - Vidéo non trouvée</h1>
              <p>La vidéo demandée est introuvable sur le serveur.</p>
            
          </div>
      `);
    } else {
      // Gérer d'autres erreurs (par exemple, erreurs de permission)
      console.error("Erreur lors de l'accès au fichier : ", error);
      response.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      response.end(
        "<h1>Erreur de serveur interne</h1><p>Une erreur s'est produite lors de l'accès à la vidéo.</p>"
      );
    }
  }
});

// 12. Lancer le serveur
server.listen(PORT, () => {
  console.log("Serveur vidéo en écoute sur localhost: " + PORT);
});
