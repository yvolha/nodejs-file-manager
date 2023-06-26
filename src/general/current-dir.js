import { join, dirname, parse } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const homeDir = homedir();
const rootDir = parse(process.cwd()).root;
let currentDir = null;

export const updateCurrentDir = async (path) => {
  //console.log(rootDir)
  if (currentDir === null) {
    currentDir = homeDir;
  }
  
  if(path === 'up'){
    if (currentDir === rootDir) return;

    currentDir = join(currentDir, '..');
  }

  return currentDir;
}
