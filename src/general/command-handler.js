import { updateCurrentDir } from "./current-dir.js";
import { cmdLs, cmdUp, cmdCd } from "../commands/navwd.js";
import { cmdAdd, cmdCat, cmdCp, cmdMv, cmdRm, cmdRn } from "../commands/basic.js";

const handleCommand = async (command) => {
  try {
    const commandBase = command.split(' ')[0];
    const commandArgs = command.toString().trim().split(' ').slice(1).filter(e => e);
    
    console.log("args in handleCommand", commandBase, commandArgs);
  
    switch (commandBase) {
      case 'ls':
        await cmdLs(await updateCurrentDir());
        break;
      case 'up':
        await cmdUp();
        break;
      case 'cd':
        await cmdCd(commandArgs[0]);
        break;
      case 'cat':
        await cmdCat(commandArgs[0]);
        break;
      case 'add':
        await cmdAdd(commandArgs[0]);
        break;
      case 'rn':
        await cmdRn(commandArgs[0], commandArgs[1]);
        break;
      case 'cp':
        await cmdCp(commandArgs[0], commandArgs[1]);
        break;
      case 'mv':
        await cmdMv(commandArgs[0], commandArgs[1]);
        break;
      case 'rm':
        await cmdRm(commandArgs[0]);
        break;
      default: 
      console.log('Invalid input.\n');
    }
   
  } catch (err) {
    console.log('Invalid input.\n', err);
  }
  
  console.log(`You are currently in ${await updateCurrentDir()}\n`);
}

export default handleCommand;
