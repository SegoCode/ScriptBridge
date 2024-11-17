# ScriptBridge

ScriptBridge is bridge to execute various types of files, including `.ps1`, `.bat`, `.cmd`, `.vbs`, `.js`, `.py`, and `.exe`, from a single point.

## Quick Start & Information

Follow these steps to set up and use ScriptBridge:

**Clone the repository**:
   ```shell
   git clone https://github.com/SegoCode/ScriptBridge.git
   cd ScriptBridge
   ```

**Install dependencies**:
   ```shell
   pnpm install
   ```

**Build the executable**:
   ```shell
   pnpm run build-exe
   ```

**Run a script using ScriptBridge**:
   ```shell
   ./ScriptBridge.exe "path/to/your/script.ps1" -yourArgument value
   ```

> [!NOTE]  
> Make sure that the script or executable has the necessary permissions and that all interpreters (Node, Python, PowerShell, etc.) are properly installed and configured in your PATH.

## Download

You can download the latest version of ScriptBridge from the [releases page](https://github.com/SegoCode/ScriptBridge/releases).

---
<p align="center"><a href="https://github.com/SegoCode/ScriptBridge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SegoCode/ScriptBridge" />
</a></p>

