const cards = document.querySelectorAll('.faq__card');

function cardZeroing() {
  cards.forEach((item) => {
    if (item.querySelector('.faq__button').classList.contains('faq__button--active')) {
      item.querySelector('.faq__button').classList.remove('faq__button--active');
      item.querySelector('.faq__text').classList.remove('faq__text--active');
    }
  });
}

cards.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const text = e.currentTarget.querySelector('.faq__text');
    if (e.target.classList.contains('faq__button--active')) {
      e.target.classList.remove('faq__button--active');
      text.classList.remove('faq__text--active');
      return;
    }
    if (e.target.classList.contains('faq__button')) {
      cardZeroing();
      e.target.classList.toggle('faq__button--active');
      text.classList.toggle('faq__text--active');
    }
  });
});

const inputTel = document.querySelector('#phone');
const errorTel = document.querySelector('.order__error');

inputTel.addEventListener('change', (e) => {
  const reg = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(e.target.value);
  if (!reg) {
    errorTel.style.display = 'block';
    const timeout = setTimeout(() => {
      errorTel.style.display = 'none';
    }, 2000);
    timeout();
  }
});

const conteiner = document.querySelector('#slide1');
console.log(conteiner.scrollWidth);
const index = 0;
// conteiner.style.transition = 'transform 2.3s linear';
// const init = setInterval(() => {
//   conteiner.style.transform = `translateX(${-(index += 50)}px)`;
// }, 2000);
