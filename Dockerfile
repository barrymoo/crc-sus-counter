FROM node:10
MAINTAINER Barry Moore "moore0557@gmail.com"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
