// cards=[]
// var i=0;
function toggleBookmark(a) {
  if(window.Storage.user){
    a.children[0].classList.toggle("toggleBookmark");
    // if(cards.includes(a.parentElement.parentElement)){
    //   cards[i] =a.parentElement.parentElement
    //   i=i+1;
    //   console.log(window.Storage.cards);
    // }
  }
  else
    alert('Please login at first!!')
}
var nam = document.getElementById('name')
var clk = false;
function handleClick (e) {
  if(window.Storage.user)
    window.location = `./playlist.html?course=${e.id}`
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