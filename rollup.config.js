// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "chord-sight.js",
    format: "cjs",
  },
  treeshake: false,
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
