function minimumSwaps(arr: number[]):number {
    let swaps: number = 0;

    for(let i = 0; i < arr.length; i++){
        const currItem: number = arr[i];
        
        if(currItem !== i+1){
            const index: number = arr.findIndex( number => number === i+1);
            
            arr[i] = arr[index];
            arr[index] = currItem;
            swaps++;
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(i !== (arr[i] - 1)) minimumSwaps(arr);
    }
    
    return swaps;

}