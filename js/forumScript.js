
    var ul = document.getElementById('list')
    var input = document.getElementById('input')
    var submit = document.getElementById('sendbtn')
    var count = 0
    var nam = document.getElementById('name')
    var hovers = document.getElementById('hovers')
    var clk = false;
    
    
    submit.onclick=()=>{
        if(window.Storage.user){
            let val = input.value
            console.log(val)
            if(val!=''){
                count++
                let li = document.createElement('li')
                li.innerText = `Question ${count} : ` + val  + "  ( "+ window.Storage.user.displayName+' )'
                ul.appendChild(li)
                input.value=''
            }
            else{
                alert('please enter your question!!')
            }
        }
        else{
            alert("please login first")
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
    
