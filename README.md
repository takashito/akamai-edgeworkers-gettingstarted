# akamai-edgeworkers-gettingstarted

after downloading "typescript-rolleup" to your working directory

## 1. get your .edgerc saved on your home directory

## 2, install package & etner your edgeworker info

you need to know your edgeworker name and property host name.

~~~
 yarn start
~~~


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


## 8, if its working ok deploy it to staging & production
~~~
  yarn deploy
~~~


## 9, test it on staging or production
~~~
  yarn test https://yourdomain.com/edgeworker/path
~~~

