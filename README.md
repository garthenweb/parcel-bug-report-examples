# Does not remove dependencies that are not used after dead code elimination

Run `npm run build`.

Observe the output file `dist/index.js` contains all the browser code for Buffer even though it is never used.

The executed code is compiled correctly to `G=globalThis.btoa;console.log(G("test"))`.
