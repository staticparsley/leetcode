const countUniqueValues = (nums) => {
    let uniqueCount = 0;

    if(nums.length < 1) return uniqueCount;
    if(nums.length === 1) return uniqueCount;

    for(let i = 0; i < nums.length; i++) {
        let j = i+1;
        if(nums[j] != nums[i]) {
            uniqueCount += 1;
        }
    }
    return uniqueCount;
}

console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]));