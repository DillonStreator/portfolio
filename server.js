const express = require("express");
const next = require("next");
const helmet = require("helmet");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            "default-src": ["'self'"],
            "script-src": [
              "'self'",
              "https://www.google-analytics.com/analytics.js",
            ],
            "style-src": ["'self'", "fonts.googleapis.com 'unsafe-inline'"],
            "font-src": ["'self'", "fonts.gstatic.com 'unsafe-inline'"],
            "img-src": ["'self'", "www.google-analytics.com 'unsafe-inline'"],
          },
        },
      })
    );

    server.get("*", (req, res) => handler(req, res));

    server.listen(8000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:8000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
