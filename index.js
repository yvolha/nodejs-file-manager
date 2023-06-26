import { userName } from './src/username.js';
import currentDir from './src/current-dir.js';
import launchReadline from './src/readline.js';

const startApp = async () => {  
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${currentDir}`);
  await launchReadline();
}

startApp();