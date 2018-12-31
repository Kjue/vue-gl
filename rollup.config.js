import path from 'path';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import { version as versionThree } from 'three-full/package.json';

const rollGlobals = {
  three: 'THREE',
  'three-full': 'Three',
  'vue-gl': 'VueGL',
};

export default [
  {
    input: 'src/index.js',
    external: ['loaders', 'THREE', 'three-full'],
    plugins: [
      babel(), uglify(),
    ],
    output: [
      {
        name: 'VueGL',
        file: path.resolve('dist/vue-gl.UMD.js'),
        format: 'umd',
        globals: rollGlobals,
      },
    ],
  },
  {
    input: 'src/index.js',
    external: ['loaders', 'THREE', 'three-full'],
    plugins: [
      babel(), terser(),
    ],
    output: [
      {
        name: 'VueGL',
        file: path.resolve('dist/vue-gl.js'),
        format: 'es',
        globals: rollGlobals,
        paths: {
          Three: `https://unpkg.com/three-full@${versionThree}/builds/Three.es.js`,
        },
      },
    ],
  },
];
