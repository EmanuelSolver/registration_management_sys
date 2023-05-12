document.addEventListener('DOMContentLoaded', function() { 
    const list = document.querySelector('#mytable ');
    const forms = document.forms;
   
       // deleting client
       list.addEventListener('click', (e) => {
           if (e.target.className == 'delete') {
               const tr = e.target.parentElement;
               tr.parentNode.removeChild(tr);
           }
       });
   
       // create another client
       const addForm = forms['add-movie'];
       addForm.addEventListener('submit', function(e) { 
           e.preventDefault();
   
           // create elements
           const value = addForm.querySelector('input[type="text"]').value;
           const li = document.createElement('li');
           const movieName = document.createElement('span');
           const deleteBtn = document.createElement('span');
   
           // add text content
           movieName.textContent = value;
           deleteBtn.textContent = 'delete';
   
           // add classes
           movieName.classList.add('name');
           deleteBtn.classList.add('delete');
   
           // append to DOM
           li.appendChild(movieName);
           li.appendChild(deleteBtn);
           list.appendChild(li);
   
           // clear input
           addForm.querySelector('input[type="text"]').value = '';
           
       })
   
   });