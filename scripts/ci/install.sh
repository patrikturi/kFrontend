#!/bin/bash
set -ex

yarn global add i18next-parser
yarn install
curl -sL https://firebase.tools | bash
pip3 install -r requirements.txt
