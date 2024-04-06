
let nums = [1,2,3,4,5,6,7,8,9,10]
 // iteration using loop

for (let i=0; i<nums.length;i++) {
    console.log(nums[i]**2)
}
//iteration  for each
nums.forEach((i) => {
    console.log(i**2)
})

//iteration using map
let square = nums.map((x) => x**2)
console.log(square);


//filter finction

let evenNum = []
for (let i=0; i<nums.length; i++){
    if(i%2==0){
        evenNum.push(i)
    }
}
console.log(evenNum)

let even = nums.filter((x) => x%2 == 0 )
console.log(even)

let odd = nums.filter((x) => x%2!==0 )
console.log(odd)

console.log('------------')

let color =['red','green','black','purple', 'white', 'pink'];
for (let i=0; i<color.length; i++ ){
    if(color[i].length>4){
        console.log(color[i]);
    }
}

console.log('---------------------------')
console.log('                 ')

const longColorNames = color.filter(colorName => colorName.length > 4);
console.log(longColorNames);















