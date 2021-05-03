import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import fastify, { RouteHandlerMethod } from 'fastify';

import { html, TemplateResult } from "lit";
import './index.ts';

const app = fastify({
  logger: true,
});

const renderring = (layout: TemplateResult) => {
  const component = render(layout);
  let data = '';
  for (let raw of component) {
    data += raw;
  }
  return data;
}

const layout = () => {
  return html`
  <div>
    <div>hoge</div>
    <my-element />
  </div>`;
};

const routeHandler: RouteHandlerMethod = async (_, reply) => {
  reply.type('text/html');
  return renderring(layout());
}

app.get('/', routeHandler);

app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
})

