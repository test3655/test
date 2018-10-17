#!/bin/sh
cd /home/test
git pull origin master
npm install
systemctl restart test