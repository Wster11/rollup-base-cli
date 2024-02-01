#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
//version 版本号
//name 新项目名称
program.version('1.0.0', '-v, --version')
    .command('init <projectName>')
    .action((projectName) => {
      console.log('clone template ...');
      download('github:Wster11/rollup-kit-temp', projectName, function (err) {
          console.log(err ? 'Error' : 'Success')
      })
    });
program.parse(process.argv);