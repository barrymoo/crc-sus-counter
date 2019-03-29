FROM node:11.9.0-alpine
MAINTAINER Barry Moore "moore0557@gmail.com"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
