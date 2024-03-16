
//1. variables
const cajaInfo = document.querySelector('#cajaInfo')
const textCurso = document.querySelector('#text-curso')
const textSofware = document.querySelector('#text-software')
const textdescripcion = document.querySelector('#text-descripcion')
const formCourse = document.querySelector('#formCourse')
const inputCurso = document.querySelector('#inputCurso')
const inputSoftware = document.querySelector('#inputSoftware')
const inputDescripcion = document.querySelector('#inputDescripcion')
const imgMin = document.querySelector('#imgMin')

//2. funciones

function actualizarCurso(e){
    e.preventDefault()
    textCurso.innerText = inputCurso.value
    textSofware.innerText = inputSoftware.value
    textdescripcion.innerText = inputDescripcion.value

    this.reset()
}

function cambiarFondo (e){
    cajaInfo.style.backgroundImage = `url(${e.target.src})`
}

//3. eventos
formCourse.addEventListener('submit',actualizarCurso)
imgMin.addEventListener('click',cambiarFondo)