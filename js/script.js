function menuIsOpen() {
    if (window.screen.width.valueOf() < 768) {
        document.getElementById('menu').style.width = '240px'
    } else {
        document.getElementById('menu').style.width = '480px'
    }
    document.getElementById('sideBack').style.width = '100%'
    document.getElementById('menu').style.padding = '1.5rem'
}

function menuIsClosed() {
    document.getElementById('menu').style.width = '0'
    document.getElementById('sideBack').style.width = '0%'
    document.getElementById('menu').style.padding = '0'
}

document.getElementById('openMenu').addEventListener('click', () => {
    menuIsOpen()
})

document.getElementById('closeMenu').addEventListener('click', () => {
    menuIsClosed()
})