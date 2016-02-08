<p align="center">
  <a href="">
    <img alt="yo OCaml!" src="logo.png">
  </a>
</p>

<p align="center">
  A Yeoman generator that provides a functional boilerplate to easily scaffold OCaml modules.
</p>

<p align="center">

  <a href="https://codeship.com/projects/132638"><img alt="Build Status" src="https://codeship.com/projects/33492670-b039-0133-9188-565ee1f98c10/status?branch=master"></a>

  <a href="https://travis-ci.org/mabrasil/generator-ocaml"><img alt="Build Status" src="https://travis-ci.org/mabrasil/generator-ocaml.svg?branch=master"></a>

  <a href="https://codeclimate.com/github/mabrasil/generator-ocaml"><img alt="Code Climate" src="https://codeclimate.com/github/mabrasil/generator-ocaml/badges/gpa.svg"/></a>

  <a href="https://david-dm.org/mabrasil/generator-ocaml" title="Dependency status"><img src="https://david-dm.org/mabrasil/generator-ocaml.svg"/></a>

  <a href="https://david-dm.org/mabrasil/generator-ocaml#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/mabrasil/generator-ocaml/dev-status.svg"/></a>

</p>

## Table of Contents

- [This Project](#this-project)
  - [Scaffold OCaml modules?](#scaffold-ocaml-modules)
  - [Getting To Know Yeoman](#getting-to-know-yeoman)
- [Installation](#installation)
- [Usage](#usage)
  - [Getting Started](getting-started)
  - [Other Options](#other-options)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)
- [Credits](#credits)

## This Project

### Scaffold OCaml modules?

<img src="http://i.imgur.com/f6AWgvy.png" align="left" alt="OCaml">

OCaml is a general purpose programming language with an emphasis on expressiveness
and safety which supports both functional, imperative and object-oriented paradigms
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

## Contributing

Contributions are very welcome! If you'd like to contribute, these
[guidelines](CONTRIBUTING.md) may help you.

## History

Check the [releases list](https://github.com/mabrasil/generator-ocaml/releases/).

## License

[generator-ocaml](https://github.com/mabrasil/generator-ocaml/) is distributed under the
MIT License, available in this repository.

All contributions are assumed to be also licensed under the same.

## Credits

The templates codebase was originally inspired by these
[two](https://github.com/yuanqing/ocaml-boilerplate) [projects](https://github.com/perror/ocaml-boilerplate).
