<p align="center">
  <a href="">
    <img alt="yo OCaml!" src="logo.png">
  </a>
</p>

<p align="center">
  A Yeoman generator that provides a functional boilerplate to easily scaffold OCaml modules.
</p>

<p align="center">
  <a href="npm-url"><img alt="NPM version" src="npm-image"></a>
  <a href="travis-url"><img alt="Build Status" src="travis-image"></a>
  <a href="codeclimate-url"><img alt="Code Quality" src="codeclimate-image"></a>
  <a href="coveralls-url"><img alt="Coverage Status" src="coveralls-image"></a>
  <a href="daviddm-url"><img alt="Dependency Status" src="daviddm-image"></a>
  <a href="daviddm-url"><img alt="devDependency Status" src="daviddm-image"></a>
</p>

## Table of Contents

- [This Project](#this-project)
  - [Scaffold OCaml modules?](#scaffold-ocaml-modules)
  - [Getting To Know Yeoman](#getting-to-know-yeoman)
- [Installation](#installation)
- [Usage](#usage)
  - [Getting Started](getting-started)
  - [Other Options](#other-options)
- [History](#history)
- [License](#license)

## This Project

### Scaffold OCaml modules?

<img src="http://namaristats.com/static/img/langs/logo-ocaml.png" align="left" alt="OCaml">

OCaml is a general purpose programming language with an emphasis on expressiveness
and safety which supports functional, imperative and object-oriented paradigms
and features a powerful type system, user-definable algebraic data types and
pattern-matching.

This project is [Yeoman generator](#getting-to-know-yeoman) that provides a
[OCaml](https://ocaml.org/) project skeleton with the following integrated
features:

- The [OASIS](http://oasis.forge.ocamlcore.org/) build-system
- The [OCamlDoc](http://caml.inria.fr/pub/docs/manual-ocaml/ocamldoc.html) automatic documentation generation
- The [OUnit](http://ounit.forge.ocamlcore.org/) testing framework
- The [Bissect](http://bisect.x9c.fr/) code coverage framework

### Getting To Know Yeoman

<img src="http://128bitstudios.com/images/logo/yeoman.png" align="right" alt="Yeoman">

*Yeoman* is a [node.js](https://nodejs.org/) tool used to scaffold new
applications. It can create common project assets like stylesheets and JavaScript
files. Basically Yo provides an easy way to create all of the boilerplate code
you need to get started on a project.

Feel free to learn more about it [here](http://yeoman.io/).

## Installation

First, make sure you have the main dependencies:

- *node.js* dependencies:
  - [node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/)
  - [Yeoman](http://yeoman.io)
- *OCaml* dependencies:
  - [OCaml](https://ocaml.org/)
  - [OPAM](https://opam.ocaml.org/)
- General
  - [GNU Make](https://www.gnu.org/software/make/)

Then install the `generator-ocaml`.

```bash
npm install -g generator-ocaml
```

## Usage

<p align="center">
  <a href="">
    <img alt="yo OCaml!" src="http://i.imgur.com/qUjy4jZ.png" width="900px">
  </a>
</p>

### Getting Started

1. Generate your new project:

  ```bash
  yo ocaml
  ```

  > You will be asked the following about your project:

  > - *What's the package name?*
  > - *What's your package all about?*
  > - *What's the package version?*
  > - *What's your name?*
  > - *What's your email?*
  > - *What's your Github username?*
  > - *Choose your license type (Use arrow keys)*

  And the you should see the following structure:

  ```bash
  |-- lib/
  |   |-- myModule.ml/
  |-- test/
  |   |-- myModule_test.ml
  |-- .gitattributes
  |-- .gitignore
  |-- _oasis
  |-- CHANGELOG.md
  |-- CONTRIBUTING.md
  |-- LICENSE.md
  |-- Makefile
  |-- README.md
  ```

1. Install the *OCaml* dependencies:

  ```bash
  opam init
  opam install oasis ounit bissect
  ```

1. Generate the `setup.ml` file - which will handle any high-level operation on
the project source.

  ```bash
  oasis setup
  ```

1. Configure the build-system:

  ```bash
  ocaml setup.ml -configure --enable-tests
  ```

1. Build the project:

  ```bash
  make
  ```

### Other Options

To run the test suite, you just have to:

```bash
make tests
# Or
ocaml setup.ml -tests
```

Generating the documentation with *OCamlDoc* is just the same:

```bash
make doc
# Or
ocaml setup.ml -doc
```
These are the commands you have in `setup.ml`:

|       **Command**       |                         **Description**                          |
|-------------------------|------------------------------------------------------------------|
| `-configure [options*]` | Configure the whole build process                                |
| `-build [options*]`     | Build executables and libraries                                  |
| `-doc [options*]`       | Build documents                                                  |
| `-test [options*]`      | Run tests                                                        |
| `-all [options*]`       | Run configure, build, doc and test targets                       |
| `-install [options*]`   | Install libraries, data, executables and documents               |
| `-uninstall [options*]` | Uninstall libraries, data, executables and documents             |
| `-reinstall [options*]` | Uninstall and install libraries, data, executables and documents |
| `-clean [options*]`     | Clean files generated by a build                                 |
| `-distclean [options*]` | Clean files generated by a build and configure                   |
| `-version`              | Display version of OASIS used to generate this setup.ml          |
| `-no-catch-exn`         | Don't catch exception, useful for debugging                      |
| `-quiet`                | Run quietly                                                      |
| `-info`                 | Display information message                                      |
| `-debug`                | Output debug message                                             |
| `-ignore-plugins`       | Ignore plugin's field                                            |
| `-help`, `--help`       | Display this list of options                                     |


## History

Check the [releases list](https://github.com/mabrasil/generator-ocaml/releases/).

## License

MIT © [Matheus Brasil](https://github.com/mabrasil)

[npm-image]: https://badge.fury.io/js/generator-ocaml.svg
[npm-url]: https://npmjs.org/package/generator-ocaml
[travis-image]: https://travis-ci.org/mabrasil/generator-ocaml.svg?branch=master
[travis-url]: https://travis-ci.org/mabrasil/generator-ocaml
[daviddm-image]: https://david-dm.org/mabrasil/generator-ocaml.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mabrasil/generator-ocaml
[coveralls-image]: https://coveralls.io/repos/mabrasil/generator-ocaml/badge.svg
[coveralls-url]: https://coveralls.io/r/mabrasil/generator-ocaml
