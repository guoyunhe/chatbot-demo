import '@testing-library/jest-dom';
import 'whatwg-fetch';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers['Referer'] = import.meta.env.VITE_API_BASE_URL;
