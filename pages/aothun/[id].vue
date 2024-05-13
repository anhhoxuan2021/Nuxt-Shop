<template>
 <div  id="p-product">
    <div class="row pt-3">
      <!---------------Left-------------------->
      <div class="col-md-6 col-sm-12 col-xm-12">         
        <div class="bg-white justify-content-center d-flex">
          <div class="img-zoom-area-container" v-on:mouseout="zoomfocusout()" v-on:mouseover="zoomfocusin()">
              <div class="img-zoom-lens"></div>
              <!--
              <img id="zoomed-image" :src="`${path_img1}${product.prd_img}`" >
              12.Aothunnu4.png
          -->
          <img id="zoomed-image" src="http://127.0.0.1:8000/images/12.Aothunnu4.png" >
          </div>
        </div>
        <div v-if="isShow">
          <ShowSameLagerImg 
          :sameImages="`${product.prd_library}`" 
          :productImage="`${product.prd_img}`" />
        </div>
        
      </div>
      <!---------------Right-------------------->
      <div class="col-md-6 col-sm-12 col-xm-12 row-zoom">
        <div id="zoom-result" class="img-zoom-result"></div>
        <div class="page-pduct d-flex flex-column">
          <div class="specific-product">
            <input type="hidden" class="prd_id" v-model="product.prd_id">
            <input type="hidden" class="prd_name" v-model="product.prd_name">
            <input type="hidden" class="prd_price" v-model="product.prd_price">
            <input type="hidden" class="prd_regular_price" v-model="product.prd_regular_price">
            <div class="col-md-12 col-sm-12 mb-1">
              <div class="special-product-label mid-mid text-only w-40">
                  <div class="text-center f-10 c-ff0000">
                      <span>MỚI</span>
                  </div>                  
              </div>
            </div>
            <strong class="prd-item-name">
              <NuxtLink :to="`/aothun/${product.prd_id}`" class="prd-item-link" :title="`${product.prd_name}`">
                  {{ product.prd_name }}
              </NuxtLink>
            </strong>
            <div class="d-inline fit-box border-bottom">
                <span class="prd-price">{{ Number(product.prd_price).toLocaleString() }} VND</span>
                <span class="prd-regular-price ms-2">{{ Number(product.prd_regular_price).toLocaleString() }} VND</span>
                <div class="d-flex justify-content-end">
                    <span class="d-flex flex-md-column flex-sm-row flex-sm-row">
                        <span class="bold f-14">Sold: 18</span>
                        <span class="f-12 bold c-ff0000"><i class="fa fa-heart "></i> &nbsp; Love</span>
                    </span>
                </div>
                <div class="f-12 bold c-666">(The listed price of the product includes tax)</div>
            </div>
            <div class="d-inline fit-box f-15 py-3">Select color:</div>
            <div v-if="isShow">
              <show-same-img :is-class="true" :same-images="`${product.multi_colors}`"/>
            </div>
            <div class="d-inline fit-box f-15 pb-3">Select size</div>
            <div class="d-inline fit-box f-15 pb-3" v-if="product.multi_sizes !=null && product.multi_sizes !=''">
              <div class="d-flex flex-row  fit-box pb-3">
                <span :class="['prd-size me-1 f-15 text-center',{selected:index==0}]" v-for="(size, index) in product.multi_sizes.split(',')">{{size}}</span>
              </div>
            </div>

            <div class="d-inline fit-box f-15 pb-3 mt-3 d-flex d-flex-row">
                <div class="input-group mb-3 closest-btn-action">
                    <button class="btn btn-outline-secondary" type="button" id="minus-prduct-btn">-</button>
                    <input type="text" class="form-control amount-prduct" value="1" placeholder="" aria-label="Example text with button addon">
                    <button class="btn btn-outline-secondary" type="button" id="plus-prduct-btn">+</button>
                </div>
                <button class="btn btn-warning btn-buy-now">Buy now</button>
                <button class="btn btn-dark btn-add-to-cart">Add to cart</button>
            </div>

          </div>
        </div>
        <div class="row">
          <!------------------Left---------------->
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                      <div class="fa-rotate-360 f-18 bg-ededed child-box">
                        <font-awesome-icon icon="fa-solid fa-truck "  />
                      </div> 
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Free shipping</span>
                    <span class="f-13 ">for orders from 500 VND</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-cart-shopping "  />
                        </div> 
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Free returns</span>
                    <span class="f-13 ">within 30 days</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-money-check"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">DIVERSITY</span>
                    <span class="f-13 ">payments</span>
                </div>
            </div>
          </div>
          <!------------------Right---------------->
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-truck-fast"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Fast delivery</span>
                    <span class="f-13 ">nationwide</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-adjust"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-13">Procedures for exchanging goods</span>
                    <span class=" f-15 bold ">EASY</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <!--
                          <font-awesome-icon icon="'fas', 'cart-circle-check']"  />
                        -->
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">GOODS ARE CHECKED</span>
                    <span class="f-13 ">before payment</span>
                </div>
            </div>            
          </div>
          <!------------------end right------------>
          <div class="d-flex justify-content-between align-items-center h-60 mb-3 mx-3 px-3 bg-ededed f-15">
                <div class="">Shipping address: <span class="shipping-to"></span></div>
                <div class="change-address c-2267ed">
                  <div class="f-18 bg-ededed child-box c-2267ed">
                    <font-awesome-icon icon="fa-solid fa fa-pencil"  />&nbsp;Change address
                  </div> 
                </div>
            </div>
        </div>
        
      </div>

    </div>
  </div>
