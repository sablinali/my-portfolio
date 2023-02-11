// These are the javascript codes for the hamburguer
const hamburguerButton = document.getElementById('hamburguer')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show');
}

hamburguerButton.addEventListener('click', toggleButton);



// These are the javascript codes for the footer and contact me form
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trick')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:sablinahare@gmail.com?subject=name ${form.get('name')}  email ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
};


