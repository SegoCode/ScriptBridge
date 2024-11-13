# ScriptBridge

<h3 align="center"><img src="media/demo.png"></h3>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#quick-start--information">Quick Start & Information</a> •
  <a href="#download">Download</a>
</p>

## About

ScriptBridge is an execution proxy designed to simplify the execution of multiple types of scripts and executables through a unified interface. It provides a straightforward way to execute PowerShell, batch files, VBS, executables, JavaScript, Python scripts, and more, by simply specifying the file path and additional parameters if needed. This tool addresses the need for an efficient, consistent way to manage script executions without requiring specialized launchers for different file types.

## Features

- **Unified Script Execution**: Execute various types of files, including `.ps1`, `.bat`, `.cmd`, `.vbs`, `.js`, `.py`, and `.exe`, from a single point.

- **Parameter Proxying**: Pass parameters directly to the script or executable, allowing for dynamic input without additional configuration.

- **Multi-Platform Flexibility**: Supports different script interpreters such as Node.js, PowerShell, Python, Bash, etc., making it easy to execute scripts across different environments.

- **Simplicity**: Avoids the need for global installations by allowing users to run everything locally with a single command.

- **Security Considerations**: Highlights potential risks and provides controlled execution with specified interpreters.

## Quick Start & Information

Follow these steps to set up and use ScriptBridge:

1. **Clone the repository**:
   ```shell
   git clone https://github.com/{username}/ScriptBridge.git
   cd ScriptBridge
   ```

2. **Install dependencies**:
   ```shell
   pnpm install
   ```

3. **Build the executable**:
   ```shell
   pnpm run build-exe
   ```

4. **Run a script using ScriptBridge**:
   ```shell
   ./myproxy.exe "path/to/your/script.ps1" -yourArgument value
   ```

> [!NOTE]  
> Make sure that the script or executable has the necessary permissions and that all interpreters (Node, Python, PowerShell, etc.) are properly installed and configured in your PATH.

> [!TIP]
> You can create an alias or shortcut for `myproxy.exe` for quicker access.

> [!IMPORTANT]  
> Scripts like `.ps1` require PowerShell's execution policy to allow running. You may need to adjust the execution policy accordingly (`-ExecutionPolicy Bypass`).

> [!WARNING]  
> Be cautious about running scripts from untrusted sources. Always verify the script contents to avoid potential security risks.

> [!CAUTION]
> Incorrect file paths or missing interpreters can lead to execution errors.

### Available Parameters

Example 1
```shell
myproxy.exe -help
```
*Displays available options and usage instructions for ScriptBridge.*

Example 2
```shell
myproxy.exe "path/to/your/script.sh" -done
```
*Executes the shell script with the `-done` parameter.*

## Download

You can download the latest version of ScriptBridge from the [releases page](https://github.com/{username}/ScriptBridge/releases).

---
<p align="center"><a href="https://github.com/{username}/ScriptBridge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo={username}/ScriptBridge" />
</a></p>

