<script>
	import { onMount } from "svelte";
	let employeeList = [];

	onMount(() => {
		class Employee {
			constructor(firstName, lastName) {
				this.firstName = firstName;
				this.lastName = lastName;
			}
			changeName() {
				let firstNameInput = document.querySelector("#first-name").value;
				let lastNameInput = document.querySelector("#last-name").value;
				this.firstName = firstNameInput;
				this.lastName = lastNameInput;
				// console.log("ändrar namn:" + JSON.stringify(employeeList));
				renderEmployees();
			}
		}

		class Admin extends Employee {
			// använder samma argument som Employee men eftersom vi inte har fler behövs inte super() eller constructor()
			// constructor(firstName, lastName) {
			// super(firstName, lastName);
			// }

			deleteDb() {
				// ta bort alla employees

        employeeList = [];
        renderEmployees();
			}
		}

		let renderEmployees = () => {
			// visa ut samtliga anställda i DOM
      
			let ul = document.querySelector("#employee-list");
			ul.innerHTML = "";
			employeeList.forEach((employee) => {
        // .constructor 
        console.log(`employee.constructor: ${employee.constructor}`);

				let li = document.createElement("li");
				li.innerText = `${employee.firstName} ${employee.lastName}`;
				// change name-knapp
				let editBtn = document.createElement("button");
				editBtn.innerHTML = `<button class="mx-2 text-white bg-blue-400 hover:bg-blue-300 p-1 rounded-md">ändra namn</button>`;
				// med editBtn.addEventListener("click", employee.changeName);
				// blir this i funktion elementet som triggade event listeners istället för objektet vars button vi klickade på
				editBtn.addEventListener("click", () => employee.changeName());
				li.append(editBtn);

				// delete all-knapp
				if (employee.constructor.name === "Admin") {
					let deleteBtn = document.createElement("button");
					deleteBtn.innerHTML = `<button class="mx-2 text-white bg-red-400 hover:bg-red-300 p-1 rounded-md">ta bort allt</button>`;
					deleteBtn.addEventListener("click", () => {
						employee.deleteDb();
					});
					li.append(deleteBtn);
				}

				ul.append(li);
			});
		};

		let addEmployee = () => {
			// skapa en instans av employee/admin utifrån inputfält
			let firstName = document.querySelector("#first-name").value;
			let lastName = document.querySelector("#last-name").value;

			let admin = document.querySelector("#admin").checked;

			console.log(admin);
			let newEmployee;
			if (!admin) {
        newEmployee = new Employee(firstName, lastName);
			} else {
        newEmployee = new Admin(firstName, lastName);
			}

			// lägg till i array
			employeeList.push(newEmployee);
			employeeList = employeeList;

			console.log(employeeList);

			renderEmployees();
		};

		let addBtn = document.querySelector("#add");
		addBtn.addEventListener("click", addEmployee);
	});
</script>

<main class="p-4 [&>*]:p-1">
	<h1 class="text-5xl">Ankademin AB</h1>
	<h2 class="text-2xl">Lista över anställda</h2>
	<ul class="mx-8 list-disc [&>*]:my-1" id="employee-list" />
	<h2 class="text-2xl">Lägg till anställd</h2>
	<input class="rounded border " placeholder="förnamn" id="first-name" type="text" />
	<input class="rounded border " placeholder="efternamn" id="last-name" type="text" />
	<label for="admin">Admin</label>
	<input type="checkbox" name="admin" id="admin" />
	<button class="m-2 rounded-md bg-blue-400 p-1 text-white" id="add">Lägg till </button>
	<p class="text-4xl">
		<!-- {JSON.stringify(employeeList)} -->
	</p>
</main>

<style>
</style>
