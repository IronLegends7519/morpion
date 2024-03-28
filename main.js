const squares = document.querySelectorAll('.squares')
let player = 1
let count = 0
for(let i =0;i<squares.length;i++){
  squares[i].addEventListener('click',()=>{
    if(count === 8){
      squares[i].textContent = 'x'
      setTimeout(()=>{alert('égalité')},500)
      
    }
    else if(squares[i].textContent === ""){

      if(player === 1){
        squares[i].textContent = "x"
        player++
        count++
        }
        else{
          squares[i].textContent = "o"
          player--
          count++
        }

    }
    
  })
}