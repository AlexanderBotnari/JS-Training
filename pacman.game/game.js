let pac_x = parseInt(1 + Math.random() * 9)
let pac_y = parseInt(1 + Math.random() * 9)

let coin_x = parseInt(1 + Math.random() * 9) 
let coin_y = parseInt(1 + Math.random() * 9)

let bomb_x = parseInt(1 + Math.random() * 9) 
let bomb_y = parseInt(1 + Math.random() * 9)

let score  = 0
let health = 100

function action(){

    if(pac_x >= 1 && pac_x <= 10 && pac_y >= 1 && pac_y <=10){
  
    switch(event.key){
        case "ArrowUp"    : pac_y-- ;break 
        case "ArrowDown"  : pac_y++ ; break 
        case "ArrowLeft"  : pac_x-- ; break 
        case "ArrowRight" : pac_x++ ; break  
        }
    
        if(pac_x == coin_x & pac_y == coin_y){
            score += 10
        }else if(pac_x == bomb_x & pac_y == bomb_y){
            health -= 20
            if(health <= 0){
                document.write(`<img src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-05-29-11-37/five-of-the-best-game-over-screens-1590748640300.jpg/EG11/resize/1200x-1/five-of-the-best-game-over-screens-1590748640300.jpg">`)
            }
        }
    }else{
            pac_x = 1
            pac_y = 1 
            health -= 10
         }
     renderMap() 
}

function renderMap(){
    gameMap.innerHTML = ``
    for( let y=1; y <= 10; y++){
        for(let x=1 ; x <= 10 ; x++){
            if(x == pac_x && y == pac_y){
                gameMap.innerHTML += `<div class="pac"></div>`
            }else if(x == coin_x && y == coin_y){
                gameMap.innerHTML += `<div class="coin"></div>`
            }else if(x == bomb_x && y == bomb_y){
                gameMap.innerHTML += `<div class="bomb"></div>`
            }else{
                gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `Score :${score}`
    hpPoints.innerHTML = `Health : ${health}`
}

renderMap()
