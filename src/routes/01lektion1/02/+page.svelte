<script>
	// en instans av array-objekt
	let myArray = [1, 2, 3, 4, 5];

	// är egentligen
	// let myArray = new Array(1, 2, 3, 4, 5);

	// skapa en spelvärld
	let population = 0;

	class Person {
		constructor(inputName, inputAge) {
			this.name = inputName ?? "default";
			this.age = inputAge ?? 20;
      this.id = population;
			// Varje gång vi skapar en person ökar population med 1
			population++;
		}
		greet() {
			console.log(`Hi my name is ${this.name}`);
			console.log(`Population is ${population}`);
		}
	}

	let myDefault = new Person();
	console.log(myDefault);
	myDefault.greet();

	let myTeacher = new Person("Brandon", 28);
	console.log(myTeacher);
	myTeacher.greet();

	let mySister = new Person("Emma", 33);
	console.log(mySister);
	mySister.greet();

	let person = {
		name: "Harvey",
		age: 20,
		greet: () => {
			console.log("Hi, I'm Harvey!");
			// return "Hi, I'm Harvey!"
		},
	};

	let person2 = {
		name: "Oliver",
		age: 17,
		greet: () => {
			console.log("Sup, I'm Oliver!");
		},
	};

  console.log(window);

	// person.greet();
	// console.log(person.greet());

	// Prototyp!
	// console.log(Array.prototype);
</script>

<style>
</style>
