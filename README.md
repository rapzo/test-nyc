test-nyc
========

This project's main goal is to probe nyc usage in simple cases.

It boils down to `npm test` and `npm run coverage` to get it going.

The extra bit is a super small copycat of the TJ's [debug](https://www.npmjs.com/package/debug) and a small runner for
spitting out the main module's result.

Defects on the main module (at the moment, a bigger than needed factorial implementation) may occur but are not the
issue at hand, only to see the instrumenter in action is the purpose of all this.

### debug.js

In order to use this micro helper, just provide a `LOG=nyc npm run coverage`, where `LOG=%s` takes a string, like the
original (and inspiring) module as the payload to log or not the messages registered along the code.

### license

WTFPL
