	
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
                        <tr v-for="pduct in products?.data">
                        <td>{{pduct.prd_id}}</td>
                        <td>{{pduct.prd_name}}</td>
                        <td>{{pduct.prd_disctiption}}</td>
                        </tr>        
                      
                    </tbody>
                </table>
                <button @click="previous()" v-if="page > 1">Previous</button>
                <button @click="next()" v-if="page < products!.last_page">Next</button>
            </div>
        </div>
    </div>
</template>
    
  <script setup lang="ts">   

  import ProductService from '@/services/productsService'
  import type  Product  from "@/types/Product";

  import type ResponseData from "~/types/ResponseData";
  import Swal from 'sweetalert2'
  import axios, { formToJSON } from 'axios'


  const search = ref('');
  const page = ref(1);
  const limit = ref(2);
//   const  products1 = await useAsyncData<ResponseData>('product-list', 
//   () => $fetch('http://127.0.0.1:8000/api/product-list',{
//      method: 'GET',
//   }))
//   products1.data.value?.data

const { data:products, error }  = await useAsyncData<ResponseData>(
    'products',
  () => $fetch( `/api/product-list`, {
    method: 'GET',
    baseURL: 'http://127.0.0.1:8000',
    params: {
          limit:limit.value,
          page: page.value,
          search: search.value,
    }
  }), {
    watch: [
      page,
      search
    ]
  }
 );

 const previous = () => {
  if( page.value != 1 ){
      page.value = page.value -1 ;
  }
}

const next = () => {
  if( page.value + 1 <= products.value!.last_page ){
    page.value = page.value + 1;
  }
}
 
//   export default {  
//     data: () => ({
//         products: [] as Product[],
//   }),
//   async fetch() {
//        await axios.get('http://127.0.0.1:8000/api/product-list').then((response: ResponseData) => {
//           this.products = response.data.products.data;
//           console.log(response.data.products.data);
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });

//     }


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
   
 // };
  </script>