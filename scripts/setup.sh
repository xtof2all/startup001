#!/bin/bash
# This ia a script to bootstrap development with Node.js.

sudo apt-get update
sudo apt-get install -y git-core
#wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh

# Starting with the node.js install
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# Version
echo "NPN:"
npm --version
echo "Node:"
node --version

sudo apt-get install -y screen

