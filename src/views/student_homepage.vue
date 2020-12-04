<template>
 <div id="app">
        <div>
            <Page1></Page1>
        </div>
        <div class="underNav">
        </div>
        
        <v-card >
         <!-- <label>{{currentUser.group_id}}</label>-->
            <div style="text-align:center">   
              <b-alert show variant="primary"><a class="alert-link"><strong><i class="fa fa-warning"></i> Notification</strong> <marquee><p>{{message}}</p></marquee></a></b-alert>
            </div>
            <b-tabs pills content-class="" align = "left">
            <b-tab title="Tasks" active>
                <b-card-text>
                  <div>
                    <div class="float-right " style="margin-left:10px"><b-button variant="info" v-if="visible" :disabled="submited" @click="showModal5">Fill FTR</b-button></div>
                    <div class="float-right" > <b-button variant="primary" id="show-btn" @click="showModal">Add New Task</b-button></div>
                    <form v-on:submit.prevent="addNewTask">
                      <b-modal ref="my-modal" centered hide-footer title="Add New Task">
  
                        <div class="col-xs-6">
                          <label for="ex3">Task:</label>
                          <b-form-textarea id="textarea-small" v-model="taskname" margin="2" size="sm"></b-form-textarea>
                        </div>
                        <div>
                          <label for="allotedToinput">Allot To :</label>
                          <b-form-select  v-model="selected2" :options="option" id ="allotedToinput" class="from-control" placeholder="Add student" required></b-form-select> 
                        </div>
                        <div>
                          <label for="example-datepicker">Due Date</label>
                          <b-form-datepicker id="example-datepicker" v-model="valueDate" :min="min" class="mb-1"></b-form-datepicker>
                        </div>
                        <b-button type="submit" class="mt-2" variant="outline-success" block @click="newtask">Submit</b-button>
                        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-button>
                      </b-modal>
                    </form>
                  </div>
                  
                  <div>   
                  <b-modal id="modal-center5" ref="my-modal5" hide-footer centered title="FTR Form">
             
                    <div class="col-lg-12">
                      <label>Date:{{current_date | formatDate}}</label>
                    </div> 
                    <div class="col-lg-12"> 
                      <label for="ex3">ProjectID:<a href="/ProjectDescription">{{gi}}</a></label>
                    </div>
                    <div class="col-lg-12"> 
                      <label for="ex3">ProjectTitle:BloodBank Management</label>
                    </div>
                    <div>
                
                <table class="table2">
                    <tr>
                      <td></td>
                      <td></td>
                    </tr> 
                    <tr v-for="(ftr,index) in ftrs" v-bind:key="ftr.id">
                      <td>{{++index}}.{{ftr.Questions}}</td>
                      <td> 
                           <input type="text" v-model="ftr.Answer" >
                      </td>
                    </tr>
                </table>
             
              </div>
               <label>Remarks:</label>
              <b-form-textarea id="textarea-small" disabled margin="2" size="sm"></b-form-textarea>
            <div class="col-lg-12">
              <label>Name of Guide:Kolhekar Sir</label>
            </div>
            <div class="col-lg-12">
              <label>Date: {{dates |formatDate}}</label>
            </div>  
                  <div class="float-right">  
                    <b-button type="submit" style="margin-right: 10px"  variant="primary"  @click="submitFTR(ftrs, ftr)">Submit</b-button>
                    <b-button  style="margin-right:10px" variant="danger"  @click="hideModal5">Cancel</b-button>
                    </div>
          </b-modal>
        </div>
            <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Alloted To</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                          
                                        </tr>
                                    </thead>
                                    
                                    
          <tbody>
             
            <tr v-for="(todo,index) in todos" v-bind:key="todo.id">
                   
              <!-- <td class="text-center">{{ ++index }}</td> --> 
               <td>{{ ++index }}</td> 
              <td>{{todo.Task_Name}}</td>
              <td>{{todo.Alloted_To}}</td>
              <td>{{todo.Due_Date |formatDate}}</td>
              <td>
              
              <button  class=" btn btn-danger " @click="deleteTask(todo.id)">Select</button>
              </td>
            </tr>
        </tbody>
       
     </table>
            
      
    
            </b-card-text></b-tab>
            <b-tab title="Ongoing Tasks"><b-card-text>
            <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Start Date</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                            <th>Status</th>
                                          
                                        </tr>
                                    </thead>
                                   
                                    <div>
                 
                         <b-modal ref="my-modal1" hide-footer title="Task Name">
                                           
                                <div class="col-xs-6">
                                     <label for="ex3">Description:</label>
                                     <b-form-textarea name="des" id="txt11" size="sm" v-model="description" placeholder="How did u do? What approach?">
                                     </b-form-textarea>
                                       </div>
                                      <b-form-checkbox id="chek" size="md" value="true" unchecked-value="false">Difficulties faced?</b-form-checkbox>
                                         <div class="col-xs-6">
                                                     
                                            <input class="form-control" id="ex3" name="dif" type="text" v-model="difficulties" placeholder="Mention difficulties faced">
                                          </div>
                                                     
                                      <b-button class="mt-2" variant="outline-success" block @click="addtask">Submit</b-button>
                                            
                                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal1">Cancel</b-button>
                                            </b-modal>
                  </div>             
            <tbody>
            <tr v-for="(doing,index) in doings" v-bind:key="doing.id">
              <td>{{++index}}</td>
              <td>{{doing.Task_Name}}</td>
              <td>{{doing.Start_date |formatDate}}</td>
              <td>{{doing.Due_Date |formatDate}}</td>
              <td> <b-button id="show-btn" @click="showModal1(doing.id)">Add Details</b-button> </td>                                       
              <td>{{doing.Status}}</td>   
                                            
            </tr>
          </tbody>
           </table>
            </b-card-text></b-tab>
            <b-tab title="Completed Tasks"><b-card-text>
            <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Start Date</th>
                                            <th>Approve Date</th>
                                            <th>Status</th>
                                          
                                        </tr>
                                           </thead>
           <tbody>
            <tr v-for="(done,index) in dones" v-bind:key="done.id">
              <td >{{ ++index }}</td>
              <td >{{done.Task_Name}}</td>
              <td >{{done.Start_date |formatDate}}</td>
              <td >{{done.Approved_Date |formatDate}}</td>
              <td >{{done.Status}}</td>                                                               
            </tr>
          </tbody>                         
          </table> 
            </b-card-text></b-tab>
            </b-tabs>
       
       </v-card> 
        </div>


