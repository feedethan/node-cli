# 脚手架工具

## 使用

```
my-cli create mydir
```

## 开发

1. 新建 `bin` 目录，内建 `cli.js`
2. `npm init` 此时会自动生成一个包含 bin 的 package.json
3. `npm link` 在任何地方可以执行 bin 里的命令了
4. 获取命令行参数 `process**.\***argv\*[2]`
5. 使用 commander 处理命令参数 `my-cli —help`

   [npm: commander](https://www.npmjs.com/package/commander)

   ```jsx
   // my-cli --help
   program.option('-f --framwork <framwork>', '设置框架');
   program.parse(process.argv);
   ```

6. 使用 `commander` 处理自定义命令&参数 my-cli create —ts

   ```jsx
   // my-cli create xx a b c
   program
     .command('create <project> [other...]')
     .alias('crt')
     .description('创建项目')
     .action((project, args) => {
       console.log(project, args);
     });
   ```

7. 命令行问答交互

   [npm: inquirer](https://www.npmjs.com/package/inquirer)

   ```jsx
   inquirer
     .prompt([
       {
         type: 'list',
         name: 'framwork',
         choices: config.framwork,
         message: '请选择框架？',
       },
     ])
     .then((anwser) => {
       console.log(anwser);
     });
   ```

8. 下载仓库代码

   ```jsx
   download('leoooy/KoaTemplete', project, { clone: true }, (err) => {
     console.log(err);
   });
   ```

   [npm: download-git-repo](https://www.npmjs.com/package/download-git-repo)

9. 命令行任务等待工具

   [npm: ora](https://www.npmjs.com/package/ora)

10. 命令行样式工具

    [npm: chalk](https://www.npmjs.com/package/chalk)
