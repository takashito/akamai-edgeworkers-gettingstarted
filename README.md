# akamai-edgeworkers-gettingstarted

## 1. before you begin

+ install akamai CLI and edgeworker cli
```
brew install akamai
akamai install edgeworkers
```
+ get your .edgerc saved on your home directory

+ downlaod typescript-rollup project to your working directory


## 2. install package & etner your edgeworker info

you need to know your edgeworker name and property host name.

~~~
 yarn start

 ### (1/5) Install packages
 ### (2/5) Your EdgeWorker code name? : 
 ### (3/5) Description? : 
 ### (4/5) Set initial script version (default:0.0.1) : 
 ### (5/5) Property name associated with this ew code  : 
~~~

if you already have edgeworker id on portal
~~~
 yarn get-ewid
~~~
this will update ewid in package.json

## 3, create & start sandbox
~~~
 yarn new-sandbox
 yarn start-sandbox
~~~

## 4, do some code change
 change ./src/main.ts


## 5, update sandbox
~~~
  yarn update
~~~
this will compile your code and bundle requred package into simgle ./dist/bundle.tgz
and upload it to sandbox.


## 6, get your debug token updated
~~~
  yarn token
~~~


## 7, test your edgeworker code
~~~
  yarn test http://localhost:9550/path/
~~~

if code is not working, go back to #4.

## 8, if its working ok deploy it to staging & production
~~~
  yarn deploy
~~~


## 9, test it on staging or production
~~~
  yarn test https://yourdomain.com/edgeworker/path
~~~

