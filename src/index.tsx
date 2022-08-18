import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const config = {
	signInRedirectURL: "http://localhost:3000",
	signOutRedirectURL: "http://localhost:3000",
	clientID: "client ID",
	baseUrl: "https://api.asgardeo.io/t/<org_name>",
	scope: ["openid", "profile"]
};

root.render(
	<AuthProvider config={config}>
		<App/>
	</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
