const canWin= (stoneNum) =>{
    let left=stoneNum;
    if (left < 2){

    }if (stoneNum) {
       left= canWin(stoneNum-2)
       left=  canWin(stoneNum-3)
       left= canWin(stoneNum-5)
    } 

}
}

canWin(1)
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true