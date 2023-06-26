import os from 'os';

export const cmdEOL = async () => {
  console.log(`OS EOL: ${JSON.stringify(os.EOL)}`);
}

export const cmdCpus = async () => {
  const cpusInfo = os.cpus().map(({model, speed}) => ({model, speed: `${speed / 1000} GHz`}));
  console.table(cpusInfo);
  console.log('Amount of CPUS:', os.cpus().length);
}

export const cmdHomedir = async () => {
  console.log(`Home directory: ${os.homedir()}`);
}

export const cmdUsername = async () => {
  const { username }  = os.userInfo();
  console.log(`System user name: ${username}`);
}

export const cmdArchitecture = async () => {
  console.log(`CPU architecture: ${os.arch()}`);
}