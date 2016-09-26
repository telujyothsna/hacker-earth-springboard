# Problem
The problem was given at [Hackerearth](https://www.hackerearth.com/springboard-frontend-hiring-challenge/).

# Demo
Please check the demo [here](http://139.59.29.115:9000)

# hacker-earth-springboard

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.0.5.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Deploy Instructions

Run `gulp build` that generates a `dist` folder with `client`, `server` and `package.json`. Zip and transfer compressed archive to server.

### On the server

Ensure your server has node, and mongodb. unzip the archive to a folder. Install `forever` with `npm install -g forever`.
Enter folder `dist` with `cd dist`.
Create a `production.json` file with the following contents. `vi production.json`. Press `i` to enter insert mode and paste in the following content.

```json
[
  {
    "uid": "springboard1",
    "append": true,
    "watch": true,
    "l": "/root/dist/logs/app1out.log",
    "e": "/root/dist/logs/app1err.log",
    "script": "app.js",
    "sourceDir":"/root/dist/server",
    "args": ["--port", "9000"]
  }
]
```

Start your server with forever start production.json
