module.exports = (wallaby) => {
  return {
    files: ['/src/**/*.ts'],
    tests: ['/__test__/**/*.spec.ts'],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' }),
    },

    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'test=test',
      },
      runner: require('os').homedir() + '/.nvm/versions/node/v12.16.2/bin/node',
    },

    workers: {
      restart: true,
    },

    debug: true,
    testFramework: 'jest',
  }
}
