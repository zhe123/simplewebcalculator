/*
author:Zhemou Li
date:7/1/2018-7/3/2018

*/

//this instance is for form-submission which is to be mailed through php mail()
var formsubmission=new Vue({
	el:'#form-submission',
	data:{
       msg:'',
       submit:'submit'
	},
});
//this instance is for calculator form
var calform=new Vue({
   el:'#cal-form',
   data:{
   
     inputX:'',
     inputY:'',
     selected:'+',
     resultBar:"the result will be here",
     image:"images/image.png",
     Google:"Google",
     Baidu:"Baidu",
     right:"right",
      options: [
      { text: '+', value: '0' },
      { text: '-', value: '1' },
      { text: '×', value: '2' },
      { text: '÷', value: '3'}],
      heightpx:'50px',
      widthpx:'50px'
   },
   methods:{
       output:function(event){

         if(event){

              var that =this;
              var input1=parseInt(this.inputX);
              var input2=parseInt(this.inputY);
              var operator=parseInt($('#operator').val());
              var result;
			  switch(operator){
					//add
					case 0: result = input1+input2;
					that.resultBar = "The result is : " + result;
				    formsubmission.msg=result;	
				  	break;
				  	//subtract
					case 1: result = input1-input2;
					that.resultBar = "The result is : " + result;
				    formsubmission.msg=result;	
					break;
					//multiply
					case 2: result = input1*input2;
					that.resultBar = "The result is : " + result;
				    formsubmission.msg=result;	
					break;
					//divide
					case 3: result = (input1/input2).toFixed(1);//only one digit after
					that.resultBar = "The result is : " + result;
				    formsubmission.msg=result;	
					break;
					default:
				  	break;


               }
           }
         
       },
       validateInput:function(event){
       	    if(event){        //validate the inputs to make sure they are numbers
				     parseInt(this.inputX);
             parseInt(this.inputY);
          }
       }
   
    }
});




//add two links
// var link1=document.createElement('a');
// link1.setAttribute("href","http://google.com")
// link1.innerHTML="Google";
// link1.setAttribute("title","Google");
// document.getElementById("links").appendChild(link1);

// var link2=document.createElement('a');
// link2.setAttribute("href","http://baidu.com")
// link2.innerHTML="Baidu";
// link2.setAttribute("title","Baidu");
// link2.style.float="right";
// document.getElementById("links").appendChild(link2);
//post calculation result when submisson contact form
//using ajax to post result to php page absolutely failed,i hate ajax and php 
// $('#submit').click(function(){
         
         
//          $.ajax({
//           url: 'mailhandling.php', //This is the current doc
//           type: "POST",
//           dataType:'json', // add json datatype to get json
//           data: ({name: '145'}),
//           success: function(data){
//           console.log(data);
//      }
// }); 