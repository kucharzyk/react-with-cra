@echo off
setlocal
set PATH=%~dp0node/;%PATH%
node node/yarn/dist/bin/yarn.js %*
@echo on
