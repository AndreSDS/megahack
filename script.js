window.onload = function() {
  
    document.querySelector('.toggle-icon').addEventListener('click',()=>{
        document.querySelector('.sidenav').classList.toggle('show-side');
    });

    document.querySelector('.sidenav-toggle').addEventListener('click',()=>{
        document.querySelector('.sidenav').classList.toggle('show-side');
    });
};