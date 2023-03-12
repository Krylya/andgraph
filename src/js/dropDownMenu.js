const toggleBtn = document.querySelector('.header__toggle-btn')
const dropDownMenu = document.querySelector('.header-menu')

toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
});
