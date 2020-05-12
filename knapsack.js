
const takeItems = (items, weightLimit) => {

    const weights = [0]
    const values = [0]
    const totalAmountOfitems = items.length

    items.forEach(item => {
        weights.push(item.weight)
        values.push(item.value)  
    })

    const hashstore = [
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined]
    ];    
    
    const knapsack = (totalAmountOfitems, weightLimit, weights, values) => {
        let maxValue;              

        if(hashstore[totalAmountOfitems][weightLimit] !== undefined) {
            return hashstore[totalAmountOfitems][weightLimit];
        }
    
        if(totalAmountOfitems === 0 || weightLimit === 0) {
            maxValue = 0
        } else if(weights[totalAmountOfitems] > weightLimit) {      
            maxValue = knapsack(totalAmountOfitems - 1, weightLimit, weights, values)
        } else {            
            const dontPutInKnapsack = knapsack(totalAmountOfitems - 1, weightLimit, weights, values)
            const putInSack = values[totalAmountOfitems] + knapsack(totalAmountOfitems - 1, weightLimit - weights[totalAmountOfitems], weights, values)
            maxValue = Math.max(dontPutInKnapsack, putInSack)
        }
       
        hashstore[totalAmountOfitems][weightLimit] = maxValue
        return maxValue    
    }
    

    knapsack(totalAmountOfitems, weightLimit, weights, values)

    let i = totalAmountOfitems
    let j = weightLimit
    const selectedItems = []
    
    const getSelectedItems = (i, j) => {        

        if (i == 0) {
            return selectedItems
        }            
        if ( (knapsack(i, j, weights, values)) > (knapsack(i-1, j, weights, values )) ) {
            selectedItems.push(i)
            getSelectedItems(i-1, j - weights[i])
        } else {
            getSelectedItems(i-1, j)
        }
        return selectedItems    
    }

    return getSelectedItems(i, j)    
} 

console.log(takeItems(items, weightLimit))