</template>
<script lang="ts">
  import ProductService from '@/services/productsService'
  import type  Product  from "@/types/Product";
  import ShowSameLagerImg from "~/components/common/ShowSameLagerImg.vue";
  import showSameImg from '@/components/common/ShowSameImg.vue'
  const config = useRuntimeConfig()
  export default{
    components:{
      ShowSameLagerImg,
      showSameImg
    },
    data(){
      return {
        path_img1:config.public.path_img,
        // product : ref<Product>()   
          product: {} as Product,
          isShow:false
      }
    },  
    methods:{
      // async loadProductId(){
      //   let id= this.$route.params.id;
      //   const { data:product1, error }  = await useAsyncData<Product>(
      //   'products',
      //   () => $fetch( `product-id`, {
      //     method: 'GET',
      //     baseURL: config.public.apiUrl,
      //     params: {
      //           id:id
      //     }
      //   })
      // );
      
      // this.product = product1.value!  
      // }
    async getProduct(id:any) {
        ProductService.getProductId(id)
          .then((response) => {
            this.product = response
            let image = this.path_img1+response.prd_img
            //this.zoomRun();
            //console.log(response);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      },

      async loadProductId(){
        let path_api = config.public.apiUrl+`product-id`
        let id= this.$route.params.id;
        this.product = <Product> await $fetch(path_api, {
                method: 'GET',            
                params: {
                  id:id
                },
            });  
            this.isShow =true
           // console.log("b="+this.product.multi_colors)
           // this.product = res
      },
       zoomfocusin(){        
        $(".img-zoom-lens").css({"display":"block"})
        $(".img-zoom-result").css({"display":"block"})
      },
      zoomfocusout(){
        $(".img-zoom-lens").css({"display":"none"})
        $(".img-zoom-result").css({"display":"none"})
      },

      imageZoom(imgID:any,area_show:any) {
        let img:any, lens:any, result:any, cx:any, cy:any;  
        img = document.getElementById("zoomed-image");
        result = document.getElementById("zoom-result");
        lens = document.querySelector(".img-zoom-lens");
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        console.log(img)
        
        let igs = img.src
        console.log('igs='+igs)
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";        
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e:any) {          
            let pos, x, y;
            e.preventDefault();
            pos = getCursorPos(e);
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
            
        }
        function getCursorPos(e:any) {
            let a, x = 0, y = 0;
            e = e || window.event;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.scrollY// window.pageXOffset;
            y = y - window.scrollX//window.pageYOffset;
            return {x : x, y : y};
        }
       
      },
      zoomRun(){
        this.imageZoom("zoomed-image","zoom-result");
        $(".img-zoom-result").css({"display":"none"})
        $(".img-zoom-lens").css({"display":"none"})
      }
    }, 
   created(){
       //this.loadProductId() 
       let id= this.$route.params.id;
       this.getProduct(id)      
    },
    mounted(){
      //console.log(this.product.prd_img)
      
      let id= this.$route.params.id;
     // this.getProduct(id)
     this.zoomRun();

    //  jQuery(function () { 
    //   function zoomfocusin1(){        
    //     $(".img-zoom-lens").css({"display":"block"})
    //     $(".img-zoom-result").css({"display":"block"})
    //       let img:any
    //     img = document.getElementById("zoomed-image");
    //     let igs = img.src
    //     console.log('ig111s='+igs)
    //   }
    //   (function () {
    //     zoomfocusin1()
    // })();

    //  });
      
    }
    
    // mounted(){
    //   this.zoomRun();
    //   window.addEventListener("load", ()=>{
    //     let img:any, lens:any, result:any, cx:any, cy:any;
    //     img = document.getElementById("zoomed-image");
    //     result = document.getElementById("zoom-result");
    //     lens = document.querySelector(".img-zoom-lens");
    //     cx = result.offsetWidth / lens.offsetWidth;
    //     cy = result.offsetHeight / lens.offsetHeight;
    //     result.style.backgroundImage = "url('" + img.src + "')";
    //     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    //     lens.addEventListener("mousemove", moveLens);
    //     img.addEventListener("mousemove", moveLens);
    //     lens.addEventListener("touchmove", moveLens);
    //     img.addEventListener("touchmove", moveLens);
    //     function moveLens(e:any) {
    //         let pos, x, y;
    //         e.preventDefault();
    //         pos = getCursorPos(e);
    //         x = pos.x - (lens.offsetWidth / 2);
    //         y = pos.y - (lens.offsetHeight / 2);
    //         if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    //         if (x < 0) {x = 0;}
    //         if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    //         if (y < 0) {y = 0;}
    //         lens.style.left = x + "px";
    //         lens.style.top = y + "px";
    //         result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    //     }
    //     function getCursorPos(e:any) {
    //         let a, x = 0, y = 0;
    //         e = e || window.event;
    //         a = img.getBoundingClientRect();
    //         x = e.pageX - a.left;
    //         y = e.pageY - a.top;
    //         x = x - window.pageXOffset;
    //         y = y - window.pageYOffset;
    //         return {x : x, y : y};
    //     }
    //     console.log("toi")
      
    //   })
    // }
    // async mounted(){
    //   let id= this.$route.params.id;
    //     const { data:product1, error }  = await useAsyncData<Product>(
    //     'products',
    //     () => $fetch( `product-id`, {
    //       method: 'GET',
    //       baseURL: config.public.apiUrl,
    //       params: {
    //             id:id
    //       }
    //     })
    //   );
      
    //   this.product = product1.value!     
    // }


  } 



definePageMeta({
    layout: "projectlayout",
});
</script>