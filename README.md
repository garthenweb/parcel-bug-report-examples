# Run `npm start`

The build fails with the following error

```
Error: node_modules/@sentry/utils/esm/index.js does not export 'timestampWithMs'
    at replaceExportNode (.../parcel-bug-report-examples/node_modules/@parcel/scope
-hoisting/lib/link.js:133:13)
    at ReferencedIdentifier (.../parcel-bug-report-examples/node_modules/@parcel/sc
ope-hoisting/lib/link.js:533:18)
    at newFn (.../parcel-bug-report-examples/node_modules/@babel/traverse/lib/visit
ors.js:220:17)
    at NodePath._call (.../parcel-bug-report-examples/node_modules/@babel/traverse/
lib/path/context.js:55:20)
    at NodePath.call (.../parcel-bug-report-examples/node_modules/@babel/traverse/l
ib/path/context.js:42:17)
    at NodePath.visit (.../parcel-bug-report-examples/node_modules/@babel/traverse/
lib/path/context.js:90:31)
    at TraversalContext.visitQueue (.../parcel-bug-report-examples/node_modules/@ba
bel/traverse/lib/context.js:112:16)
    at TraversalContext.visitSingle (.../parcel-bug-report-examples/node_modules/@b
abel/traverse/lib/context.js:84:19)
    at TraversalContext.visit (.../parcel-bug-report-examples/node_modules/@babel/t
raverse/lib/context.js:140:19)
    at Function.traverse.node (.../parcel-bug-report-examples/node_modules/@babel/t
raverse/lib/index.js:84:17)
```

`npm run start:simple` works as expected.