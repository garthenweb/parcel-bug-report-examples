const btoa = process.browser
  ? globalThis.btoa
  : (str) => Buffer.from(str.toString(), "binary").toString("base64");

console.log(btoa("test"));
