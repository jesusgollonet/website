---
title: 'A typescript rabbit hole'
date: '2023-04-30T13:08:14Z'
draft: false
---

Preface: I'm still inside the hole. There's no wisdom to be gained for
continuing. This is just a stake in the ground to come back to.

All I wanted was to add footnotes.

I use remark to parse markdown for the entries of this blog and I wanted to add
a footnote. The plugin for supporting github flavored markdown (and therefore
footnotes) was throwing a typescript error I didn't understand, so I created an
empty project to figure out what was going on.

A few iterations later, I switched over to micromark as a simpler alternative. I
boiled my minimal example down to this \*:

```typescript
import {micromark} from 'micromark'
console.log(micromark('hello'))
```

Compiling and running (`tsc index.ts && node index.js`) throws an error :

ReferenceError: exports is not defined in **ES module scope**. This file is being treated as an ES module because it has a '.js' file extension and 'package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

Ok so [micromark is ESM only](https://github.com/micromark/micromark#install)i,
which means the source files already use import/export syntax. According to (my
reading of) the typescript docs for [Ecmascript modules in
Node.js](https://www.typescriptlang.org/docs/handbook/esm-node.html), I should
be able to use it just by adding 'type:module' to my package.json,
and module:nodenext to my tsconfig.json`, but I have tried that, and a thousand
combinations of `module`, `moduleResolution`, `esModuleInterop`, and typescript refuses to ever compile anytyhing with ESM syntax. 

It's always the same `require` call importing `micromark`:

```javascript
"use strict";
exports.__esModule = true;
var micromark_1 = require("micromark");
console.log((0, micromark_1.micromark)(" # Hello, world!"));
```

I've given up for the moment. but here's a few references that have been helpful
in providing some context / understanding of the problem (and a bit of comfort
that something is messed up and it's not just that I'm an idiot):

- [An epic long Stack Overflow answer to compile an ESM dependency into a CommonJS project](https://stackoverflow.com/questions/70545129/compile-a-package-that-depends-on-esm-only-library-into-a-commonjs-package)

- [A gist about Pure ESM packages](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

- [Typescript and native ESM in Node.js](https://2ality.com/2021/06/typescript-esm-nodejs.html)

If you are frustrated that you got here and there's indeed no solution, I guess
now you know how I feel.

\* Funnily enough, syntax highlighting is also a plugin away, that's why code
looks so bad in this entry.

\*\* Even more funny. You see? I still can't do footnotes! 
