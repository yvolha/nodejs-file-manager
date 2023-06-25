import currentDir from './modules/current-dir.js';

const userName = 'Username' || 'Username';

const startApp = async () => {
  console.log(`Welcome to the File Manager, ${userName}!`);

  console.log(`You are currently in ${currentDir}`);
}

await startApp();