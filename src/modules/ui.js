import data from "./data"

class UI{
    constructor(){

    }
    selectors=()=>{
        const inputElm   = document.querySelector('.input')
        const clGnBtnElm = document.querySelector('.clGnBtn')
        const bodyElm    = document.querySelector('body')
        return {
            inputElm,clGnBtnElm,bodyElm
        }
    }
    pickedRandomCl=(arr)=>{
        const {inputElm} = ui.selectors()
        const randNum  = Math.floor(Math.random() * arr.length)
        inputElm.setAttribute('value',arr[randNum])
        return arr[randNum]
    }
    init=()=>{
        const {clGnBtnElm,bodyElm} = ui.selectors()
        clGnBtnElm.addEventListener('click',(e)=>{
            bodyElm.style.backgroundColor=ui.pickedRandomCl(data.arr)
        })
    }
}

const ui = new UI()
export default ui






