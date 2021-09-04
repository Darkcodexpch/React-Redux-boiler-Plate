import React from 'react';
import store from './Store';
import ReactRouter from './config/Router';
import {Provider} from 'react-redux'
function App() {
  return (
<>
{/* Main file ko provider sy wrap kr k store k prop pass krdeingy */}
<Provider store={store}>
<ReactRouter/>
</Provider>
</>
  );
}

export default App;
