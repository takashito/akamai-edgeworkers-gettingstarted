# akamai-edgeworkers-gettingstarted

after downloading "typescript-rolleup"

1. get your .edgerc saved on your home directory

2, install required packages
~~~
 yarn install
~~~

2, etner your edgeworker info
~~~
 yarn start
~~~

3, create & start sandbox
~~~
 yarn new-sandbox
 yarn start-sandbox
~~~

4, do some code change

5, update sandbox
~~~
  yarn update
~~~

6, get your debug token updated
~~~
  yarn token
~~~

7, test your edgeworker code
~~~
  yarn test http://localhost:9550/path/
~~~

8, if its working ok deploy it to staging & production
~~~
  yarn deploy
~~~

