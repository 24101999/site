const op = document.querySelectorAll('.op')
const topo = document.querySelector('.bt-top')
const bl = document.querySelectorAll('.ball')
const aaa = document.getElementById('a')
const bbb = document.getElementById('b')
const ccc = document.getElementById('c')
const bg = document.getElementById('res')
const bgg = document.querySelectorAll('.res')
const preto = document.querySelector('.preto')
const clos = document.querySelector('.closed')
const set = document.querySelector('.set')
const setA = document.querySelector('.set-a')

const input = document.querySelector('.input-form')
const w = window.addEventListener('scroll', () => {

})
const loop = () => {
    setInterval(() => {
        bg.classList.add('a')
        bg.classList.remove('aa')
        bg.classList.remove('aaa')
    }, 2000);
    setInterval(() => {
        bg.classList.add('aa')
        bg.classList.remove('a')
        bg.classList.remove('aaa')
    }, 4000);
    setInterval(() => {
        bg.classList.add('aaa')
        bg.classList.remove('a')
        bg.classList.remove('aa')
    }, 6000);
}
loop()

// for (let index = 0 && loop(); index == 0;) {
//     loop() += 1

// }



// setTimeout(() => {
//     third()
// }, 1000);
setTimeout(() => {
    preto.classList.add('a')
}, 2000);

clos.addEventListener('click', () => {
    preto.classList.remove('a')
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
if (w == innerHeight / 2) {
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

const a = () => {
    bg.classList.remove('a')
}
const b = () => {
    bg.classList.remove('aa')
}
const c = () => {
    bg.classList.remove('aaa')
}
const x = () => {
    bg.classList.add('a')
}
const y = () => {
    bg.classList.add('aa')
}
const z = () => {
    bg.classList.add('aaa')
}
const end = () => {
    k()
}
const tr = () => {
    z()
    bg.classList.remove('aa')
    bg.classList.remove('a')

}
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


const l = () => {
    setA.addEventListener('click', () => {
        y()
        a()
        c()
    })
}

const k = () => {
    z()
    a()
    c()
}

setA.addEventListener('click', () => {
    bg.classList.add('a')
    bg.classList.remove('aa')
    bg.classList.remove('aaa')

})
setA.addEventListener('click', () => {
    l()
})
setA.addEventListener('click', () => {
        end()
    })
    // setA.addEventListener('click', () => {
    //         tr()
    //     })
    // setA.addEventListener('click', () => {
    //     bg.classList.add('a')

// })
// setA.addEventListener('click', () => {
//     bg.classList.add('aa')
//     bg.classList.remove('a')
//     bg.classList.remove('aaa')
// })
// setA.addEventListener('click', () => {
//     bg.classList.add('aaa')
//     bg.classList.remove('aa')
//     bg.classList.remove('a')
// })