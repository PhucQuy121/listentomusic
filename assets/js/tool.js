function tool() {
    const btnTool = document.querySelector('.button-select-icon')
    const iconUp = document.querySelector('.fa-chevron-up')
    const iconDown = document.querySelector('.fa-chevron-down')
    btnTool.onclick = () => {
        const formTool = document.querySelector('.select-tool')
        formTool.classList.toggle('select-tool-active')
        iconUp.classList.toggle('fa-chevron-up-active')
        iconDown.classList.toggle('fa-chevron-down-active')
    }
}