	
<template>
        <div class="">
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
                        <tr v-for="pduct in products">
                        <td>{{pduct.prd_id}}</td>
                        <td>{{pduct.prd_name}}</td>
                        <td>{{pduct.prd_disctiption}}</td>
                        </tr>  
                      
                    </tbody>
                </table>
                <div v-if="pending">Loading...</div>
                <button @click="loadMore()">Load more</button>
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

 // import mainLayout from "@/Layouts/mainLayout.vue"
  const products = ref<Product[]>([])
  const search = ref('');
  const page = ref(1);
  const limit = ref(2);
  const lastPage = ref(1);  
  const pending = ref(false);
  //const products = ref([]);
  //const postList = ref([] as Product[])

    onMounted(() => {
        loadProducts();
        })


        const loadMore = () => {
            if( page.value + 1 <= lastPage.value ){
                page.value = page.value + 1;
                
                loadProducts();
            }
        }
        /********************************* */
        async function loadProducts() {
            pending.value = true;
            const res = <ResponseData> await $fetch('http://127.0.0.1:8000/api/product-list', {
                method: 'GET',            
                params: {
                page: page.value,
                limit:limit.value,
                },
            });
            
        // console.log("qua lan")
        // console.log(res.data)
            appendProducts(res.data);
            pending.value = false;
            lastPage.value = res.last_page;
        }
        /***************************** */
        const appendProducts= (newProducts: Product[]) => {
                newProducts.forEach( ( poduct ) => {
           //  console.log(poduct)
             // console.log('---------')
               products.value.push(poduct) 
            });
       // console.log('-----------------------------------------------------------')
        //console.log(products)
        }


    /************************************* */
//   const  products1 = await useAsyncData<ResponseData>('product-list', 
//   () => $fetch('http://127.0.0.1:8000/api/product-list',{
//      method: 'GET',
//   }))
//   products1.data.value?.data

// const { data:products, error }  = await useAsyncData<ResponseData>(
//     'products',
//   () => $fetch( `/api/product-list`, {
//     method: 'GET',
//     baseURL: 'http://127.0.0.1:8000',
//     params: {
//           limit:limit.value,
//           page: page.value,
//           search: search.value,
//     }
//   }), {
//     watch: [
//       page,
//       search
//     ]
//   }
//  );

//  const previous = () => {
//   if( page.value != 1 ){
//       page.value = page.value -1 ;
//   }
// }

// const next = () => {
//   if( page.value + 1 <= products.value!.last_page ){
//     page.value = page.value + 1;
//   }
// }
 
//   export default {  
//     data: () => ({
//         products: [] as Product[],
//   }),

  
//   methods: {
//     retrieveProducts() {
//       ProductService.getProducts()
//         .then((response: ResponseData) => {
//           this.products = response.data.products.data;
//           console.log(response.data.products.data);
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });
//     }
//   },
//  mounted(){
//   // this.retrieveProducts()
//  } 
   
 // };
    definePageMeta({
    layout: "projectlayout",
    });
  </script>