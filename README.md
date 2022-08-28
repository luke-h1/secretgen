# secretgen

> generate secrets/passwords from the command line

Cross-platform. Supports: macOS, Windows, Linux

## Install

```sh
git clone https://github.com/luke-h1/secretgen
cd secretgen
npm ci 
npm link # symlink globally
secretgen -h 
```

## Usage

```sh
  secretgen [options] 

  Options:
  -V, --version          output the version number
  -l, --length <number>  length of password (default: "50")
  -s, --save             save password to `passwords.txt` file
  -nn, --no-numbers      generate password without numbers
  -ns, --no-symbols      generate password without symbols
  -h, --help             display help for command
  
```

