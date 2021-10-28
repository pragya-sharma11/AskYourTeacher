window.Storage.cards=[]
function toggleBookmark(a) {
  if(window.Storage.user){
    a.children[0].classList.toggle("toggleBookmark");
    cards[0] =a.parent.children[0]
  }
  else
    alert('Please login at first!!')

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