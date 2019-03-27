// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: {
      file: __dirname + "/dist/esm.js",
      format: "es"
    },
    external: ["case"]
  },
  {
    input: "src/index.js",
    output: {
      file: __dirname + "/dist/cjs.js",
      format: "cjs"
    },
    external: ["case"]
  },

  {
    input: "src/index.js",
    output: {
      format: "iife",
      name: "hodorify",
      file: __dirname + "/dist/iife.js"
    },
    plugins: [
      resolve(),
      commonJS({
        include: "node_modules/**"
      })
    ]
  }
];
