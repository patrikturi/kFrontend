#!/bin/bash
#
# $1: staging or production
set -ex

python -m unittest discover scripts

./scripts/switchconfig.sh $1
yarn run build

i18next
./scripts/translations.py normalize
./scripts/translations.py verify
