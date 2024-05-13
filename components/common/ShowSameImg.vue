<template>
    <div  v-bind:class="[{'pb-3':isClass},'d-flex','flex-row' ,'fit-box']">
        <span  v-bind:class="['prd-img-color',{'me-1':isClass}]" v-for="(img, index ) in images" :key="img">            
            <img 
            v-bind:class="['img-thumbnail img-circle',{'img-selected-source':isClass},{'selected':index==0}]" 
            :src="`${path_img1}/${img}`" alt="Thiet ke web Anh Ho">
        </span>
    </div>
    
</template>
<script lang="ts">
    const config = useRuntimeConfig()
    export default{
        props:{
            sameImages:String,
            isClass: {
                type:Boolean,
                required: false,
                default: false
            }

        },
        data(){
            return{
                images:<String[]>([]),
                path_img1:config.public.path_img,
            }            
        },
        methods:{

        },
        mounted() {
            let imagesTemp = this.sameImages
            if(imagesTemp !='' && imagesTemp?.includes(",")){
                this.images = imagesTemp.split(",")  
            }else{
                this.images.push(imagesTemp!)
            }
           // console.log("images")
        }
    }
</script>
