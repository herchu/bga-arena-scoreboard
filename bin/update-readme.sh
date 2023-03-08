#!/bin/bash
#
# Create a bookmarklet from current code src/score.js.
# This appends javascript: and the (function(){})() trick to evaluate it
CODE=$(node make-bookmarklet.js < ../src/score.js)
echo $CODE
# Replace the javascript:... snippet in the README by the updated boorkmarklet
# Note that CODE is safe to use within the regexp, since it is uri-encoded
sed "s/javascript:.*/$CODE/g" ../README.md
