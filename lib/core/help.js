const myHelp = (program) => {
  // my-cli --help
  program.option('-f --framwork <framwork>', '设置框架');
};

module.exports = myHelp;
