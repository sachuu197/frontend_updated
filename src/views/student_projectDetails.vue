<template>
<div>
        <div>
         <Page1></Page1>
         </div>
        <div class="underNav">
        </div>
        <v-card style="margin: 30px 5% 30px 5% ">
        
          <div class="row">
         <div class="col-5">
           <br>
           <br>
           
      <v-card>
       <div class="col-5">
          
           <div>
             <apexchart width="500" type="bar" :options="options1" :series="series1"></apexchart>
          </div>
    
       </div>
      </v-card>
       <br>
       <br><br>
     <v-card>
      <div class="col-5" style="">
  
        <td>
            <div>
            <apexchart width="430" type="donut" :options="options2" :series="series2"></apexchart>
            </div>
        </td> 
      </div>
     </v-card>
         </div>
         
    <div class="col-7">
      <v-card>
       <div id='box1'>
             <h3 >Project ID: {{gid}}</h3>
                      
                         
                    <td style="text-align:left" v-for="(todo) in todos" v-bind:key="todo.id">
                          <tr><td><h4>Problem Statement :   </h4></td><td><h4> {{todo.Group_title}} </h4></td></tr>
                           <tr><td><h4>Collage :</h4></td><td><h4> {{todo.Collage}} </h4></td></tr>
                           <tr><td><h4>Branch : </h4></td><td><h4>{{todo.Department}} </h4></td></tr>                  
                           <tr><td><h4>Faulty Guide:</h4></td><td><h4>{{todo.Faulty_guide2}} </h4></td> </tr>
                            <tr><td><h4>Faulty Guide:</h4></td><td><h4>{{todo.Faulty_guide}} </h4></td> </tr>
                           <tr><td><h4>  Industry Guide: </h4></td><td><h4>{{todo.Industry_guide}} </h4></td></tr>                        
                           <tr><td><h4>Group Members: </h4></td><td>
                                <ul> 
                                  <li><tr><td><h4>{{todo.Stu1}} </h4></td></tr></li>
                                  <li><tr><td><h4>{{todo.Stu2}} </h4></td></tr></li>
                                 <li> <tr><td><h4>{{todo.Stu3}} </h4></td></tr></li>
                                  <li> <tr><td><h4>{{todo.Stu4}} </h4></td></tr></li>
                                 </ul>
                                 </td>
                           </tr>
                                
                     
                           <tr><td><h4>Domians: </h4></td><td>
                                 <ul>
                                 <li><tr><td><h4>{{todo.Domian1}} </h4></td></tr></li>
                                 <li><tr><td><h4>{{todo.Domian2}} </h4></td></tr></li> 
                                 <li><tr><td><h4>{{todo.Domian3}} </h4></td></tr></li> 
                                 </ul>  
                                 </td>  
                                 </tr>
                            <tr><td><h4>Project Duration: </h4></td><td>
                                <ul> 
                                  <li><tr><td><h4>Initial    :</h4></td><h4>{{todo.initial_stage}} Weeks</h4></tr></li>
                                  <li><tr><td><h4>Design     :</h4></td><h4>{{todo.Design_stage}} Weeks</h4></tr></li>
                                  <li><tr><td><h4>Devlopment :</h4></td><h4>{{todo.Devlopment_stage}} Weeks</h4></tr></li>
                                  <li><tr><td><h4>Testing    :</h4></td><h4>{{todo.Testing_Stage}} Weeks</h4></tr></li>
                                  <li><tr><td><h4>Deployment :</h4></td><h4>{{todo.Deployment_stage}} Week</h4></tr></li>
                                   <li><tr><td><h4>Total     :</h4></td><h4>{{total}} Week</h4></tr></li>
                                 </ul>
                                 </td>
                           </tr>      
            </td>
       </div>
       </v-card>
    </div>
    
  </div>  
      
        </v-card>
</div>
</template>
<script>
import Page1 from './page1'
import axios from 'axios'
export default {
  data: function() {
    return {
     
          gi:"1",
          todos:[],
          total:'',
          gid:'',

      options1: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      },
      series1: [{
        name: 'series1',
        data: [15, 20, 35, 26, 42, 45, 33, 34]
      }],
      options2: {},
      series2: [44, 55, 41, 17, 15]
    }
  },
  components: {
    Page1
  },
  mounted() {
    this.getPDs()
  },
  methods:{
  getPDs() {
        axios.get(`http://localhost:3000/api/pds/${this.gi}`).then(
          result => {
            console.log(result.data)
            this.todos = result.data
            this.total=this.todos[0].initial_stage + this.todos[0].Design_stage + this.todos[0].Devlopment_stage + this.todos[0].Testing_Stage + this.todos[0].Deployment_stage;
            //this.total=Number(this.todos[0].initial_stage) + Number(this.todos[0].Design_stage) + Number(this.todos[0].Devlopment_stage) + Number(this.todos[0].Testing_stage) + Number(this.todos[0].Deployment_stage);
            console.log(this.total);
            this.gid=this.todos[0].Group_id;
          },
          error => {
            console.error(error)
          }
        )
    },
}
}
</script>
<style lang="css" scoped>
.underNav{
    margin-top:50px;
}
#box1{
        width:auto;
        padding:10px;
        margin:auto;
        margin-top:20px;
      
        text-align:center;
        height: auto;
       
        
    }
.ft{
  background-color: lightgrey
}
</style>>

  