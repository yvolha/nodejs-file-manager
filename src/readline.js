import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const launchReadline = async () => {
  const rl = readline.createInterface({ input, output });

  rl.question('Please type your command.\n', (ans) => {
    if (ans == 'yes') {
      console.log(`Thank you for your valuable feedback: ${ans}`);
    } else {
      console.log('Closing');
      rl.close();
    }
  });
  
  
}

export default launchReadline;