# build docker image from node js base image
FROM node:18

# create work dir
WORKDIR /app

# copy package.json file
COPY package.json ./

# install dependencies
RUN npm install

# copy the rest of the app
COPY . .

# expose port
EXPOSE 5001

# start the app
CMD ["npm", "start"]
