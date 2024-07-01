const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
     nav=document.getElementById(navId)
    if(toggleId&&navId){
        toggle.addEventListener('click',()=>{
            nav.classList,toggle('show')
        });
    }

} 
showMenu('nav_toggle','nav_menu');