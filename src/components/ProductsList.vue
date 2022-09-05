<template>
    <div id='products' class="container">
    <h1 class="title">
        The best pizzeria ever
    </h1>
    <div class="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
    </div>
    <div class="wrapper">
        <ProductCard />
    </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductsList',
  components: {
    ProductCard
  }
}
</script>


<style scoped>
.container {

    display: flex;
    flex-direction: column;

    align-items: center;

}

.desc {
    font-size: 18px;
    color: gray;
    width: 60%;

}

.wrapper {
    display: flex;
    flex-wrap: wrap;

}

@media screen and (max-width:480px) {
    .title {
    text-align: center;
    }

    .desc {
    width: 90%;
    text-align: center;
    }

    .wrapper {
        flex-direction: column;
        align-items: center;
    }
}
</style>