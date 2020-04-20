# Manifest that injects child bundles behaves unexpected

1. run `npm run watch`
2. open `dist/index.js` and search for "child console"
3. open `dist/child.<hash>.js` and search for "child console"
4. observe the string is available in both bundles/ the asset is duplicated
5. open `src/child.js` and change the content, e.g. change it to `console.log("child changed console")`
6. observe cli interface bundles again
7. observe that the files and their content in the dist folder does not change
8. cancel the watch task
9. remove the custom manifest "parcel-runtime-test" from the `.parcelrc`
10. add `globalThis.test = () => import("./child");` to `src/index.js`
11. repeat step 1 to 6 but observe that the content changes and is not duplicated