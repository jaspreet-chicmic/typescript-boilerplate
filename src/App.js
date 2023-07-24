/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './Routes/RootRouter';
import { store, persistor } from './Store';
import './App.scss';

function App() {
  const baseName = process.env.REACT_APP_BASE_NAME;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter basename={baseName}>
            <RootRouter />
          </BrowserRouter>
        </DndProvider>

      </PersistGate>
    </Provider>
  );
}

export default App;
