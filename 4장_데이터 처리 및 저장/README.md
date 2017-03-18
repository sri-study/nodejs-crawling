window 10  iconv modules 설치 
 [출처] https://github.com/nodejs/node-gyp#installation
  
On Windows:

Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools using npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator). 
Option 2: Install tools and configuration manually:

Visual C++ Build Environment: 

Option 1: Install Visual C++ Build Tools using the Default Install option. 

Option 2: Install Visual Studio 2015 (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions. 

💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1 
Install Python 2.7 (v3.x.x is not supported), and run npm config set python python2.7 (or see below for further instructions on specifying the proper Python version and path.) 

Launch cmd, npm config set msvs_version 2015
