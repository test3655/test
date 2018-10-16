#!/bin/sh
cd /home/
git pull origin master
npm install
nodemon index.js
exit