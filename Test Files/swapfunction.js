function minimumSwaps(arr) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        const currItem = arr[i];
        if (currItem !== i + 1) {
            const index = arr.findIndex(number => number === i + 1);
            arr[i] = arr[index];
            arr[index] = currItem;
            swaps++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i !== (arr[i] - 1))
            minimumSwaps(arr);
    }
    return swaps;
}
