import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import FinalistMapOsmApp from './finalistMapOsmApp';

const Main = hot(() => (
  <FinalistMapOsmApp/>
))

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('finalist-map-osm')
);
