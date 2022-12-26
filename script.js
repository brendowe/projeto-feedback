let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let botao = document.getElementById('botao');
let rates = document.querySelectorAll('.btn');
let rating = document.getElementById('rating');

botao.addEventListener('click', () => {
    container.style.display = 'none';
    container2.style.display = 'block';
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
