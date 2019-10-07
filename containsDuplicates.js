const containsDuplicate = function(nums) {
    let stuff = {};
    if(nums.length < 2) return false;
    
    for(let i = 0; i < nums.length; i++) {
        if(stuff[nums[i]]){
            return true;
        }
        stuff[nums[i]] = 1;
    }
    return false;
};

containsDuplicate([1,2,3,1]);
