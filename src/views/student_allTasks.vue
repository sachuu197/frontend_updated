<template>
    <div id="app">
         <div>
         <Page1></Page1>
         </div>
        <div class="underNav">
        </div>
        
        <v-card style="margin:  30px 5% 30px 5% ">
        <div>
          <h2 style="text-align: center;">All Tasks</h2>  
          <b-tabs pills content-class="mt-3" align="center">
            <div>
              <ejs-grid ref='grid' :dataSource='datas' allowFiltering='true' :filterSettings='filterOptions' >
              <e-columns>
          <!-- <e-column field="id" headerText="Sr No" textAlign="auto" :customAttributes="customAttributes" width=100></e-column> -->
                  <e-column field="Task_Name" headerText="Taskname"  textAlign="auto" :customAttributes="customAttributes" width=170 ></e-column>
                  <e-column field="Alloted_To" headerText="AllotedTo"  textAlign="auto" :customAttributes="customAttributes" width=140 ></e-column>
                  <e-column field="Due_Date" headerText="Due_Date"  textAlign="auto" :customAttributes="customAttributes" width=130 ></e-column>
                  <e-column field="Start_date" headerText="Start_date"  textAlign="auto" :customAttributes="customAttributes" width=130 ></e-column>
                  <e-column field="Approved_Date" headerText="End_date"  textAlign="auto" :customAttributes="customAttributes" width=130 ></e-column>
                  <e-column field="Status" headerText="Status"  textAlign="auto" :customAttributes="customAttributes" width=110 ></e-column> 
              </e-columns>
              </ejs-grid>
          </div>
        </b-tabs>
        </div>
        </v-card>
        
    </div>
</template>
<script>

import axios from 'axios'

import  {Filter}  from "@syncfusion/ej2-vue-grids";
import Page1 from './page1'

export default {
  components: {
    Page1
  },
    data: () => {
        return {
          datas: [],
          gi:'BE-COMP-PRJ-20-21-1',
          customAttributes : {class: 'customcss'},
          filterOptions: {
            type: 'Menu',
            operators: {
              stringOperator: [
                { value: 'startsWith', text: 'starts with' },
              ],
            }
          },
        };
      },
      mounted(){
        this.getdata()
      },
      methods:{
      getdata(){
         axios.get(`http://localhost:3000/api/tasks/${this.gi}`).then(
              result => {
                  console.log(result.data)
                  this.datas = result.data
          },
              error => {
                 console.error(error) 
              }
         )
   }
      },
      provide: {
        grid: [Filter],
      },
    }
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
 @import url("https://cdn.syncfusion.com/ej2/material.css");




  .e-grid *{
     font-size: 14px;
   text-align: left;
}
.e-grid .e-rowcell.customcss{
  
    height: 15px;
    font-size: small;
    
}
.e-grid .e-headercell.customcss {
    color: black;
    font-weight: bold ;
   
    
}
</style>