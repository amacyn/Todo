

// let inputField = document.querySelector('.add_input');
// let btn = document.querySelector('.circle');
// let contena = document.querySelector('.todo_container_item');

// btn.addEventListener('click', ()=> {
    
//     const newItem = document.createElement('p');
//     const checked = document.createElement('checked');
//     const dltBtn = document.createElement('img');

//      contena.appendChild(checked);
//      checked.setAttribute('class', 'check_mark');

//     checked.setAttribute('class','check_mark');
//     checked.addEventListener('click', ()=> {
//          newItem.classList.toggle('toggle')
//           //newItem.style.textDecoration = 'line-through';
//      checked.classList.toggle('toggle_2')

//     })

//     newItem.innerText = inputField.value;
//     contena.appendChild(newItem);
//     inputField.value = ' '; 
//     newItem.style.fontSize = 'larger'

//     dltBtn.setAttribute('src', './images/icon-cross.svg');
//     contena.appendChild(dltBtn);
//     dltBtn.style.cursor = 'pointer';


//     dltBtn.addEventListener('click', ()=>{
//         contena.removeChild(newItem);
//         contena.removeChild(dltBtn);
//         contena.removeChild(checked);

//     });


// });


  let addBtn = document.querySelector('.circle');
  let todoInput = document.querySelector('.add_input');
  let todoContena = document.querySelector('.todo_container');
  let moon = document.querySelector('.moon');
  let body = document.querySelector('.body');
  let screen = document.querySelector('.screen');
  let html = document.querySelector('html');

  moon.addEventListener('click', ()=> {
    body.classList.toggle('body_2');
    moon.classList.toggle('sun');
    todoContena.classList.toggle('todo_container_2');
    screen.classList.toggle('screen_2');
    html.classList.toggle('html_2');
    todoInput.classList.toggle('add_input_2');
    
  })

  //Functionality....
  addBtn.addEventListener('click', ()=> {
   
    if (todoInput.value === '') {
      alert("You haven't written anything")
    } 
    else {

      let newItem = document.createElement('p');// created a p element
      let checkedButton = document.createElement('div'); 
      //let deleteButton = document.createElement('img')

      //check button
      checkedButton.setAttribute('class', 'check');
      checkedButton.addEventListener('click', ()=> {
        newItem.classList.toggle('toggle')
        checkedButton.classList.toggle('toggle-2')
      })
     todoContena.appendChild(checkedButton);

      // //new items
      // newItem.innerText = todoInput.value; //anything inside our input fieled will be added here
      // todoContena.appendChild(newItem);
      // todoInput.value = '';

      // //Delete button
      // deleteButton.setAttribute('src', './images/icon-cross.svg');
      // todoContena.appendChild(deleteButton);
      // deleteButton.style.marginTop = '10px'

      // deleteButton.addEventListener('click', ()=> {
      //   todoContena.removeChild(newItem);
      //   todoContena.removeChild(checkedButton);
      //   todoContena.removeChild(deleteButton);
      // })

    }
   
  })


