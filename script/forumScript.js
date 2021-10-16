window.onload=()=>{
    var ul = document.getElementById('list')
    var input = document.getElementById('input')
    var submit = document.getElementById('submitQues')
    var count = 0
    
    
    submit.onclick=()=>{
        let val = input.value
        console.log(val)
        if(val!=''){
            count++
            let li = document.createElement('li')
            li.innerText = `Question ${count} : ` + val
            ul.appendChild(li)
            input.value=''
        }
        else{
            alert('please enter your question!!')
        }
    }
}