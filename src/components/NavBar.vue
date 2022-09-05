<template>
    <div class="container">
     <div class="item">
      <div class="img">
       <img src = '/images/telephone.png' alt='' height='32' width="32"/>
      </div>
      <div class="texts">
       <div class="text">ORDER NOW!</div>
       <div class="text">5553001</div>
      </div>
     </div>
     <div class="item">
      <ul class="list">
            <li class="listItem">
                <router-link to="/">Home</router-link>
            </li>

            <li class="listItem">
                <router-link to="/products">Products</router-link>
            </li>

            <img src='/images/logo.png' alt='' width='180' height='100'/>
            
            <li class="listItem">
                Blogs
            </li>
            <li class="listItem">
                Contact
            </li>
      </ul>
     </div>

     <div class="item">
      <img src='/images/cart.png' alt='' width='30' height='30'/>
       <div class="counter">0 </div>
     </div>

    </div>
</template>

<style scoped>
.container {
    position: sticky;
    top: 0;
    z-index: 98;
    height: 100px;
    width: 100%;
    display: flex;
    padding: 0 25px;
    background-color: #1ED19A;
    align-items: center;
    justify-content: space-between;

    transition: all 1s ease;
}

.item {
    flex: 1;
    display: flex;
    align-items: center;
}

.item:nth-child(2) {
    flex: 3;
}

.item:nth-child(3) {
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
}

.img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    padding: 10px;
    margin-right: 5px;
}

.text:nth-child(1) {
    color: white;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
}

.text:last-child {
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    list-style: none;
}

.listItem {
    font-size: 17;
    font-weight: 500;
    cursor: pointer;
    color: white;
}

.counter {
    background-color: white;
    color: #d1411e;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: -10px;
    right: -10px;
    position: absolute;
    cursor: pointer;

}

@media screen and (max-width:480px) {
    .item:nth-child(2) {
        display: none
    }

    .item:nth-child(1) {
        flex: 6;
    }
}
</style>