import Foo from '@/modules/Foo'; // This will import `src/modules/Foo.js`
import * as Modules from '@/modules'; // This will import `src/modules/index.js`

(function () {
  const string = Modules.Foo.getString();
  Foo.log(string, process.env.ENV_VAR);
})();