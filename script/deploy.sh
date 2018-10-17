#!/bin/sh
sudo cd /home/test
sudo git pull origin master
sudo npm install
sudo systemctl restart test