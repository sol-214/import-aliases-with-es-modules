[EcmaScript Modules](https://nodejs.org/api/esm.html#esm_ecmascript_modules) are supported in Node.js 13.6. This allows using `import` and `export` keywords natively.

Poor documentation (at the time of writing this), however, makes it difficult to organize project imports.

We can use Loader hooks to write [our own resolver](resolve.js) that will accommodate any sort of custom alias.

👉`npm install`

Then:

```bash
npm start
#> Hello undefined world!
```

```bash
npm run with-env
#> Hello big development world!
```

If you see [index.js](index.js), we are importing scripts from `@/`:

```javascript
import Foo from '@/modules/Foo'; // This will import `src/modules/Foo.js`
import * as Modules from '@/modules'; // This will import `src/modules/index.js`
```
