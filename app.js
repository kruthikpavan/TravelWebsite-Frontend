const burger= document.querySelector(".burger")
const logo= document.querySelector("#logo")
const lines=document.querySelector(".line-1")
const lines2=document.querySelector(".line-2")
const navbar= document.querySelector(".nav-bar")
var r = document.querySelector(':root');

burger.addEventListener("click",()=>{
    document.body.style.overflow="visible"

    if(burger.classList.contains("active")){
        console.log("puka");
        document.documentElement.style
    
        .setProperty('--blue', 'circle(50px at 100% 0%)');
        setTimeout(function(){  
            lines.style.backgroundColor="white";
    lines2.style.backgroundColor="white";
    logo.style.color="white"
    lines.style.transform="rotate(0deg)"
    lines2.style.transform="rotate(0deg)"
    burger.classList.remove("active")
    }, 500);
    
    
    }
else{
    r.style.setProperty('--blue', 'circle(1900px at 100% 0%)');
    document.body.style.overflow="hidden";

    // document.documentElement.style
        // .setProperty('--blue', 'circle(1900px at 100% 0%)');
        setTimeout(function(){  
        lines.style.backgroundColor="red";
        lines2.style.backgroundColor="red";
      
        lines.style.transform = "rotate(45deg)";
        lines.style.transform += "translateY(6px)";
        lines2.style.transform = "rotate(-45deg)";
        lines2.style.transform += "translateY(-6px)";
}, 100);
 
    
    logo.style.color="black"
    burger.classList.add("active")
}
})