</template>

<script>
/* eslint-disable */
import axios from 'axios'
import moment from 'moment'
import Page1 from './page1'
export default {
  components: {
    Page1
  },
    computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },
  data() {
    var mindate=new Date()
    return {
      
       valueDate: '',
       selected2: null,
       taskname:'',
       todos:[],
       doings:[],
       imp:'',
       dones:[],
       min:mindate,
       requests:[],
        difficulties:'',
        description:'',
       def:'',
       gi:currentUser.group_id,
      current_date:new Date(),
       Ftrno:'',
       dates:'',
       date1:'',
       message:'',
       ftr:[],
       ftr1:[],
       ftrs:[],
       date2:'',
       visible:false,
       option:[{ value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value:'3PO' , text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }],
       sel:[
         {
           val:"YES", 
           val1:"NO"
         }
       ],
       selr:[],
       submited:false       
    }
  },
    mounted() {
    this.getTasks()
    this.getDoings()
    this.getSubmits()
     this.getDones()
     this.getFTR()
    },
    methods: {
      makeShow(){
        this.show = !this.show;
      },
      getFTR12(NO){
        axios.get(`http://localhost:3000/api/ftr/${NO}`).then(
          result => {
            console.log(result.data)
            this.ftrs = result.data
            this.ftrs.forEach(element => {
              element["Answer"];
            });
            this.date12=moment(this.dates).format("DD-MM-YYYY");
            this.message=`FTR ${this.Ftrno} is Enabled.Due Date of FTR is ${this.date12}.Please Fill FTR`
          },
          error => {
            console.log(error)
          }
        )

      },
      getFTR() {
        axios.get('http://localhost:3000/api/getftr').then(
          result => {
            console.log(result.data)
            this.ftr1 = result.data
            this.dates=this.ftr1[0].Due_Date
            this.Ftrno=this.ftr1[0].EnableFTR
            this.date1=moment(this.dates).format("DDMMYYYY");
            this.date2=moment(this.current_date).format("DDMMYYYY");
        if(Number(this.date1)>=Number(this.date2))
        {
          this.visible=true;
          this.getFTR12(this.Ftrno);
         
        }
        else{
          this.message='NO Message'
          this.visible=false;
        }
          },
          error => {
            console.error(error)
          }
        )
      
    },
    getTasks() {
        axios.get(`http://localhost:3000/api/task/${this.gi}`).then(
          result => {
            console.log(result.data)
            this.todos = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
    getDoings() {
        axios.get(`http://localhost:3000/api/doing/${this.gi}`).then(
          result => {
            console.log(result.data)
            this.doings = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
     getSubmits() {
        axios.get(`http://localhost:3000/api/submit/${this.gi}`).then(
          result => {
            console.log(result.data)
            this.requests = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
      getDones() {
        axios.get(`http://localhost:3000/api/done/${this.gi}`).then(
          result => {
            console.log(result.data)
            this.dones = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
      newtask() {
        
        axios.post(`http://localhost:3000/api/task/${this.gi}`,
          { 
          taskname: this.taskname,
          allotedTo : this.selected2,
          DueDate : this.valueDate
          }
        ).then((res) => {
          this.taskname = ''
          this.selected2 = ''
          this.valueDate = ''
          this.getTasks()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
    setSelected(tab) {
      this.selected = tab;
    },
    showModal() {
        this.$refs['my-modal'].show()
      },
       showModal5() {
        this.$refs['my-modal5'].show()
      },
       showModal1(SN) {
        this.$refs['my-modal1'].show()
        this.imp=SN
      },
      hideModal()
      {
           this.taskname='',
           this.valueDate='',
           this.selected2='',
        this.$refs['my-modal'].hide()
      },
      hideModal1()
      {
       this.$refs['my-modal1'].hide()
      },
        hideModal5()
      {
       this.$refs['my-modal5'].hide()
      },
      deleteTask(SN)
      {
        console.log(SN);
       
       axios.post(`http://localhost:3000/api/doing/${this.gi}`,
          { 
            SerialName:SN,
        
          }
        ).then((res) => {
          this.getTasks()
          this.getDoings()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
      submitFTR(ftrs)
      {
        var count = Object.keys(ftrs).length;
        this.submited=true;
        axios.post(`http://localhost:3000/api/ftrs/${this.gi}`,{
         FTR:this.ftrs,
         Size:count
        }).then((res) =>{
           this.getFTR()
        })
       
        this.hideModal5()
      },
      addtask(){     
           axios.post(`http://localhost:3000/api/submit/${this.gi}`,
                      {
                     
                      SerialName:this.imp, 
                      TaskDetails:this.description,
                      Challenges:this.difficulties,
                      }
                    ).then((res) => {
                      this.description ='',
                      this.difficulties=''
                      this.getDoings()
                      this.getSubmits()
                      this.hideModal1()
                      console.log(res)
                    }).catch((err) => {
                      console.log(err)
                    })
     
    }
 
    }
}
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
 @import url("https://cdn.syncfusion.com/ej2/material.css");

</style>