import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import fastify, { RouteHandlerMethod } from 'fastify';
import { html } from "lit";


const app = fastify({
  logger: true,
});

const layout = () => {
  return html`
<div>hoge</div>
`
};

const routeHandler: RouteHandlerMethod = async (_, reply) => {
  const hoge = render(layout());
  let data = '';
  for (let b of hoge) {
    data += b;
  }
  reply.type('text/html');
  return data;
}

app.get('/', routeHandler);

app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
})

