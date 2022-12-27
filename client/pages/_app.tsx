import { Provider } from "react-redux";
import store from "../redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "../scss/index.scss";
import type { AppProps } from "next/app";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
