module.exports = {
  apps : [{
    name: 'worker',
    script: 'worker.js',
    watch: true,
    instances: 'max',
    exec_mode: 'cluster'
  }],
};
