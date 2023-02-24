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
    static compareGrades(student1, student2) {
      if(student1.averageGrade>student2.averageGrade) {
        return `${student1.name} has better grades than ${student2.name}`;
      }
      else if (student1.averageGrade<student2.averageGrade) {
        return `${student2.name} has better grades than ${student1.name}`;
      }
    }
	}

  class Student2 extends Person {
    // om man skippar constructor tas allt från parent
    hi() {
      return "Hi! I am a student2!"
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
    feedback(student) {
      if(student.averageGrade<5) {
        return `You need to step it up ${student.name}`
      }
      else {
        return `You're doing good! Keep up the good work ${student.name}!`
      }
    }
	}

	let person1 = new Person("Matt", 34);
	let student1 = new Student("Nala", 16, 6.7);
	let student2 = new Student2("Nala", 16, 3);
	let student3 = new Student("Superman", 16, 3);
	let student4 = new Student("Dio", 16, 9);
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
		{JSON.stringify(student2.hi())}
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
  <p>
    {studentRep.greet()}
  </p>
  <p>
    {teacher1.feedback(student1)}
  </p>
  <p>
    {teacher1.feedback(student3)}
  </p>
  <p>
    <!-- {student1.compareGrades()} fungerar inte pga static -->
    {Student.compareGrades(student1, student3)}
  </p>
  <p>
    {Student.compareGrades(student4, student1)}
  </p>
</main>

<style>
</style>
