var exec = require('child_process').exec;
hexo.on('new',function(target){
  exec('atom '+[target.path]);
});
hexo.on('n',function(target){
  exec('atom '+[target.path]);
});
