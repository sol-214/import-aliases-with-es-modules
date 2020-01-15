import { URL, pathToFileURL } from 'url';
import fs from 'fs';

const baseURL = pathToFileURL(process.cwd()).href;

export async function resolve(s, parentModuleURL = baseURL, defaultResolve) {
  let specifier = s;

  if (specifier.indexOf('@/') === 0) {
    let path = `${process.cwd()}/src/${specifier.slice(2)}`;
    try {
      fs.statSync(path);
      // Must be a directory if no error
      path += '/index.js';
    } catch (e) {
      path += '.js';
    }
    specifier = new URL(path, parentModuleURL).href;
  }

  // Defer to Node.js for all other specifiers.
  return defaultResolve(specifier, parentModuleURL, defaultResolve);
}
