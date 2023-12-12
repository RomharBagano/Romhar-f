window.onload=function(){
    const dropbtn=document.getElementById ('drop');
    const upbtn=document.getElementById('up'); 
    const nav=document.getElementById ('nav');
    
    dropbtn.addEventListener('click',function(){
        nav.style.display='block';
        dropbtn.style.display='none';
    })
    upbtn.addEventListener('click',function(){
        nav.style.display='none';
        dropbtn.style.display='block';
    })
}