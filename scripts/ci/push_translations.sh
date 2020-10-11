#!/bin/bash
#
# $1: staging or production
set -ex

./scripts/translations.py upload --dest-path /locales
./scripts/translations.py upload --dest-path /Fast.io/ksoccer-translations.imfast.io/$1/locales
