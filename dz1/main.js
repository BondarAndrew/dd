let text = document.querySelector('.text')
let btn = document.querySelector('.btn')

btn.addEventListener('click', () =>  {
    let newText = text.value;
    btn.innerText = newText;
})