FROM node:20

WORKDIR /app

# Forzamos a instalar todas las dependencias (incluyendo las opcionales)
ENV npm_config_optional=false

COPY package*.json ./

# Instala Angular CLI global y las dependencias del proyecto
RUN npm install -g @angular/cli@20 && npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
