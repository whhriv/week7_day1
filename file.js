var heightsInInches = [66, 64, 60, 52, 72, 80, 51]

console.log(heightsInInches.map( (heightsToInches) => heightsToInches/=12));

function hTi(nums){
    let feet = nums.map( (nums) => nums/=12)
    console.log(feet)
    
}
hTi(heightsInInches)