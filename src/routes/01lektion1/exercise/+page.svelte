<script>
	/*
1. Ta emot två arrayer som argument. Returnera en array som endast innehåller värden som finns i en utav arrayerna - dvs om ett värde förekommer i bägge arrayerna, ska det ej returneras.
*/
	let array1 = [1, 2, 3];
	let array2 = [2, 3, 4];

	let notInBothArrays = (a, b) => {
		let notFoundA = a.filter((a) => {
			if (b.indexOf(a) === -1) {
				return a;
			}
		});
		let notFoundB = b.filter((b) => {
			if (a.indexOf(b) === -1) {
				return b;
			}
		});
		return [...notFoundA, ...notFoundB];
	};

	let notInBothArrays2 = (a, b) => {
		let notFoundA = a.filter((a) => !b.includes(a));
		let notFoundB = b.filter((b) => !a.includes(b));
		return [...notFoundA, ...notFoundB];
	};

	// console.log(notInBothArrays2(array1, array2));

	/*
1a. Returnera istället två arrayer - En med de unika värdena, en med värden som förekommer i bägge arrayerna.
*/

	let twoArrays = (a, b) => {
		let notFoundA = a.filter((a) => {
			if (b.indexOf(a) === -1) {
				return a;
			}
		});
		let notFoundB = b.filter((b) => {
			if (a.indexOf(b) === -1) {
				return b;
			}
		});

		let found = [];

		let foundA = a.filter((a) => {
			if (b.indexOf(a) !== -1) {
				return a;
			}
		});

		// return [[...notFoundA, ...notFoundB], [...foundA]];

		return {
			unique: [...notFoundA, ...notFoundB],
			shared: [...foundA],
		};
	};

	// console.log(twoArrays(array1, array2));

	/*
2. Ta emot en sträng som ett argument. Returnera strängen i omvänd ordning.
*/
	let myInput = "hello";

	let reverseString = (input) => {
		let array = [...input];
		return array.reverse().join("");
	};

	// console.log(reverseString(myInput));

	/*
2b. Returnera endast strängen om den inte är ett palindrom. Om den är det, returnera texten “It’s reads the same, dummy!”
*/

	let isPalindrome = (input) => {
		let array = [...input];
		let reversed = array.reverse().join("");
		if (input === reversed) {
			return "It reads the same, dummy!";
		} else {
			return reversed;
		}
	};

	// console.log(isPalindrome(myInput));
	// console.log(isPalindrome("abba"));

	/*
3.
Ta emot en sträng som ett argument. Returnera strängen, men gör nu så att varje nytt ord blir versaler, och övriga bokstäver blir gemener. T.ex myFunction(“HeJ PÅ dig dÄR!”) => “Hej På Dig Där!”.
*/

	let capitalizeStarts = (input) => {
		let split = input.split(" ");
		let result = "";
		split.forEach((word) => {
			[...word].forEach((char, i) => {
				if (i === 0) {
					result += char.toUpperCase();
				} else {
					result += char.toLowerCase();
				}
			});
			result += " ";
		});
		return result;
	};
	let hello = "HeJ PÅ dig dÄR!";
	// console.log(capitalizeStarts(hello));

	/*
4. Blir du färdig med dessa kan du fortsätta utmana dig själv med sektionen “Intermediate Algorithm Scripting” i FreeCodeCamp. 
Länk till första uppgiften: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/

	function sumAll(arr) {
		let arrCopy = [...arr];
		arrCopy.sort((a, b) => {
			return b - a;
		});

		let numbersBetween = arrCopy[0] - arrCopy[1];
		// console.log(numbersBetween);

		let result = 0;

		for (let i = 0; i <= numbersBetween; i++) {
			result += arrCopy[1] + i;
			// console.log(result)
		}
		return result;
	}

	// console.log(sumAll([1, 4]));
	// console.log(sumAll([4, 1]));
	// console.log(sumAll([5, 10]));
	// console.log(sumAll([10, 5]));

	let inputValue = "";
	let capitalizeMe = "";

  console.log(typeof [])
</script>

<main class="m-4">
	<p>
		{notInBothArrays(array1, array2)}
	</p>
	<p>
		Unique: {twoArrays(array1, array2).unique}
		Shared: {twoArrays(array1, array2).shared}
	</p>
	<p>
		{reverseString(myInput)}
	</p>
	<p>
		{isPalindrome(myInput)}
	</p>
	<p>
		{isPalindrome("abba")}
	</p>
	<p>
		{capitalizeStarts(hello)}
	</p>
	<p>{sumAll([1, 4])}</p>
	<p>{sumAll([4, 1])}</p>
	<p>{sumAll([5, 10])}</p>
	<p>{sumAll([10, 5])}</p>
</main>

<div>
	<input bind:value={inputValue} type="text" />
	<p>
		{reverseString(inputValue)}
	</p>
</div>

<div>
	<input bind:value={capitalizeMe} type="text" />
	<p>
		{capitalizeStarts(capitalizeMe)}
	</p>
</div>

<style>
</style>
