let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(){
  customersArray.forEach( el => {
    if(typeof el !== "string") {
      console.log(`Type error: ${el} should be a string!`)
    }
  })
}

checkCustomersArray();