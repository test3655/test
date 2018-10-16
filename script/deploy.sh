#!/bin/sh
ssh root@172.16.198.137 <<EOF
    cd /home/test
    git pull origin master
    npm install
    nodemon index.js
    exit
EOF