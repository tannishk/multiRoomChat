'use strict';

const router = require('express').Router();

let routingAlgorithm = () => {

    let routes = {
    'get':{
        '/':(request,response,next) => {
            response.render('login');
        },
        '/rooms': (request,response,next) => {
            response.render('rooms');
        } ,
        '/login':(request,response,next)=>{
            response.render('')
        },
        'post':{

        }
    }
    }
    let registerRoutes = (routes,method) => {
    for(let key in routes){
        if(typeof routes[key] === 'object' && routes[key] !== null){
            registerRoutes(routes[key],key);
        } else {
            if(method === 'get'){
                router.get(key,routes[key]);
            } else if (method === 'post'){
                router.post(key,routes[key]);
             }
        }
        }
     }

     registerRoutes(routes);
        return routes;
}

module.exports = routingAlgorithm