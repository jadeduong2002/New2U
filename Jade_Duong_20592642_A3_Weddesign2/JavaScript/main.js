console.log ("JavaSscript is working!")

// headline// 
TweenMax.to("h1", 4, {
  color: "green", 
  fontSize: "70",
}) 

//Arrown click//
(function(document){
  var div = document.getElementById('container');
  var icon = document.getElementById('icon');
  var open = false;
  
  div.addEventListener('click', function(){
    if(open){
      icon.className = 'fa fa-arrow-down';  
    } else{
      icon.className = 'fa fa-arrow-down open';
    }
    open = !open;
  });
})(document); 

//Sumit button// 
//get calculte btn 
let btnS = document.querySelector("#submit")
//lisnten for click 
btnS.addEventListener('click',function(){
    calculateSubmit()
})

function calculateSubmit(){ 
    //get value for Review // 
    var n1 = document.getElementById('Pnumber').value;

 if(isNaN(n1)){
    alert("Please Type Number");
 }
} 

function showMessage(){
  alert('Thank you for your feedback!');
}

