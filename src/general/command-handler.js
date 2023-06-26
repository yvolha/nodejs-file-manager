import { updateCurrentDir } from "./current-dir.js";
import { cmdLs, cmdUp, cmdCd } from "../commands/navwd.js";
import { cmdAdd, cmdCat, cmdCp, cmdMv, cmdRm, cmdRn } from "../commands/basic.js";
import { cmdArchitecture, cmdCpus, cmdEOL, cmdHomedir, cmdUsername } from "../commands/sysinfo.js";
import { cmdHash } from "../commands/hash.js";

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
      case 'os':

        switch (commandArgs[0]) {
          case '--EOL':
            await cmdEOL();
            break;
          case '--cpus':
            await cmdCpus();
            break;
          case '--homedir':
            await cmdHomedir();
            break;
          case '--username':
            await cmdUsername();
            break;
          case '--architecture':
            await cmdArchitecture();
            break;
          default: 
          console.log('Invalid input.\n');
        }

        break;
      case 'hash':
        await cmdHash(commandArgs[0]);
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
