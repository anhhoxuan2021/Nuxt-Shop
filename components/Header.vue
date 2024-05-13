<script setup>

</script>

<template>
        <header class="grid items-center">
            <topbar id=topbar> </topbar>
            <headerbar id="headerbar">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col"> 
                          <img class="w-167" src="~/assets/images/logo_1.png" >
                        </div>
                        <div class="col-5 block-search">
                            <input class="form-control me-2 bg-color3" type="search" placeholder="Search" aria-label="Search">
                            <i class="fab fa-sistrix icon-search"></i>
                        </div>
                        <div class="col">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-3">
                                    <div class="box-size-2 bg-color3">
                                      <div class="fa-color-gray-light child-box">
                                        <font-awesome-icon icon="fa-solid fa-user"  />
                                      </div>
                                      
                                      </div>
                                </div>

                                <div class="col-9">
                                    <span class="f-12 c-ededed">Tài khoản</span>
                                    <span class="f-13 bold c-ededed">Đăng nhập</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-3">
                                    <div class="box-size-2 bg-color3">
                                      <div class="fa-color-gray-light child-box">
                                        <font-awesome-icon icon="fa-solid fa-cart-shopping "  />
                                      </div>
                                        <span class="counter-cicle">
                                            <span class="child-counter-cicle amount-of-product-cart">0</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-9">
                                    <span class="f-12 c-ededed">Giỏ hàng</span>
                                    <span class="f-13 bold c-ededed"><span id="counter-cart">0</span>&nbsp; Sản Phẩm</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-3">
                                    <div class="box-size-2 bg-color3">
                                      <div class="fa-color-gray-light child-box">
                                        <font-awesome-icon icon="fas fa-shipping-fast"  />
                                      </div>
                                     
                                      </div>
                                </div>

                                <div class="col-9">
                                    <span class="f-12 c-ededed">Tra cứu</span>
                                    <span class="f-13 bold c-ededed">Đơn hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </headerbar>
    </header>
</template>
