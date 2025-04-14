# build docker image from node js base image
From node:18

# create work dir
WORKDIR /app

# copy package.json file
COPY package.json ./

#install dependencies
RUN npm install

# expose port
EXPOSE 5001

CMD ["npm","start"]