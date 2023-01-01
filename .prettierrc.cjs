module.exports = {
  tabWidth: 4,
  singleQuote: true,
  semi: false,
  proseWrap: "always",
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
