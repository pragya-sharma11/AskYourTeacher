function toggleBookmark(a) {
  a.classList.toggle("toggleBookmark");
}
var nam = document.getElementById('name')
var clk = false;
function handleClick (e) {
  if(nam.innerText=='')
    alert('Please login at first!!')
    else
    window.location = `./pages/playlist.html?course=${e.id}`
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