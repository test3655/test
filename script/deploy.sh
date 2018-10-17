#!/bin/sh
ssh test <<EOF
    cd /home/test
    git pull origin master
    npm install
    node index.js
    exit
EOF