#!/bin/bash
#
# $1: staging or production
set -ex

firebase deploy --only hosting:$1
