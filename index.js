const data = generateDataSet();

console.log(`Data Set: ${data}`);
data.sort((a,b) => a - b);
console.log(`Sorted Data Set: ${data}`);

const mean = findMean(data);
const median = findMedian(data);
const mode = findMode(data);

console.log(`Mean: ${mean}`);
console.log(`Median: ${median}`);
console.log(`Mode${mode.length > 1 ? 's' : ''}: ${mode}`);

function generateDataSet() {
    console.log("Generated random data set.")
    const size = Math.floor(Math.random() * 50) + 1;
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.ceil(Math.random() * 25));
    }
    return array;
}

function findMean(array) {
    return array.reduce((total,value) => total + value) / array.length;
}

function findMedian(array) {
    const middle = array.length / 2;
    return middle % 1 ? array[Math.floor(middle)] : (array[middle - 1] + array[middle]) / 2;
}

function findMode(array) {
    let frequency_map = {};
    let highest_frequency = 0;
    let modes = [];
    
    array.forEach(x => {
        frequency_map[x] = (frequency_map[x] ? frequency_map[x] : 0) + 1;
        if (frequency_map[x] > highest_frequency) 
            highest_frequency = frequency_map[x];
    });
    
    const keys = Object.keys(frequency_map).map(x => {return parseInt(x)});
    const values = Object.values(frequency_map);
    
    modes = keys.filter((x,i) => values[i] === highest_frequency);

    return modes;
}
