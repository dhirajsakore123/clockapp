let a=document.getElementById("hrs")
let b=document.getElementById("min")
let c=document.getElementById("sec")
let d=document.getElementById("amorpm")
let text=document.getElementById("box3")
let message=document.getElementById("message")
function clock(){

 let time=new Date();
 let hrs=time.getHours();
 let min=time.getMinutes();
 let sec=time.getSeconds();
 let hr=hrs

 if(hr>12){
    hr=hr-12
 }
 a.innerHTML=`${hr}`
 b.innerHTML=`${min}`
 c.innerHTML=`${sec}`
 
 if(hrs>12 ){
    d.innerHTML="PM"
 }
 else{
    d.innerHTM="AM"
 }
 if(hrs>7 && hrs< 12){
  message.innerHTML=" GRAB SOME HEALTHY BREAKFAST!!!"
 }
 if(hrs>12 && hrs<18){
  message.innerHTML=" LET'S HAVE SOME LUNCH !!"
 }
 if(hrs>18 && hrs< 22 ){
  message.innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
 }
 if(hrs>22 && hrs< 7){
  message.innerHTML=" CLOSE YOUR EYES AND GO TO SLEEP"
 }
 

}

setInterval(()=>{
clock();
},1000)

let set=document.getElementById("box4")
let select=document.querySelectorAll("#wakeup")
let alarm=document.getElementsByClassName("alarm")
let pic=document.getElementById("pic")


  function setalarm(){
    
    let time=new Date()
    let hrs=time.getHours();

    let selectindex=select[0].selectedIndex
     let targetindex=select[0].options[selectindex]

     let selectindex1=select[1].selectedIndex
     let targetindex1=select[1].options[selectindex1]

     let selectindex2=select[2].selectedIndex
     let targetindex2=select[2].options[selectindex2]

     let selectindex3=select[3].selectedIndex
     let targetindex3=select[3].options[selectindex3]

    if(parseInt(selectindex)){
      alarm[0].innerHTML=`${targetindex.innerHTML}`
    }
    if(parseInt(selectindex1)){
      alarm[1].innerHTML=`${targetindex1.innerHTML}`
    }
    if(parseInt(selectindex2)){
      alarm[2].innerHTML=`${targetindex2.innerHTML}`
    }
    if(parseInt(selectindex3)){
      alarm[3].innerHTML=`${targetindex3.innerHTML}`
    }


    
    if(parseInt(select[0].value)===hrs){
      pic.style.backgroundImage = "url('morning.svg')";
      text.innerHTML="GOOD MORNING!! WAKE UP!!"
    }
    if(parseInt(select[1].value)===hrs){
    pic.style.backgroundImage = "url('afternoon.svg')";
    text.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    if(parseInt(select[2].value)===hrs){
    pic.style.backgroundImage = "url('eve.png')";
    text.innerHTML="GOOD EVENING !!"
    
    }
    if(parseInt(select[3].value)===hrs){
    pic.style.backgroundImage = "url('goodnight.svg')";
    text.innerHTML="GOOD NIGHT !!"
    
    }
    }
    set.addEventListener("mouseover",()=>{
      set.innerHTML = " Party Time"
     
  })
  set.addEventListener("mouseout",()=>{
    set.innerHTML = " Set Alarm"
     
  })

