window.onload=()=>{
    var ul = document.getElementById('list')
    var input = document.getElementById('input')
    var submit = document.getElementById('submitQues')
    var count = 0
    var nam = document.getElementById('name')
    var hovers = document.getElementById('hovers')
    var clk = false;
    
    
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
    nam.onclick=()=>{
        if(!clk){
            hovers.style.display = 'inline-block'
            clk = true;
        }else{
            hovers.style.display = 'none'
            clk = false;
        }
        
    }
    
}