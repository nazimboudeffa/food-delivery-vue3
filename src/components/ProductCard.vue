<template>
    <div class="container" v-for="product in products" :key="product.id">

        <img src="images/three-cheese.png" alt='' height='300' width='300'/>

        <h1 class="title">{{product.title}} </h1>
        <span class="price">{{product.price}} $</span>
        <div class="desc">{{product.desc}}</div>

    </div>
</template>

<script>
export default {
  data() {
    return {
        products: [
            {
                id: '1',
                image: 'pizza',
                title: 'Pizza',
                price: '10',
                desc: 'Lorem ipsum'
            },
            {
                id: '2',
                image: 'pizza',
                title: 'Burger',
                price: '10',
                desc: 'Lorem ipsum'
            }
        ]
    }
  }
}
</script>


<style scoped>
.container {
 width: 30%;
 padding: 50px 40px;
 cursor: pointer;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 0 20px;
}

.title {
 color: #d1411e;
 font-size: 20px;
 font-weight: bold;
}

.price {
 font-size: 18px;
 font-weight: bold;
}

.desc {
 font-size: 18px;
 color: gray;
 text-align: center;
 max-width: 100%;
 overflow-wrap: break-word;
}

@media screen and (max-width:480px) {
 .container {
  width: 100%;
 }

 .title {
  font-size: 30px;
 }

 .price,
 .desc {
  font-size: 24px;
 }
}
</style>