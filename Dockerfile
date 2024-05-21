FROM node:20-alpine3.18


ENV MONGODB_URI=mongodb+srv://vinh:teo0966533714@cluster0.zl2ae4t.mongodb.net/nodejs_test?retryWrites=true&w=majority&appName=Cluster0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
