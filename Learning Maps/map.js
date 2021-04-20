function processData(input) {
    //Enter your code here
    const arr = []
    const length = input.split("\n")[0]
    const dictionary = {}
    const queryLength = Number(length) + 1;
    const query = input.split("\n").slice(queryLength)
    
    input.split("\n").slice(1).map( input => {
        arr.push(input.split(" "))
    })
    
    for(let i =0; i < length; i++) {
        dictionary[arr[i][0]] = arr[i][1]
    }
    
    query.forEach( name => {
        if(dictionary[name]) {
            console.log(`${name}=${dictionary[name]}`)
        } else {
            console.log("Not found")
        }
    })

} 