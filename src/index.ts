import './pages/index';
import './pages/users';
import './pages/errors/notfound';
import definitionRouter from './routes';

const main = ()=> {
  const entry = document.getElementById('app');
  if (entry == null) throw new Error('id appが付与されたコンポーネントが存在しません');
  definitionRouter(entry);
}

main();
