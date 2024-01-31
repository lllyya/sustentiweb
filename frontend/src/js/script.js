(function () {
  const save_cookies = localStorage.getItem('confirm');
  const cookies = document.querySelector('#cookies');
  const btnCookies = document.querySelector('.btn-cookies');
  const send = document.querySelector('.send');
  const message = document.querySelector('.message');

  if(!save_cookies) {
    cookies.classList.add('visible');
  } else {
    cookies.classList.add('invisible');
  }

  send.addEventListener('click', (e) => {
    e.preventDefault();
    message.innerHTML = 'Mensagem enviada com sucesso!';
    message.classList.add('success', 'p-3');
  });

  btnCookies.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('confirm', true);
    cookies.innerHTML = '';
  });
  
  console.log('Welcome! :D');
})()
