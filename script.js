const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const ans=[]
	let row=[]
	let cSum=0
	arr.forEach((num)=>{
		cSum+=num
		if(cSum<=n){
			row.push(num);
		}else{
			ans.push(row)
			row=[]
			row.push(num)
			cSum=num;
		}
	})

	ans.push(row)
	return ans
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
