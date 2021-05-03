// koa
import Koa from 'koa'
import staticFiles from 'koa-static';
import { nodeResolve } from 'koa-node-resolve';

// tslint:disable-next-line:no-var-requires
const historyApiFallback = require('koa-history-api-fallback');

// util
import * as path from 'path';
import Stream from 'stream';

// lit
import {render} from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import { layout } from './template/layout';
import './pages'

const packageRoot = path.resolve(path.basename('./build'));

new Koa()
  .use(nodeResolve({}))
  .use(staticFiles(packageRoot))
  .use(async (ctx, next) => {
    if (ctx.URL.pathname !== '/') {
      await next();
      return;
    }
    const generator = render(layout());
    ctx.type = 'text/html';
    ctx.body = Stream.Readable.from(generator);
  })
  .use(historyApiFallback({
    index: '/',
  }))
  .listen(3002);
console.log('application is running on port 3002');
