const op = document.querySelectorAll('.op')
const topo = document.querySelector('.bt-top')
const ball = document.querySelectorAll('.ball')
const aaa = document.getElementById('a')
const bbb = document.getElementById('b')
const ccc = document.getElementById('c')
const bg = document.getElementById('res')
const bgg = document.querySelectorAll('.res')

const input = document.querySelector('.input-form')
const w = window.screenY / 2
const sc = innerHeight



op.forEach(function(a, b, c) {
    c.forEach(function(x, y, z) {
        x.addEventListener('mouseenter', function() {
            x.classList.add('active')
            x.classList.remove("desable")
            x.style.color = "#000"
        })
        x.addEventListener('mouseleave', function() {
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


ball.forEach(function(x, c, s) {
    s.forEach((a, b, c) => {
        a.addEventListener('click', () => {
            x.classList.add('a')
        })
    })
    s.forEach((a, b, c) => {
        a.addEventListener('click', () => {
            a.classList.remove('a')
        })
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