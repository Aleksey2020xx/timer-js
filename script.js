document.addEventListener('DOMContentLoaded', function () {
  let inputText = document.getElementById('input');
  let btn = document.getElementById('btn');
  let numberText = document.querySelector('div')

  let interval;
  function timer () {
    if (parseInt(inputText.value) >= 0) {
      numberText.innerHTML = parseInt(inputText.value);
    } else {
      numberText.innerHTML = 0;
    }
    function counter() {
      if (numberText.innerHTML > 0) {
        console.log(numberText.innerHTML)
        numberText.innerHTML--;
        if(numberText.innerHTML == 0) {
          clearInterval(interval);
        }
      }
      else if (parseInt(inputText.value) <= 0 || parseInt(inputText.value) !== NaN) {
        return;
      }
    }
    if(!interval) {
      interval = setInterval(counter, 1000);
    }
  }
  btn.addEventListener('click', timer);
  return;
})
//export default timer;
