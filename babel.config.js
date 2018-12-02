const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ''
      },
      useBuiltIns: 'usage'
    }
  ],
  '@babel/preset-react'
];

const plugins = [
  '@babel/plugin-proposal-class-properties'
];

module.exports = { presets, plugins };
