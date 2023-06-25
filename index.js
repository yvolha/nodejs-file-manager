import { userName } from './src/username.js';
import currentDir from './src/current-dir.js';

const startApp = () => {  
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${currentDir}`);
}

startApp();