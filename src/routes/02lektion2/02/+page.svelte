<script>
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		greet() {
			console.log(`Hi! My name is ${this.name} and I am ${this.age}`);
			return `Hi! My name is ${this.name} and I am ${this.age}`;
		}
	}

	class Student extends Person {
		// behöver inte vara samma som i Person
		constructor(name, age, grade) {
			// this.name = name;
			// this.age = age;
			super(name, age);
			this.averageGrade = grade;
		}
		greet() {
			let greet = super.greet();
			return `${greet} and a student!`;
		}
    welcome() {
			// let welcome = super.greet();
			return `Welcome to Ankademin! 🦆`;
		}
	}

	class StudentRepresentative extends Student {
		constructor(name, age, grade, tenure) {
			super(name, age, grade);
			this.tenure = tenure;
		}
		greet() {
			let greet = super.greet();
			let welcome = super.welcome();
			return `${greet} ${welcome} By the way, I rule this classroom 😄`;
		}
	}

	class Teacher extends Person {
		constructor(name, age, students) {
			super(name, age);
			this.students = students;
		}
	}

	let person1 = new Person("Matt", 34);
	let student1 = new Student("Nala", 16, 6.7);
	let teacher1 = new Teacher("Batman", 40, 37);
	let studentRep = new StudentRepresentative("Kalle", 35, 9, "6 månader");

  console.log(student1)
</script>

<main class="flex flex-col p-4">
	<p>
		{JSON.stringify(person1)}
	</p>
	<p>
		{JSON.stringify(student1)}
	</p>
	<p>
		{JSON.stringify(teacher1)}
	</p>
  <p>
    {student1.greet()}
  </p>
  <p>
    {student1.welcome()}
  </p>
	<p>
		{JSON.stringify(studentRep)}
	</p>
	{studentRep.greet()}
</main>

<style>
</style>
