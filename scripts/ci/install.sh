#!/bin/bash
set -ex

npm install -g i18next-parser
npm install
curl -sL https://firebase.tools | bash
pip3 install -r requirements.txt
