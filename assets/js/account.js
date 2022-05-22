function account() {
    const logIns = document.querySelectorAll('.header-account-login')
    const signUps = document.querySelectorAll('.header-account-signup')
    const formAccount = document.querySelector('.form-account')
    const formLogIn = document.querySelector('.form-login-main')
    const formSignUp = document.querySelector('.form-signup-main')
    const user = document.querySelector('.select-tool-user-icon')
    const userAccount = document.querySelector('.select-tool-user-account')
    const iconAccount = document.querySelector('.header-account-icon')
    const formAccountSelect = document.querySelector('.header-account-user')
    
    iconAccount.onclick = () => {
        formAccountSelect.classList.toggle('header-account-user-active')
    }

    logIns.forEach(logIn => {
        logIn.onclick = () => {
            formAccount.style.display = 'block'
            formLogIn.style.display = 'flex'
        }
    })

    signUps.forEach(signUp => {
        signUp.onclick = () => {
            formAccount.style.display = 'block'
            formSignUp.style.display = 'flex'
        }
    })

    formAccount.onclick = () => {
        formLogIn.style.display = 'none'
        formAccount.style.display = 'none'
        formSignUp.style.display = 'none'
    }

    user.onclick = () => {
        userAccount.classList.toggle('select-tool-user-account-active')
    }
}