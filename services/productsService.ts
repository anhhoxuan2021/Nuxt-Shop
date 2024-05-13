'use strict';
import axios from 'axios'
import qs from 'qs'

import type  Product  from "@/types/Product";

const config_pth = useRuntimeConfig()
axios.defaults.baseURL = config_pth.public.apiUrl
// config header
var config = {
    headers: {
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       //  'Authorization': ''
       //headers: { Accept: 'application/json', apikey: 'xxxx' },
       Accept: 'application/json'
    }
    };
  
    const Axio = axios.create({
        baseURL: config_pth.public.apiUrl,
    });
class ProductService {
    getProducts =()=>{
        // console.log(qs.stringify(paras))
         return Axio.get('product-list').then(
             response => response
         )
     }
     /**************************** */
     getProductId =(id:any)=>{
        // console.log(qs.stringify(paras))
        return Axio.get<Product>('product-id', {
            params: {
              id: id,
            }
          }).then(response => response.data); 
     }
  
  }
  
  export default new ProductService(); 