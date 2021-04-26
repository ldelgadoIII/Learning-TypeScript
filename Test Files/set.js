// var removeDuplicates = function(nums) {
//     let set = new Set(nums)
//     set = [...set];
//     console.log(set);
// };

var removeDuplicates = function(nums) {    
    const newObj = {};
    const result = [];
    
    nums.forEach( num => {
        if(!newObj[num]){
            newObj[num] = true;
            result.push(num);
        } 
    })
    console.log(newObj)
    return result;
};

const answer = removeDuplicates([1,2,2,2,2,2,3]);

console.log(answer);