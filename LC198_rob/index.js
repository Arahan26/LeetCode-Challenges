function rob(nums) {

  if(nums.length===1) return nums[0];
  if(nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxAmount = [nums[0], Math.max([nums[0], nums[1]])];

  for (let i =2; i<nums.length; i++){
    let higherloot = Math.max(nums[i] + maxAmount[i-2], maxAmount[i-1]);
    //maxAmount.push(Math.max(nums[i] + maxAmount[i-2], maxAmount[i-1]));
    maxAmount[i] = higherloot;
  }

  return maxAmount[maxAmount.length - 1];

}

module.exports = rob;
