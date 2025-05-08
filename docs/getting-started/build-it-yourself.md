# Build it yourself

#### The current releases of Macrame are Windows only, but you could build it yourself if you want to try Macrame on another OS.

_This is currently untested_

## Prerequisites

- [Go](https://go.dev/) should be installed on the system.

    _Version 1.24.0 has been used for the development._

- [Node](https://nodejs.org/en) and NPM should be installed on the system.

    _Version 20.11.1 and 22.15.0 both work, other versions have not been tested._

- GCC / GNU Compiler Collection. 

    - **Linux** 

        The GNU Compiler Collection will be pre-installed on most systems. 

        ```sh 
        sudo apt install build-essential # Debian
        sudo dnf groupinstall "Development Tools" # Fedora
        ```

      &nbsp;
      
    - **macOS**

      The GNU Compiler Collection is not pre-installed on macOS. 
      For the command below to work **Xcode Command Line Tools** should be installed.

        ```sh
        xcode-select --install
        ```

      &nbsp;

    - **Windows** 

        The GNU Compiler Collection is not pre-installed on Windows.

        Download and install: [MinGW - Minimalist GNU for Windows](https://sourceforge.net/projects/mingw/)

        &nbsp;
      

## How to build

1. Open the [development branch](https://github.com/Macrame-App/Macrame/tree/development) of the Macrame repository.

2. You could clone the repository to your system or download a zipped version of the repository. 

    *The zipped version should be unpacked on your system for you to continue*

3. Open de Macrame directory in a terminal or commandprompt and run the following command to build the application: 

    ```sh
    go build main.go
    ```

    If you're inclined to give the build a different name run: 

    ```sh
    go build -o Macrame main.go
    ``` 

4. When the application is build, it should have read and write privileges and be allowed in the firewall. 

    *It will only read and write inside the directory it is placed in.*

5. To build the UI that is displayed in the browser navigate to the 'fe' directory inside the terminal or commandprompt.
    Here you can run the following commands: 

    ```sh
    npm install
    npm run build
    ```

    This will generate a new web application inside the public directory. 

6. After this you can run the Macrame application and you should see a page like this open in the browser:

    ![Macrame Dashboard](/Start-Dashboard.jpg)
