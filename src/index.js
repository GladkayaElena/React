import React from "react";
import ReactDOMClient from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import './styles/common.css';




const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>

<App />  

</React.StrictMode>

);

