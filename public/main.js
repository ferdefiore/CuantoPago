const optionEdificios = document.getElementById('edificio')
const optionUnidad = document.getElementById('unidad')
let edificio = ""
let unidad = ""
let hash = new Map()
//const optionUnidad = document.getElementById('unidad')

const renderItem = (item) => {
    localStorage.setItem(item.Descripcion, JSON.stringify(item))
    var opt = document.createElement('option')
    opt.appendChild(document.createTextNode(item.Descripcion))
    optionUnidad.appendChild(opt)
}

window.onload = () => {
    const consultarBtn = document.getElementById('consultar')
    const resultado = document.getElementById('resultado')

    edificio = optionEdificios.value
    optionEdificios.addEventListener('change', () => {
        edificio = optionEdificios.value
        optionUnidad.innerHTML = ""
        resultado.innerHTML = ""
        fetch(`https://cuantopago.ferdefiore.vercel.app/api/index?ed=${edificio}`).then(res => res.json())
            .then(data => {
                data.map(renderItem)
            })
    })
    consultarBtn.addEventListener('click', () => { 
        resultado.innerHTML = "" 
        var strUnidad = optionUnidad.options[optionUnidad.selectedIndex].text;
        const item = JSON.parse(localStorage.getItem(strUnidad))
        const saldo = item.Saldo
        resultado.innerHTML = `$ ${saldo}`
    })
}