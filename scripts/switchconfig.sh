#!/bin/bash

CONFIG_NAME=$1

if [[ $CONFIG_NAME != "staging" ]] && [[ $CONFIG_NAME != "production" ]]; then
  echo "Invalid argument ${CONFIG_NAME}"
  exit 1
fi

echo "Switching config to ${CONFIG_NAME^}..."

sed -i "s/\.\.\.i18nDebugOptions/\.\.\.i18n${CONFIG_NAME^}Options/g" ./src/i18n.js
