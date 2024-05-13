	
<template>
    <div class="container">
        <h2 class="text-center mt-5 mb-3">Project Manager</h2>
        <div class="card">
            <div class="card-header">
                <NuxtLink to="/create"
                    class="btn btn-outline-primary"
                    >Create New Project
                </NuxtLink>
            </div>
            <div class="card-body">
           
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th width="240px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                           
                        <tr v-for="pduct in products" :key="pduct.prd_id">
                            <td>{{pduct.prd_name}}</td>
                            <td>{{pduct.prd_disctiption}}</td>
                            <td>
                                <NuxtLink :to="`/show/${pduct.prd_id}`" class="btn btn-outline-info mx-1">Show</NuxtLink>
                                <NuxtLink :to="`/edit/${pduct.prd_id}`" class="btn btn-outline-success mx-1">Edit</NuxtLink>
                                <button 
                                   
                                    className="btn btn-outline-danger mx-1">
                                    Delete
                                </button>
                            </td>
                        </tr>
                               
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>
    
  <script lang="ts">   

  import ProductService from '@/services/productsService'
  import type  Product  from "@/types/Product";

  import type ResponseData from "~/types/ResponseData";
  import Swal from 'sweetalert2'
  import axios from 'axios'
   
  export default {  
  
   /* data() {
    return {
      products: [] as Product[],
      currentProduct: {} as Product,
    }
  },*/

  //   async asyncData () {
  //   const { data } = await axios.get('http://127.0.0.1:8000/api/product-list')

  //   return {
  //     products: data
  //   }
  // },
  // async fetch () {   
  //      await  this.retrieveProducts()
  //   },
  
  // methods: {
  //   retrieveProducts() {
  //     ProductService.getProducts()
  //       .then((response: ResponseData) => {
  //         this.products = response.data.products.data;
  //         console.log(response.data.products.data);
  //       })
  //       .catch((e: Error) => {
  //         console.log(e);
  //       });
  //   }
  // },
//  mounted(){
//   // this.retrieveProducts()
//  } 
   
  };
  </script>