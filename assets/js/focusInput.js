function focusInput() {
    const inputSearch = document.querySelector('.header-search-input')
    const focusSearch = document.querySelector('.header-search-history')
    const headerSearch = document.querySelector('.header-search')
    const iconAccount = document.querySelector('.header-account-icon')
    const formAccountSelect = document.querySelector('.header-account-user')
    const user = document.querySelector('.select-tool-user-icon')
    const userAccount = document.querySelector('.select-tool-user-account')

    inputSearch.onfocus = function(){
        Object.assign(headerSearch.style,{
            backgroundColor: 'var(--bg-forcus)',
            borderBottomRightRadius: '0',
            borderBottomLeftRadius: '0'
        });
        focusSearch.style.display = 'block'
    }

    focusSearch.onclick = () => {
        Object.assign(headerSearch.style,{
            backgroundColor: 'var(--bg-color)',
            borderBottomRightRadius: '30px',
            borderBottomLeftRadius: '30px'
        });
        focusSearch.style.display = 'none'
    }

    const settingIcon = document.querySelector('.header-setting-icon')
    const settingTool = document.querySelector('.header-setting-tool')
    settingIcon.addEventListener('click', () =>{
        settingTool.classList.toggle('header-setting-tool-active')
    })

    window.addEventListener('mouseup', function(event) {
        if (event.target !== settingTool && event.target !== settingIcon) {
            settingTool.classList.remove('header-setting-tool-active')
        }

        if (event.target !== focusSearch && event.target !== inputSearch){
            focusSearch.click()
        }

        if (event.target !== iconAccount && !event.target.closest('.header-account-user')){
            formAccountSelect.classList.remove('header-account-user-active')
        }

        if (event.target !== user && !event.target.closest('.select-tool-user-account')){
            userAccount.classList.remove('select-tool-user-account-active')
        }
    });
}