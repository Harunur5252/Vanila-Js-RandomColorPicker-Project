import data_2 from "./data_2"

class UITwo{
    constructor(){

    }
    selectorsTwo=()=>{
        const inputElmTwo   = document.querySelector('.input')
        const clGnBtnElmTwo = document.querySelector('.clGnBtn')
        const bodyElmTwo    = document.querySelector('body')
        return {
            inputElmTwo,clGnBtnElmTwo,bodyElmTwo
        }
    }
    pickedRandomClTwo=(arr)=>{
        const {inputElmTwo} = ui_2.selectorsTwo()
        const randNumTwo  = Math.floor(Math.random() * arr.length)
        inputElmTwo.setAttribute('value',arr[randNumTwo])
        return arr[randNumTwo]
    }
    initTwo=()=>{
        const {clGnBtnElmTwo,bodyElmTwo} = ui_2.selectorsTwo()
        clGnBtnElmTwo.addEventListener('click',(e)=>{
            bodyElmTwo.style.backgroundColor=ui_2.pickedRandomClTwo(data_2.arr_2)
        })
    }
}

const ui_2 = new UITwo()
export default ui_2






