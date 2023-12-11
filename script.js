const boxes = document.querySelectorAll('.box')
const heading = document.querySelector('.heading span')
const btn = document.querySelector('.btn')

const colours = [
    '#eccb10',
    '#3e89eb',
    '#70c416',
    '#a90a08',
    '#02501b',
    '#210788',
    '#ff4400'
]

const techs = [
    'JS',
    'React',
    'Vue',
    'Angular',
    'Node',
    'Three',
    'Ember'
]

let current = 1

const textStyle = () => {
    heading.style.color = colours[current - 1]
    heading.textContent = techs[current - 1]
    btn.style.backgroundColor = colours[current - 1]
    btn.firstElementChild.textContent = techs[current - 1]
}

let interval = setInterval(() => {
    boxes.forEach((box) => {
        if (current > boxes.length) current = 1

        if (box.classList[1].split('-')[1] * 1 === current) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    })
    textStyle()
    current++
}, 5000)

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        boxes.forEach((cube) => {
            cube.classList.remove('active')
        })
        box.classList.add('active')
        current = box.classList[1].split('-')[1] * 1
        textStyle()
        clearInterval(interval)
    })
})