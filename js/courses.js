function toggleBookmark(a) {
  a.classList.toggle("toggleBookmark");
}
var nam = document.getElementById('name')
var clk = false;
function handleClick (e) {
  if(window.Storage.user)
    window.location = `./pages/playlist.html?course=${e.id}`
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