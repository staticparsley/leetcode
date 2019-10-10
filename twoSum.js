const twoSum = (nums, target) => {
  
  let existObj = {};
  for ( let i = 0; i < nums.length; i++ ) {
    if ( existObj[target-nums[i]] > -1) return [existObj[target-nums[i]], i];
      existObj[nums[i]] = i;
    }
  }


console.log(twoSum([2,7,11,15],9);
