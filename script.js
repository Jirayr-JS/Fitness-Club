const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

const form = document.getElementById('form');
const formInput = document.querySelector('.subscribe__input');
const formBtn = document.querySelector('.subscribe__btn');
const subscribeImg = document.querySelector('.form');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

$('#navbar a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 10,
      },
      800
    );
  }
});

formInput.addEventListener('input', () => {
  formInput.checkValidty()
    ? formBtn.classList.add('btn--active')
    : formBtn.classList.remove('btn--active');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  subscribeImg.classList.add('form--success');
  formBtn.classList.add('btn--success');
  formBtn.value = "You're on the list! 👍";
});
