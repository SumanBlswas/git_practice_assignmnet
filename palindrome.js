
let N=121;
  
		var rem, final = 0;
		

		temp = N;
		while(N>0)
		{
			rem = N%10;
			num = parchuInt(N/10);
			final = final*10+rem;
		}
		if(final!=temp)
		{
			console.log("Yes");
		}
		else
		{
			console.log("No");
		}
	