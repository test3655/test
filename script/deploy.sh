#!/bin/sh
ssh root@172.16.198.137 <<EOF
    sudo cd /home/test
    sudo git pull origin master
    sudo npm install
    sudo nodemon index.js
    exit
EOF