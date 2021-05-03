module.exports = {
  optimize: {
    minify: true,
  },
  mount: {
    public: { url: '/', static: true },
    src: '/dist',
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    }
  ]
};
