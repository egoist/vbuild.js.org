## Proxying API Requests in Development

It can be convenient to serve front-end app from the same host and port as a backend implementation.<br>
For example, a production setup might look like this after the app is deployed:

```
/             - static server returns index.html with front-end app
/todos        - static server returns index.html with front-end app
/api/todos    - server handles any /api/* requests using the backend implementation
```

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

```js
  "proxy": "http://localhost:5000",
```

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:5000/api/todos` as a fallback. The development server will only attempt to send requests without a `text/html` accept header to the proxy.

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.