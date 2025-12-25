var fileupload=document.getElementById("fileupload")
var myimg=document.getElementById("myimg")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")
var btn4=document.getElementById("btn4")
var btn5=document.getElementById("btn5")

fileupload.addEventListener('change',function(event){
var uplodedimg=(event.target.files[0])
var newvar=URL.createObjectURL(uplodedimg)
myimg.src=newvar //myimg.src=URL.createObjectURL(event.target.files[0]) one line
})


btn1.addEventListener("click",function(){
    myimg.className="filter1"
})
btn2.addEventListener("click",function(){
    myimg.className="filter2"
})
btn3.addEventListener("click",function(){
    myimg.className="filter3"
})
btn4.addEventListener("click",function(){
    myimg.className="filter4"
})
btn5.addEventListener("click",function(){
    myimg.className="filter5"
})