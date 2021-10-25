var start = document.getElementById('start')
var nam = document.getElementById('name')
var hover = document.getElementById('hovers')
var clk = false;
function handleClick(e){
    if(nam.innerText=='')
    alert('Please login at first!!')
    else
    window.location = `./pages/playlist.html?course=${e.id}`
}

start.onclick=()=>{
    if(nam.innerText=='')
    alert('Please login at first!!')
    else
    window.location = `./pages/courses.html`
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

