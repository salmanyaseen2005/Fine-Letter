 var text = document.getElementById("para")
var input = document.getElementById("inp")
// var text = document.getElementById("para")  
console.log(para);      

function Seaching(){
    var input =document.getElementById("inp").value;
     var Letter = document.getElementById("Letter")
     Letter.innerHTML = input; 
     
     if(input !== ""){
        
        // alert("Enter Your Letter")
            var check = input
        
    
    para.innerHTML = para.textContent.replace(check, "<mark>$&</mark>");
}  else{
    alert("Enter Your Letter")
}
     }
     
       

