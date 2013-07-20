## july-meetup

### [npm](http://npmjs.org)

'Contrary to the belief of many, "npm" is not in fact an abbreviation for "Node Package Manager". It is a recursive bacronymic abbreviation for "npm is not an acronym".' - [Isaac Z. Schlueter](https://twitter.com/izs)

* Node Packaged Modules
* Official package manager for Node.js
* Now bunlded with Node.js

```
$ man npm

No manual entry for npm

```

```
$ npm foobar

Usage: npm <command>

where <command> is one of:
    add-user, adduser, apihelp, author, bin, bugs, c, cache,
    completion, config, ddp, dedupe, deprecate, docs, edit,
    explore, faq, find, find-dupes, get, help, help-search,
    home, i, info, init, install, isntall, la, link, list, ll,
    ln, login, ls, outdated, owner, pack, prefix, prune,
    publish, r, rb, rebuild, remove, restart, rm, root,
    run-script, s, se, search, set, show, shrinkwrap, star,
    start, stop, submodule, tag, test, tst, un, uninstall,
    unlink, unpublish, unstar, up, update, version, view,
    whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm faq          commonly asked questions
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    /Users/tjkrusinski/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@1.1.66 /usr/local/lib/node_modules/npm

```

#### Now we're getting somewhere.

* npm commands are simple, most commonly, `$ npm install`.
* Packages are installed into a local directory titled `node_modules` by default.
* `$ npm install express connect` will install the latest published versions of [express](https://npmjs.org/package/express) and [connect](https://npmjs.org/package/connect).
* `$ npm install express@2.0.0` will install [express](https://npmjs.org/package/express) at the published version `2.0.0`.
* npm packages typically follow the [major.minor.patch](http://en.wikipedia.org/wiki/Software_versioning#Incrementing_sequences) sequenced based versioning.
* `$ npm install express --save` will install express into your local `node_modules` directory and list express as a dependency in your `package.json`.
* From then on, running `$ npm install` with no arguments will install or update all dependencies listed in your `package.json`.
* `$ npm install grunt -g` will install [grunt](https://npmjs.org/package/grunt) in your `global` npm directory.
* `global` npm directory is at (by default) `/usr/local/lib/node_modules/`.
* When installing a gloabl package, npm copies the package's bin files to `/usr/local/bin`.
* You can easily initiate a package with the `$ npm init` wizard.
* Publish packages with the `$ npm publish` wizard.

### package.json

* [Great overview of package.json](http://package.json.nodejitsu.com)
* package.json manages your package or project.
* Use package.json for any Node.js project, not just public packages.
* If you don't want to publish the package, just don't run `$ npm publish`.
* package.json is the best way to manages dependencies.
* The `scripts` object is great for aliasing automated tasks.

```

{
	"scripts": {
		"test":"mocha tests --timeout 5s --recursive", // run my tests
		"minify":"grunt uglify sass" // minify my client side files
	}
}

```
```
$ npm test

> package@1.0.58 test /Users/tjkrusinski/web/package
> mocha tests --timeout 10s --recursive


```

* The `devDependencies` object allows you to not require installing devevelopment specific dependiencies.
* `$ npm install --dev` will install the development specified dependencies.
* `$ npm install --saveDev` will save the package as a development specific dependency.
* Use git repos as dependencies `"private": "git+ssh://git@github.com:owner/repo.git"`




### `require()`

* `require()` function that imports modules to the calling module.
* Scoped locally to the module it is called in.
* `require()` takes a single String argument.
* `require()` is syncronus, no callbacks involved.

```
// imports packages
var express = require('express'),
	redis = require('redis');
	
// import relative files
var module = require('./db/connection.js');

// The name of the directory that the currently executing script resides in.
console.log(__dirname);
// /Users/tjkrusinski/Websites/Meetups/july-meetup

// to make sure you absolutely get the file you want.
var module = require(__dirname+'/file.js');

```

* Allows access only to objects that are on the `exports` object in the required module.
* Does not alter the global `process` object.
* Requiring a module once in your project will cache the result and return that from then on from memory.
* Modify `require.cache` (Object) to fully reload a module.
* Personally never encountered having to do this.
* Use `require.resolve()` to inspect the file path that `require()` is going to use.

```
var module = require(__dirname+'/myModule.js');

delete require.cache[__dirname+'/myModule.js'];

// get a fresh copy
var module = require(__dirname+'/myModule.js');

console.log(require.resolve(__dirname+'/myModule.js'));
// '/Users/tjkrusinski/Websites/Meetups/july-meetup/myModule.js'

```

### `exports`

* Allow modules that `require()` the local modules to access it.
* `exports` is an instance of `Object`.
* `module.exports` is a reference to the local module.
* If you require a module that uses the `module.exports` object, it returns whatever it is set to, `String`, `Object`, `Function` etc.

* Using `exports`

foo.js

```
exports.foo = 'bar';

```

bar.js

```
console.log(require('./foo.js')));
// {foo:'bar'}

```

* Using `module.exports`

foo.js

```
module.exports = 'bar';

```

bar.js

```
console.log(require('./foo.js')));
// 'bar'

```
















