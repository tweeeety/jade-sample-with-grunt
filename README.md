# jade-sample-with-grunt
this is jade sample with grunt

## install grunt-cli
```
$ npm install -g grunt-cli
```
see more : http://tweeeety.hateblo.jp/entry/2015/03/15/163139

## clone jade-sample-with-grunt
```
$ git clone git@github.com:tweeeety/jade-sample-with-grunt.git
```

## initialize package
```
$ npm install
```

##### dir configuration
```
$ tree 
.
├── Gruntfile.js
├── README.md
├── dist
├── node_modules
│   ├── coffee-script
│   ├── grunt
│   ├── grunt-contrib-clean
│   ├── grunt-contrib-connect
│   ├── grunt-contrib-copy
│   ├── grunt-contrib-jade
│   ├── grunt-contrib-livereload
│   └── grunt-regarde
├── package.json
└── src
```

##### package.json
https://gist.github.com/tweeeety/eb755134750eef436d60

##### Gruntfile.js
https://gist.github.com/tweeeety/296c77f7c117820a9bc5


## exec jade
exec jade from grunt task
```
$ grunt
```

## confirm
When you run , make sure in your browser `http://localhost:8000/`

