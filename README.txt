let fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

MyPassword => P  b  S  d  v  v  z  r  u  g
	      0  1  2  3  4  5  6  7  8  9	

	          g r v d b P S v z u 
		  0 1 2 3 4 5 6 7 8 9

		Since we have 10 elements here, 10 % 2 == 0, meaning that it is an even length. Which means that 
		5 elements were pushed and 5 elements were unshifted. Last one whose index is 9 is obviously going 
		to be unshifted.
		So what we can do to decrypt the message is that first we gotta determine if the array.length is odd/even.
		if it is even, then we start taking a letter from the left side. Otherwise, we start by taking
		a letter from right side. 
		        PbSdvvzrug
			
		  

So I am going to write how the algorithm works. Basically, we have a function with two parameters: 1st being the message that has to be encrypted,
2nd being the key with which the message has to be encrypted. So that means even if you enter the same message with different key,
you will get a different result.

1. In the first step, each of the letters in the message is going to be calculated according to their index in the  alphabet. 
In other words, if I have 'a' character and key with the value of 3 in the message, it will be converted to 'd'. 
What is happening here is that the index of the letter is being increased by the key (3), and letter with the increased
index in the alphabet is found. By the way, the letters in the message stay the same case, whether they are uppercase/lowercase.

2. In the last step, we are creating new array and adding those letters based on their case and index.
if the letter is uppercase and has even index, it will be added to the new Array using push() method.
if the letter is uppercase and has odd index, it will be added to the new Array using unshift() method.



if the letter is lowercase and ahs 