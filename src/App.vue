<template>
<div id="app">
  <span> <div class="ft">
     <router-view></router-view>
   </div>
  </span>
</div>
</template>


<style>
   html, body {
  height: 110%;
  margin: 0;
  padding: 0;
  
} 
   #app{
     background-color:lightsteelblue;
      height:105%;
      padding-left: 2%;
      padding-right: 2%;
      padding-top:1% ;
   }
    .ft{
      height: auto;
      background-color:white;
      
   } 

   
</style>

