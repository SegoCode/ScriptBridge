// ScriptBridge: A versatile script execution proxy for Windows

const { spawn } = require('child_process');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: ScriptBridge.exe <file_path> [arguments...]');
  process.exit(1);
}

const filePath = process.argv[2];
const args = process.argv.slice(3);
const ext = path.extname(filePath).toLowerCase();

let command;
let commandArgs = [];

switch (ext) {
  case '.exe':
  case '.bat':
  case '.cmd':
    command = filePath;
    commandArgs = args;
    break;
  case '.ps1':
    command = 'powershell.exe';
    commandArgs = ['-ExecutionPolicy', 'Bypass', '-File', filePath, ...args];
    break;
  case '.vbs':
    command = 'cscript.exe';
    commandArgs = [filePath, ...args];
    break;
  case '.js':
    command = 'node';
    commandArgs = [filePath, ...args];
    break;
  case '.py':
    command = 'python';
    commandArgs = [filePath, ...args];
    break;
  case '.hta':
    command = 'mshta';
    commandArgs = [filePath, ...args];
    break;
  case '.wsf':
    command = 'cscript.exe';
    commandArgs = [filePath, ...args];
    break;
  default:
    console.error(`Unsupported file extension: ${ext}`);
    process.exit(1);
}

const child = spawn(command, commandArgs, { stdio: 'inherit' });

child.on('error', (err) => {
  console.error(`Error executing command: ${err.message}`);
});

child.on('exit', (code, signal) => {
  if (code !== null) {
    process.exit(code);
  } else if (signal) {
    console.error(`Process terminated with signal: ${signal}`);
    process.exit(1);
  }
});
