let BASE_URL = '';
let API_BASE_URL ='';
let PORT = '3003';
let IMG_END_POINT= '';
let PRODUCTION = true;
let SERVICE_WORKER = process.env.SERVICE_WORKER;

switch(process.env.NODE_APP){
	case 'stg':
		BASE_URL = 'http://localhost:3003';
		API_BASE_URL = 'http://localhost:4000/api';
		IMG_END_POINT= '';	
		PORT = 3003
		PRODUCTION = false;
	break;
	case 'production':
		BASE_URL = 'http://localhost:3003';
		API_BASE_URL = 'http://localhost:4000/api';
		IMG_END_POINT= '';	
		PORT = 5001
		PRODUCTION = true;
	break;
	default:
		BASE_URL = 'http://localhost:3003';
		API_BASE_URL = 'http://localhost:4000/api';
		IMG_END_POINT= '';	
		PORT = 3003
		PRODUCTION = false;
}

let config = {
	ENV: process.env.NODE_ENV,
	SERVICE_WORKER,
	BASE_URL: BASE_URL,
	PORT: PORT,
	IMG_END_POINT: IMG_END_POINT,
	API_BASE_URL:API_BASE_URL,
	SITE_ID:"xsandlriehwmqpdhk"
}

export default config;
