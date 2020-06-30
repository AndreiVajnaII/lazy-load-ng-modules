# lazy-load-ng-modules

A demo of how to lazy load modules with Angular Ivy.

Even though you can lazy load a component without a module, sometimes you need to load the module, too. This is how it's done with Ivy.

"Load component" shows how to create a component, knowing its type.

The rest is a proof of concept "module exploer" that lazy loads a module or the other, displays its components, which can be instantiated.

For an explanation of how this works read [Lazy loading Angular modules with Ivy](https://indepth.dev/lazy-loading-angular-modules-with-ivy/)

**NOTE**: As noted in the mentioned article, the "module explorer" does not work when built with the `--prod` flag.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/lazy-load-ng-modules)
