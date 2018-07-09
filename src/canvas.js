// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C6', '#7ECEFD', '#86ED86', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Ball(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Object.prototype.update = function() {
    this.draw(mouse)
}

Object.prototype.draw = function(mouse) {
    c.beginPath()
    c.strokeStyle = this.color
	c.arc(mouse.x,mouse.y, this.radius,0,2*Math.PI)
	c.stroke()
    c.closePath()
}

// Implementation
let balls

function init() {
	c.font = '50px Georgia'
    const radius = (Math.random() * 4) + 1
    ball = new Ball(canvas.width/2, canvas.height/2, radius, randomColor(colors))
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    // c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'white'
    c.rect(0,0,canvas.width,canvas.height)
    c.fill()
    c.fillStyle = randomColor(colors)
    c.fillText('+', mouse.x, mouse.y)
    
    ball.update()
}

init()
animate()