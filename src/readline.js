import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { userName } from './username.js';

const launchReadline = async () => {
  console.log('Please type your command.\n');

  const rl = readline.createInterface({ input, output });

  rl.on('line', (input) => {
    if (input == 'yes') {
      console.log(`Thank you for your valuable feedback: ${input}\n`);
    } else if (input === '.exit') {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      rl.close();
    } else {
      console.log('Invalid input.\n');
    }
  });
  
  rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
  });

}

export default launchReadline;