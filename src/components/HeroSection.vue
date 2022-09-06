<template>
    
    <div class="container">
     <div class="arrowContainer">
        <img src='@/assets/images/arrowl.png' alt='' layout='fill' objectFit='contain'/>
     </div>
     <div class="wrapper" style="transform:`translateX(${-100*index}vw)`">
       <div className="imgContainer">
        <img src="@/assets/images/featur.png" />
       </div>
     </div>
     <div class=arrowContainer style="right:0">
        <img src='@/assets/images/arrowr.png' alt='' layout='fill' objectFit='contain'/>
     </div>
    </div>
</template>
<script>
export default {
    name: 'HeroSection'
}
</script>
<style scoped>
.container {
 height: calc(100vh - 100px);
 overflow: hidden;
 overflow-y: hidden;

 position: relative;
 background: linear-gradient(#1ED19A, #d1411e);


 ;
}

.arrowContainer {
 position: absolute;
 height: 20%;
 width: 10%;
 top: 0;
 bottom: 0;
 margin: auto;
 cursor: pointer;
 z-index: 2;
}

.wrapper {
 width: 300vw;
 height: 100%;
 display: flex;
 transition: all 1.5s ease-in-out;
}

.imgContainer {
 position: relative;
 width: 100vw;
 height: 100%;
}

@media screen and (max-width:480px) {
 .container {
  height: 50vh;
 }
}
</style>