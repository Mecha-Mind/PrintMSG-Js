let msgBox = document.querySelector('div'),
    inp = document.getElementById('input'),
    btn = document.getElementById('btn');

btn.onclick =  _=> {
  let inpVal = inp.value;
  if (inpVal != "") {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = inpVal;
    msgBox.appendChild(paragraph);
    inp.value = '';
  }else {
    inp.placeholder = 'Type Here'
  }

};