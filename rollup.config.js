// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
export default [
  {
    input: "src/hodorify.js",
    output: {
      file: __dirname + "/dist/esm.js",
      format: "es"
    },
    external: ["case"]
  },
  {
    input: "src/hodorify.js",
    output: {
      file: __dirname + "/dist/hodorify.js",
      format: "umd",
      name: "hodorify",
      globals: {
        case: "Case"
      }
    },
    external: ["case"]
  },
  {
    input: "src/hodorify.js",
    output: {
      format: "iife",
      name: "hodorify",
      file: __dirname + "/dist/iife.js"
    },
    plugins: [
      resolve(),
      commonJS({
        include: "node_modules/**"
      }),
      terser()
    ]
  }
];
