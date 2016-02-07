'use strict';

var chalk = require('chalk');

var greetings = '\n' +
    chalk.yellow('                     ,,__ \n') +
    chalk.yellow('           ..  ..   / o._)                   .---. \n') +
    chalk.yellow("          /--'/--\  \-'||        .----.    .'     '. \n") +
    chalk.yellow("         /        \_/ / |      .'      '..'         '-. \n") +
    chalk.yellow("       .'\  \__\  __.'.'     .'          '-._ \n") +
    chalk.yellow("         )\ |  )\ |      _.' \n") +
    chalk.yellow('        // \\ // \\ \n') +
    chalk.yellow('       ||_  \\|_  \\_ \n') +
    chalk.yellow("       '--' '--'' '--' \n") +

    chalk.yellow('\n Yo OCaml! ') +
    chalk.gray('A Yeoman generator that provides a functional boilerplate to easily scaffold OCaml modules. \n') +
    chalk.yellow("\n Let's talk about your new module? \n");

module.exports = greetings;

