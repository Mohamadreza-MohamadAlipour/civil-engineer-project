let btn = document.querySelector('.Hamburger-menu')
let list = document.querySelector('.navbar .navbar-list')

btn.addEventListener('click', function () {
  btn.classList.toggle('active')
  list.classList.toggle('active')
})

const btnActive = document.querySelectorAll('.btn-list .btn-item')
const content = document.querySelectorAll('.content-box .content-item')

for (let i = 0; i < btnActive.length; i++) {
  btnActive[i].addEventListener('click', () => {
    for (let j = 0; j < btnActive.length; j++) {
      btnActive[j].classList.remove('active')
    }
    btnActive[i].classList.add('active')
    let target = btnActive[i].getAttribute('data-target')

    for (let k = 0; k < content.length; k++) {
      content[k].style.display = 'none'
      if (target == content[k].getAttribute('data-id')) {
        content[k].style.display = 'flex'
      }
    }
  })
}
