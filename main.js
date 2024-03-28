const squares = document.querySelectorAll('.squares')
let player = 1
let count = 0
let T = [[0,0,0],[0,0,0],[0,0,0]]
for(let i =0;i<squares.length;i++){
  squares[i].addEventListener('click',()=>{
    if(count === 8){
      squares[i].textContent = 'x'
      T[i%3][Math.floor(i/3)] = player
      victoire ()
      setTimeout(()=>{alert('égalité')},500)
      
    }
    else if(squares[i].textContent === ""){

      if(player === 1){
        squares[i].textContent = "x"
        T[i%3][Math.floor(i/3)] = player
        player++
        count++
        victoire ()
        }
        else{
          squares[i].textContent = "o"
          T[i%3][Math.floor(i/3)] = player
          player = 1
          count++
          victoire ()
        }
    }
    
  })
  function victoire (){
    if(T[0][0] * T[0][1] *T[0][2] === 1 || T[1][0] * T[1][1] *T[1][2] === 1||T[2][0] * T[2][1] *T[2][2] === 1){
      setTimeout(()=>{alert('victoire player 1')},100)
    }
    else if(T[0][0] * T[0][1] *T[0][2] === 8 || T[1][0] * T[1][1] *T[1][2] === 8||T[2][0] * T[2][1] *T[2][2] === 8){
      setTimeout(()=>{alert('victoire player 2')},100)
    }
    else if(T[0][0] * T[1][0] *T[2][0] === 1 || T[0][1] * T[1][1] *T[2][1] === 1||T[0][2] * T[1][2] *T[2][2] === 1){
      setTimeout(()=>{alert('victoire player 1')},100)
    }
    else if(T[0][0] * T[1][0] *T[2][0] === 8 || T[0][1] * T[1][1] *T[2][1] === 8||T[0][2] * T[1][2] *T[2][2] === 8){
      setTimeout(()=>{alert('victoire player 2')},100)
  }
  else if(T[0][0] * T[1][1] *T[2][2] === 1 || T[2][0] * T[1][1] *T[0][2] === 1){
    setTimeout(()=>{alert('victoire player 1')},100)
  }
  else if(T[0][0] * T[1][1] *T[2][2] === 8 || T[2][0] * T[1][1] *T[0][2] === 8){
    setTimeout(()=>{alert('victoire player 2')},100)
}
}}