# Module resolution with tsc and ts-node

## CommonJS require

When using 'require' in typescript source code then this is behavior:

* tsc expects '.cjs' or '.js' in suffix of referenced file. It can not resolve '.ts' or '.cts' . See [main-require-cjs.cts](./src/main-require-cjs.cts)
* ts-node does expect '.ts' or '.cts' and can not resolve .cjs,.js . See [main-require-cjs.cts](./src/main-require-cjs.cts)

## ESM import

When using 'import' in typescript source code, then tsc and ts-node behave the same way. The ESM loader of ts-node needs to be used ( --esm flag ). However when using import syntax for commonJS modules (.cts , .cts ) , you can only import the default export. See [main-import.mts](./src/main-import.mts).

For *node 20* there is another problem. Unlike with node 18 it is not possible to use `ts-node --esm <file>` to resolve esm modules. Instead you need to use workarkound `node --loader ts-node/esm ./src/main-import.mts`