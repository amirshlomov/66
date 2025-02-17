let word='אבא'

let chooseword=document.getElementById('word')
let text=document.getElementById('container')

function guess(){
    let firstletter= chooseword.value.charAt(0)
    let secondletter= chooseword.value.charAt(1)
    let thirdletter= chooseword.value.charAt(2)

    text.innerHTML += `
    <div style="background-color: ${chack(firstletter,0)}" class="letter">${firstletter}</div>
    <div style="background-color: ${chack(secondletter,1)}" class="letter">${secondletter}</div>
    <div style="background-color: ${chack(thirdletter,2)}" class="letter">${thirdletter}</div>  
`
    // בדיקה אם כל האותיות במקום הנכון
    if (chooseword.value === word) {
        alert('ניצחת! הצלחת לנחש את המילה!');}
}


function chack(letter,index){
    if (word.charAt(index) == letter){
        return 'green'
    }
    if (word.includes(letter)){
        return 'yellow'
    }
    return 'red'
}
