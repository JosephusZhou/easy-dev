<img src="/assets/icon.png" alt="logo" height="120" align="right" />

# Easy Dev

*A dev tool which can simplify operation for Android developer. Built with [Electron](https://github.com/atom/electron).*


**Important:** If you want to build the app by yourself rather than download the release directly, please consider to use the source code from [the master branch](https://github.com/JosephusZhou/easy-dev/tree/master), the develop branch is under development and we cannot guarantee it to be stable.

[![Build Status](https://img.shields.io/github/stars/JosephusZhou/easy-dev.svg)](https://github.com/JosephusZhou/easy-dev)
[![Build Status](https://img.shields.io/github/forks/JosephusZhou/easy-dev.svg)](https://github.com/JosephusZhou/easy-dev)

![Example](https://github.com/JosephusZhou/easy-dev/blob/master/images/demo.png)

## Change logs

* 0.0.3
    * Fix a bug that cannot use edit shortcuts under MacOS
    
* 0.0.2
    * Adjust the initial size of the window
    * Optimization constant naming
    * Automatically run the "git add *" command after copying the files

* 0.0.1
    * First version

## Features

* Simplify the operation of copying multiple different dpi resource files

## How To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your OS. From your command line:

``` bash
# Clone this repository
git clone https://github.com/JosephusZhou/easy-dev.git
# Go into the repository
cd easy-dev
# Install dependencies and run the app
npm install && npm start
```

To pack into an app, simply type one of these:

``` shell
npm run build-osx
```

#### [Download Released App](https://github.com/JosephusZhou/easy-dev/releases)

#### License [MIT](LICENSE.md)

*Easy Dev* is free.
