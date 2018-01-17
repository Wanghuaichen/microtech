import router from 'react-router-sitemap';
import babel from 'babel-register';

require('babel-register');

const router = require('./router').default;
const Sitemap = require('../').default;

(   
    new Sitemap(router)
    .build('https://dev.microtechnologies.ru')
    .save('./sitemap.xml')

);