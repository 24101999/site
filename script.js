const op = document.querySelectorAll('.op')
const topo = document.querySelector('.bt-top')
const bl = document.querySelectorAll('.ball')
const aaa = document.getElementById('a')
const bbb = document.getElementById('b')
const ccc = document.getElementById('c')
const bg = document.getElementById('res')
const bgg = document.querySelectorAll('.res')
const tog = document.querySelector('.nav-filter')
const blk = document.querySelector('.blk')
const preto = document.querySelector('.preto')
const clos = document.querySelector('.closed')

const input = document.querySelector('.input-form')
const w = window.screenY / 2
const sc = innerHeight

setTimeout(() => {
    preto.classList.add('a')
}, 2000);

clos.addEventListener('click', () => {
    preto.classList.remove('a')
})


tog.addEventListener('click', () => {
    const x = tog.classList.toggle('active')
    if (x) {
        blk.style.display = "block"

    } else {
        blk.style.display = "none"
    }
})

op.forEach(function(a, b, c) {
    c.forEach(function(x, y, z) {
        x.addEventListener('mouseenter', () => {
            x.classList.add('active')
            x.classList.remove("desable")
            x.style.color = "#000"
        })
        x.addEventListener('mouseleave', () => {
            x.classList.remove('active')
            x.classList.add('desable')

        })
    })
})

topo.addEventListener('click', function() {
    window.scrollTo(0, 0)
})
if (w) {
    topo.style.display = 'none'
} else {
    topo.style.display = 'block'
}

const re = bl.forEach((a) => {
    a.classList.remove('a')
})

bl.forEach(function(x, c, s) {
    x.addEventListener("click", (element) => {
        bl.forEach((a) => {
            a.classList.remove('a')
        })
        x.classList.add('a')
    })

})

aaa.addEventListener('click', function() {
    bg.classList.add('a')
    bg.classList.remove('aa')
    bg.classList.remove('aaa')
})
bbb.addEventListener('click', function() {
    bg.classList.add('aa')
    bg.classList.remove('a')
    bg.classList.remove('aaa')
})
ccc.addEventListener('click', function() {
    bg.classList.add('aaa')
    bg.classList.remove('aa')
    bg.classList.remove('a')
})