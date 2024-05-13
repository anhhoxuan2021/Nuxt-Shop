	
<template>
        <div class="">
        <CarouselProject :slides="imgs" />
        <div class="row justify-content-center bg-white my-3 mx-auto">
            <Testimonial :slides="testimonial_imgs"></Testimonial>
        </div>
        <div class="h-100">
            <div v-if="products.length > 0">
                <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-5">
                    <div class="col prd-item flex-column" v-for="item in products" :key="item.prd_id">                 
                        <div class="prd-item-info bg-white">
                            <div class="prd-item-decrease f-10 tl-10 bold text-center">
                            -{{productDiscount(item.prd_regular_price,item.prd_price)}}%
                            </div>
                            <NuxtLink :to="`/aothun/${item.prd_id}`" class="prd-item-photo" >
                                <span class="prd-image-container">
                                   <img :src="`${path_img1}/${item.prd_img}`" class="prd-image-photo" />
                                </span> 
                             </NuxtLink>
                             <div class="prd-item-details flex-column">
                                <strong class="prd-item-name">
                                    <NuxtLink to="`/aothun/${item.prd_id}`" class="prd-item-link" :title="item.prd_name" >
                                        <div class="special-product-label mid-mid text-only ">
                                        <div class="text-center f-10 c-ff0000">
                                            <span>MỚI</span>
                                        </div>
                                    </div>
                                    {{item.prd_name}}
                                    </NuxtLink>
                                </strong>
                                <div class="d-inline fit-box">
                                    <span class="prd-price">{{ Number(item.prd_price).toLocaleString() }} VND</span>
                                    <span class="prd-regular-price ms-2">{{ Number(item.prd_regular_price).toLocaleString() }} VND</span>
                                </div>

                                <showSameImg :sameImages="`${item.prd_library}`" />
                                <div class="d-flex flex-row justify-content-end f-12 my-1 bold">
                                <i>Sold </i>
                            </div>
                            </div>
                        </div>
                    </div>
                    <!----->
                </div>
            </div>
            <div v-else> No Product</div>
        </div>
    </div>


</template>
    
  <script  lang="ts">   
  import ProductService from '@/services/productsService'

  import type  Product  from "@/types/Product";

  import type ResponseData from "~/types/ResponseData";
  import Swal from 'sweetalert2'
  import axios, { formToJSON } from 'axios'

  import CarouselProject from '@/components/CarouselProject.vue'
  import Testimonial from '@/components/Testimonial.vue'


  import {productDiscount} from '@/composables/myComposable'
  import showSameImg from '@/components/common/ShowSameImg.vue'

  const config = useRuntimeConfig()
  export default {    
    components: {
        CarouselProject,
        Testimonial,
        showSameImg
    },
    setup() {
       // const { $discount } = useNuxtApp()
      // const discount = productDiscount(10,2)

    },
  data() {
    return {
            path_img1:config.public.path_img,
            products: <Product[]>([]),  // products: [] as Product[]
            search: '',
            page: 1,
            limit: 5,
            lastPage: 1,
            pending: false,
           // products: ref([]),
           //postList: ref([] as Product[]),
           imgs:['slider1.png','slider2.png'],
           testimonial_imgs:[
            {img:'150x150_1_2.png',title:'Best seller'},
            {img:'150x150_2_2.png',title:'Best deal'},
            {img:'150x150_3_2.png',title:'Shoes'},
            {img:'150x150_4_2.png',title:'Sandal'},
            {img:'150x150_5_2.png',title:'T-shirt'},
            {img:'150x150_6_2.png',title:'Polo shirt'},
            {img:'150x150_7_2.png',title:'jacket'},
            {img:'150x150_8_2.png',title:'Trousers'},
            {img:'150x150_9_2.png',title:'Shorts'},
            {img:'150x150_10_2.png',title:'Underwear'},
            {img:'150x150_11_2.png',title:'backpacks and bags'},
            {img:'150x150_12_2.png',title:'Hat'},
            {img:'150x150_13_2.png',title:'Belt'},
            {img:'150x150_14_2.png',title:'New'},
            {img:'150x150_15.png',title:'Best seller'},
           ]
    }
  },
  methods: {
    loadMore() {
        if( this.page + 1 <= this.lastPage ){
                this.page =this.page + 1;
                
                this.loadProducts();
            }
    },
    /********************************* */ 
    async loadProducts() {
            this.pending = true;
            const res = <ResponseData> await $fetch('http://127.0.0.1:8000/api/product-list', {
                method: 'GET',            
                params: {
                page: this.page,
                limit:this.limit,
                },
            });            
         
        // console.log(res.data)
            this.appendProducts(res.data);
            this.pending = false;
            this.lastPage = res.last_page;
        },
          /***************************** */
        appendProducts(newProducts: Product[]) {
            newProducts.forEach( ( poduct ) => {
        //  console.log(poduct)
            // console.log('---------')
            this.products.push(poduct) 
        });
       // console.log('-----------------------------------------------------------')
        //console.log(products)
        },
        /********************* */

        discount(a:number,b:number){
          return  productDiscount(a,b)
        }
    
  },

  mounted(){
            this.loadProducts();
    }

}

definePageMeta({
    layout: "projectlayout",
    });

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

  </script>