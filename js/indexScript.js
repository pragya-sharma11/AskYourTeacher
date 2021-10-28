var start = document.getElementById('start')
var nam = document.getElementById('name')
var hover = document.getElementById('hovers')
var clk = false;
function handleClick(e){
    if(window.Storage.user)
    window.location = `./pages/playlist.html?course=${e.id}`
    else
    alert('Please login at first!!')
}

start.onclick=()=>{
    if(window.Storage.user)
    window.location = `./pages/courses.html`
    else
    alert('Please login at first!!')
    
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

