<img src="/assets/icon.png" alt="logo" height="120" align="right" />

# Easy Dev

**Deprecated!!!**

**Please use [haha_tools](https://github.com/JosephusZhou/haha_tools)**

*A dev tool which can simplify operation for Android developer. Built with [Electron](https://github.com/atom/electron).*


**Important:** If you want to build the app by yourself rather than download the release directly, please consider to use the source code from [the master branch](https://github.com/JosephusZhou/easy-dev/tree/master), the develop branch is under development and we cannot guarantee it to be stable.

[![Build Status](https://img.shields.io/github/stars/JosephusZhou/easy-dev.svg)](https://github.com/JosephusZhou/easy-dev)
[![Build Status](https://img.shields.io/github/forks/JosephusZhou/easy-dev.svg)](https://github.com/JosephusZhou/easy-dev)

![Example](https://github.com/JosephusZhou/easy-dev/blob/master/images/demo.png)
![Example2](https://github.com/JosephusZhou/easy-dev/blob/master/images/demo-qrcode.png)

## Change logs

* 0.1.1
    * Add multiple language options
* 0.1.0
    * Update Electron Version
    * Add more functions
    * Rewrite UI with bulma.css
* 0.0.4
    * Update Electron Version
    * Add the function for QrCode decode
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
* Qr Code Decode, only in macOS App Menu. If you work on Windows OS, please modify `menuhandler.js` and build `exe`.

## How To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your OS. From your command line:

``` bash
# Clone this repository
git clone https://github.com/JosephusZhou/easy-dev.git
# Go into the repository
cd easy-dev
# Install dependencies and run the app
npm install && npm start
# If you are in mainland China, please use the follow command to install dependencies and run the app
ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/" npm install && npm start
```

To pack into an app, simply type one of these:

``` shell
npm run build-osx
```

#### [Download Released App](https://github.com/JosephusZhou/easy-dev/releases)

#### License [MIT](LICENSE.md)

*Easy Dev* is free.
