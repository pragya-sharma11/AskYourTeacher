// var card = document.getElementsByClassName('courses')
// console.log(window.Storage.cards);
// window.localStorage.setItem('array',)
// card.innerHtml+
// window.Storage.cards.array.forEach(element => {
//     card.appendChild(element[0])
// });
var nam = document.getElementById('name')
var hovers = document.getElementById('hovers')
var clk = false;
nam.onclick=()=>{
    if(!clk){
      hovers.style.display = 'inline-block'
      clk = true;
    }else{
      hovers.style.display = 'none'
      clk = false;
    }
}