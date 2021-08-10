# @vue/compat createElement example

This example demonstrates how @vue/compat does not warn on the use of createElement in render functions.

Buefy and many other Vue 2 libraries use `render(createElement)` and `render(createElement, context)` (, ... etc.) in many places.

@vue/compat is helpful in providing upgrade warnings, but does not provide any warnings about the use of createElement, which should be very easy to do with static analysis.

## Run

```
yarn install
yarn run serve
```

Visit http://localhost:1234, open the console, and note the following error:

## Actual Behavior

@vue/compat provides some good warnings in the browser about other incompatibilities with Vue 3:
```
[Vue warn]: (deprecation OPTIONS_BEFORE_DESTROY) `beforeDestroy` has been renamed to `beforeUnmount`.
  at <BNavbar>
  at <App>
```

But errors out on createElement:

```
Uncaught TypeError: createElement is not a function
    at Proxy.genBurgerNode (navbar.js:338)
    at Proxy.genNavbarBrandNode (navbar.js:334)
    at Proxy.genNavbar (navbar.js:305)
    at Proxy.render (navbar.js:408)
    at renderComponentRoot (vue.esm-bundler.js:2612)
    at ReactiveEffect.componentUpdateFn [as fn] (vue.esm-bundler.js:7156)
    at ReactiveEffect.run (vue.esm-bundler.js:607)
    at setupRenderEffect (vue.esm-bundler.js:7283)
    at mountComponent (vue.esm-bundler.js:7074)
    at processComponent (vue.esm-bundler.js:7032)
```

## Expected Behavior

By default, @vue/compat should either:
* shim createElement and output a warning, or
* error out on compile.
