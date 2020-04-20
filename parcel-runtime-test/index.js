const { Runtime } = require("@parcel/plugin");
const path = require("path");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

// https://regex101.com/r/AM0c3m/1
const REGEX_REMOVE_EXTENSION = /(?:(?:\/index)|(?:\/index)?\.(?:\w|\d)+)$/;

exports.default = new Runtime({
  apply({ bundle, bundleGraph, options }) {
    if (bundle.type !== "js" || !bundle.isEntry) {
      return;
    }
    const imports = new Set();
    for (let b of bundleGraph.getBundles()) {
      if (bundle === b) {
        continue;
      }
      const importBundleName = path.relative(
        __dirname,
        b.getMainEntry().filePath
      );
      imports.add(importBundleName);
    }

    return {
      filePath: __filename,
      code: `globalThis.test = () => {
        ${[...imports].map((importPath) => `import("${importPath}")`).join(";")}
        }`,
      isEntry: true,
    };
  },
});
