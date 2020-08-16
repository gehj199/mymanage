<template>
  <div class="mainBody">
      <div class="content">
        404 Not Found !
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .mainBody{
        width:100%;
        height:300px;
        position:relative;
        
    }
    .content{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        font-size:50px;
        color:red;
    }

</style>