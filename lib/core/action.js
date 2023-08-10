const inquirer = require('inquirer');
const config = require('../../config.js');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');

const myAction = async (project, args) => {
  console.log(project, args);

  const anwser = await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: config.framwork,
      message: '请选择框架？',
    },
  ]);

  console.log(anwser);
  const spinner = ora('代码正在下载').start();

  download(
    config.framworkUrl[anwser.framwork],
    project,
    { clone: true },
    (err) => {
      if (!err) {
        spinner.succeed('代码下载成功！');
        console.log(chalk.blue('Please run: '));
        console.log(chalk.bgGreen('cd ' + project));
        console.log(chalk.bgGray('npm install'));
      } else {
        spinner.fail('代码下载失败！');
      }
    }
  );
};

module.exports = myAction;
