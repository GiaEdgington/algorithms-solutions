//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) { 
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
};