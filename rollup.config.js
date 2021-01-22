export default {
  input: [
    'src/index.js',
    'src/deleteIcon.js'
  ],
  output: [
    {
      entryFileNames: "[name].js",
      dir: 'dist/esm',
      format: 'esm'
    },
    {
      entryFileNames: "[name].js",
      dir: 'dist/cj',
      format: 'cjs'
    }
  ],
};