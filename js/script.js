console.log( "Le script est lancé..." );

document.getElementById('sort-priority').addEventListener('change', function (event) {
     window.location.href = 'index.php?page=1&sort=' + this.value;
});

document.getElementById('mobile-button').addEventListener('click', function (event) {
     if(document.querySelector('.ul-navbar').classList.contains('active')) document.querySelector('.ul-navbar').classList.remove('active');
     else  document.querySelector('.ul-navbar').classList.add("active");
});


const check = document.querySelectorAll( '.id-checkbox');
check.forEach(element => element.addEventListener('change', function (event) {
     const id_checked = this.id.substr(-1,1);
     const valid_checked = this.checked;

     async function waitingForResponse() {
          const response = await fetch("./includes/update.php?status=done&id=" + id_checked + "&checked=" + valid_checked);
          const todoList = await response.json();
          // console.table(todoList);
          if(todoList['success'].message == 'success'){
               console.log('Update [done] effectué...');
               location.reload();
          }
     }

     waitingForResponse();

}));

const description = document.querySelectorAll( '.btn-description');
description.forEach(element => element.addEventListener('click', function (event) {
     const id_description = this.id.substr(-1,1);
     const text_description = document.getElementById("id-description"+id_description).value;

     async function waitingForResponse() {
          const response = await fetch("./includes/update.php?status=description&id=" + id_description + "&value=" + text_description);
          const todoList = await response.json();
          // console.table(todoList);
          if(todoList['success'].message == 'success'){
               console.log('Update [description] effectué...');
               // location.reload();
          }
     }

     waitingForResponse();

}));
