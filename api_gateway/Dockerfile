# Utilisez une image Node.js en tant qu'image de base
FROM node
# Définir le répertoire de travail dans le conteneur
WORKDIR /app
# Copier le package.json et le package-lock.json dans le conteneur
COPY package*.json ./
# Installer les dépendances du projet
RUN npm install --production
# Copier le reste des fichiers de l'application dans le conteneur
COPY . .
# Exposer le port sur lequel l'application va écouter
EXPOSE 3000
# Commande pour exécuter l'application lorsque le conteneur démarre
CMD [ "node", "server.js" ]