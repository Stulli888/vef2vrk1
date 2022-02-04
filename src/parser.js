export function parse(input) {
  const nums = input.split("\n");
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].trim();
    if (!isNaN(nums[i]) && nums[i] !== '') {
      res.push(nums[i]);
    }
  }
  return res;
}
