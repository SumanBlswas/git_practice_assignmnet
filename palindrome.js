
let N=121;
let rev=0;
let temp = N;
let rem=0;
  
		
		

		
		while(N>0)
		{
			rem = N%10;
			rev = rev*10+rem;
			N=Math.floor(N/10);
		}
		if(temp==rev)
		{
			console.log("Yes");
		}
		else
		{
			console.log("No");
		}
	