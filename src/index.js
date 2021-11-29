import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from './components/jobslist'
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
var locale;
var mensajes;
if(navigator.language.includes('es')){
    locale="es-ES";
    mensajes=localeEsMessages;
}else{
    locale="en-US";
    mensajes=localeEnMessages;
}
ReactDOM.render(
	<IntlProvider locale={locale} messages= {mensajes}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);