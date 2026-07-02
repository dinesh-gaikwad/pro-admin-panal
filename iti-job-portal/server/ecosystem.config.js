module.exports = {
  apps: [
    {
      name: 'iti-job-portal-server',
      script: 'src/server.js',
      cwd: './server',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
