#!/bin/bash
set -ex

./scripts/translations.py download
./scripts/translations.py verify
