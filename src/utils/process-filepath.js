import { join } from 'path';

import { updateCurrentDir } from "../general/current-dir.js";

// process the given path to create the correct path format for both relative and absolute path input
export const createPathToFile = async (path) => {
  if (typeof path === 'string'){
    path.trim();

    if (path.startsWith('.')) {
      return join(await updateCurrentDir(), path.replace(/^["'](.+(?=["']$))["']$/, '$1')); 
    } else {
      return path.replace(/^["'](.+(?=["']$))["']$/, '$1');
    }
  }
  return;
}
