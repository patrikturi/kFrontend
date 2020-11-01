#!/bin/bash
#
# $1: staging or production
set -ex


python -m unittest discover scripts

./scripts/switchconfig.sh $1

export PATH="$(yarn global bin):$PATH"
i18next
./scripts/translations.py normalize
./scripts/translations.py verify

yarn run build
