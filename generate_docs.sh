#!/bin/bash
for d in ./src/*/
do
  mkdir -p docs/components/`basename $d`
  node_modules/.bin/vuedoc.md ${d}vgl-*.js --output docs/components/`basename $d` --level 2 --ignore-name --ignore-computed --ignore-data
done