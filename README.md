# akamai-edgeworkers-gettingstarted

after downloading "typescript-rolleup" to your working directory

## 1. get your .edgerc saved on your home directory

## 2, install required packages
~~~
 yarn install
~~~

## 3, etner your edgeworker info
~~~
 yarn start
~~~

## 4, create & start sandbox
~~~
 yarn new-sandbox
 yarn start-sandbox
~~~

## 5, do some code change
 change ./src/main.ts

## 6, update sandbox
~~~
  yarn update
~~~
this will compile your code and bundle requred package into simgle ./dist/main.js
and upload it to sandbox.

## 7, get your debug token updated
~~~
  yarn token
~~~

## 8, test your edgeworker code
~~~
  yarn test http://localhost:9550/path/
~~~

## 9, if its working ok deploy it to staging & production
~~~
  yarn deploy
~~~

## 10, test it on staging or production
~~~
  yarn test https://yourdomain.com/edgeworker/path
~~~

