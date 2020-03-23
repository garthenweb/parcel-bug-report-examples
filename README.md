# run `npm start`

After opening the browser, the JS fails with `$ea7b41558fa2f98$$interop$default.createElement is not a function` in `Page2.6ea5d4ae.js:15` bundle while executing

``` js
var $c302d056b50b4a5fdc682b4f5c4e00e$export$default = function Page2() {
  var $ea7b41558fa2f98$$interop$default = $parcel$interopDefault($ea7b41558fa2f98$exports);
  return $ea7b41558fa2f98$$interop$default.createElement("div", null, "Page 2");
};

```

More or less the same code works as expected in the main bundle:

``` js
var $ea7b41558fa2f98$$interop$default = $parcel$interopDefault($ea7b41558fa2f98$exports);
var $b350cd9db4549ae05bfb23b905ede80$var$Layout = $ea7b41558fa2f98$$interop$default.lazy(function () {
  return $d4c6e27372c24093a892237e9305ff53$init();
});
```

Module `$ea7b41558fa2f98$exports` is react.