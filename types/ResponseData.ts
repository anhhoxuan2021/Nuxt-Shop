
import type  Product  from "@/types/Product";
export default interface ResponseData {
    data: Product[];
    current_page:number,
    first_page_url:string,
    last_page:number,
    last_page_url:string,
    next_page_url:string,
    prev_page_url:string,
    per_page:number,
    total:number
  }

  interface Product1 {
    prd_id: null;
    prd_batch_code: string;
    prd_name: string;
    prd_sku: string;
    prd_quantity: number ;
    prd_disctiption: string;
    prd_short_disctiption: string;
    prd_sex: string;
    prd_size: string;
    prd_color: string;
    prd_price: number;
    prd_regular_price: number;
    prd_tag: string;
    prd_type: string;
    prd_relative: string;
    prd_img: string;
    prd_library: string;
    multi_sizes: string;
    multi_sexes: string;
  }