var i = Math.floor(Math.random() * 100) + 1; 
var j=i%2; 
if (j==0)
    alert (i +" is Even");
else
    alert (i +" is odd");
for(count=1;count<=10;count++)
{
    let num = prompt ("Please enter your first guess  number:"); 

if (num>i)
    alert("Number is higher than the random number, make another guess");
else if (num<i)
    alert("Number is lower than the random number, make another guess");
else if (num==i)
    alert("You WIN!");
else
    alert("You LOSE!");
}

