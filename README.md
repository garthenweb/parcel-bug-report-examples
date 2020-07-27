# CommonJS shared child bundle over 50kb fails

When having a large dependency of two child bundles, the CommonJS generation fails with to following error at build time:

```
🚨 Build failed.
@parcel/packager-js: Got unexpected undefined
Error: Got unexpected undefined
    at nullthrows (/.../parcel-bug-report-examples/node_modules/nullthrows/nullthrows.js:7:15)
    at Object.generateExports (/.../parcel-bug-report-examples/node_modules/@parcel/scope-hoisting/lib/formats/commonjs.js:328:49)
    at exit (/.../parcel-bug-report-examples/node_modules/@parcel/scope-hoisting/lib/link.js:640:31)
    at NodePath._call (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/path/context.js:55:20)
    at NodePath.call (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/path/context.js:42:17)
    at NodePath.visit (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/path/context.js:99:8)
    at TraversalContext.visitQueue (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/context.js:112:16)
    at TraversalContext.visitSingle (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/context.js:84:19)
    at TraversalContext.visit (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/context.js:140:19)
    at Function.traverse.node (/.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/index.js:84:17)
```

Run `npx parcel build --target server src/index.js` or `npm run build` to run the example.

Compare to `npx parcel build --target browser src/index.js` which is working as expected.
