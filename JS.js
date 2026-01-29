const Btn = document.querySelector('.button-first').addEventListener('click', function X (ev){

 
 
  
let FT = true;
    // let inputs =  Array.from( document.querySelectorAll('#Form input[type="text"]'));
  let inputs = document.querySelectorAll('#name, #email, #datefirst, #text, #tel, #datelast');
    
    for(let i =0; i<inputs.length; i++){
      if(!inputs[i].value.trim()){
        ev.preventDefault()
        inputs[i].className='error';
    } else {
        inputs[i].className='';
    }
    }
    
    let Chek = document.querySelector('input[type="checkbox"]');
    if(!Chek.checked){
      ev.preventDefault()
      Chek.className='error'
    } else { Chek.className=''}



    let Radio = document.querySelector('input[name="vat"]:checked');
    if(!Radio){ev.preventDefault();
      
    }
    return FT;
})

const ButtonMenu= document.querySelector('#ButtonMenu');
const ULMenuId = document.querySelector('#ULMenuId');

ButtonMenu.addEventListener('click',function(ev){
  ev.preventDefault()
  // if(ULMenuId.classList.contains('UlMenu') == true){
  //   ULMenuId.classList.remove('UlMenu')
  //   ButtonMenu.classList.add('Rotate')
  // }else{
  //   ULMenuId.classList.add('UlMenu')
  //   ButtonMenu.classList.remove('Rotate')
  // }

  if(ULMenuId.classList.contains('UlMenu') == true){
    ULMenuId.classList.remove('UlMenu')
    ButtonMenu.classList.add('Rotate')
    ButtonMenu.classList.remove('Rotate_close')
  }else{
    ULMenuId.classList.add('UlMenu')
    ButtonMenu.classList.remove('Rotate')
    ButtonMenu.classList.add('Rotate_close')
  }
})


{
  const ULMenuId = document.querySelector('#ULMenuId');
  ULMenuId.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
      // console.log('Клик по пункту:', ev.target.textContent);
      const text = document.querySelector('#text').value=ev.target.textContent;
    }
  })
  
}
// .closest('span')
// tagName === 'LI'