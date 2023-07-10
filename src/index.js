import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "390px",
  md: "888px",
  lg: "1000px",
  xl: "1440px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const theme = extendTheme({ config ,breakpoints});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

