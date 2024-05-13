export default defineNuxtPlugin({
    name: 'hello',
    setup () {
      return {
        provide: {
            discount :(regularPrice:number,price:number):number =>{
                let discountPercentage =0
                if(regularPrice >=0 && price >=0){
                     discountPercentage = (price /regularPrice) * 100
                    }
                return Math.round(discountPercentage)
            }
        }
      }
    }
  })