import { userName } from './src/general/username.js';
import { updateCurrentDir } from './src/general/current-dir.js';
import launchReadline from './src/general/readline.js';

const startApp = async () => {  
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${await updateCurrentDir()}`);

  await launchReadline();
}

startApp();