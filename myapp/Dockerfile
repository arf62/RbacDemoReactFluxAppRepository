# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# copy the package.json file
COPY package.json .

# installs all the dependencies defined in the package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . . 

EXPOSE 3000

# start app
CMD ["npm", "start"]