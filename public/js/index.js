window.onload = function() {
  
    document.querySelector('.toggle-icon').addEventListener('click',()=>{
        document.querySelector('.sidenav').classList.toggle('show-side');
        document.querySelector('.toggle-icon').style.width = '0';
        document.querySelector('.toggle-icon').style.height = '0';
    });

    document.querySelector('.sidenav-toggle').addEventListener('click',()=>{
        document.querySelector('.sidenav').classList.toggle('show-side');
        document.querySelector('.toggle-icon').style.width = '30px';
        document.querySelector('.toggle-icon').style.height = '30px';
    });
};