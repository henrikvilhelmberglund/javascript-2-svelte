<script>
	class Pet {
		constructor(name, animalType) {
			this.name = name;
			this.animalType = animalType;
			this.tiredness = 50;
			this.hunger = 50;
			this.loneliness = 50;
			this.happiness = 50;
		}

		createInterval() {
			setInterval(() => {
				console.log("moo");
				this.tiredness += 10;
				this.hunger += 10;
				this.loneliness += 10;
			}, 1000);
		}

		nap() {
			this.tiredness -= 40;
			this.happiness -= 10;
			this.hunger += 10;
			this.loneliness += 10;
			this.checkValues();
		}

		play() {
			if (this.tiredness < 70) {
				this.happiness += 30;
				this.hunger += 20;
				this.tiredness += 20;
				this.loneliness -= 10;
			} else {
				console.log("too tired");
			}
			this.checkValues();
		}

		eat() {
			this.hunger -= 60;
			this.tiredness += 10;
			this.checkValues();
		}

		checkValues() {
			if (this.tiredness >= 100) {
				this.tiredness = 100;
			}
			if (this.hunger >= 100) {
				this.hunger = 100;
			}
			if (this.loneliness >= 100) {
				this.loneliness = 100;
			}
			if (this.happiness >= 100) {
				this.happiness = 100;
			}

			if (this.tiredness < 0) {
				this.tiredness = 0;
			}
			if (this.hunger < 0) {
				this.hunger = 0;
			}
			if (this.loneliness < 0) {
				this.loneliness = 0;
			}
			if (this.happiness < 0) {
				this.happiness = 0;
			}
		}
	}

	let name = "Darkwing Duck";
	let type;
	let types = ["Duck", "Frog", "Fish"];
	let pets = [];
	let pet = {};
	let petHunger;

	$: {
		if (pets[0]) {
			petHunger = pets[0].hunger;
			console.log(petHunger);
		}
	}

	console.log(petHunger);

	function addAnimal() {
		pet = new Pet(name, type);
		pets.push(pet);
		pets = pets;
		return pet;
	}

	let currentState;
</script>

<!-- 
  1. Skapa en klass som du kallar Pet, med egenskaperna  name, animalType, tiredness, hunger, loneliness och happiness. Namn och typ ska definieras när en instans av klassen skapas, övriga värden ska vara 50. Skapa följande tre metoder (ni får justera siffrorna efter behov):
  a. nap - Sänker tiredness med 40, sänker happiness med 10, ökar hunger och loneliness med 10.
  b. play - Ökar happiness med 30, ökar hunger och tiredness med 20. Sänker loneliness med 10. (Extra:Tiredness måste vara under t.ex 70 för att göra detta).
  c. eat - Sänker hunger med 60, ökar tiredness med 10.
  d. OBS! Sätt en maxgräns för samtliga värden, t.ex 100.
-->

<!-- 
  2. Skapa upp följande element i DOM:en med HTML:
  a. En textinput för djurets namn
  b. En dropdown med minst tre olika djur som alternativ
  c. En knapp.
-->

<main class="p-4 [&>*]:p-2">
	<input bind:value={name} class="rounded border" placeholder="Name" type="text" />
	<!-- <label for="type">Select an animal</label> -->
	<select bind:value={type} class="border" name="type" id="type">
		{#each types as type}
			<option value={type.toLowerCase()}>{type}</option>
		{/each}
	</select>
	<button
		on:click={() => {
			let animal = addAnimal();
			animal.createInterval();
		}}
		class="rounded-md bg-emerald-400 p-2 hover:bg-emerald-300">Create animal</button>
</main>

<div class="flex w-96 flex-col p-2">
	{#each pets as pet}
		{#each Object.entries(pet) ?? [] as [key, value]}
			<div class="flex flex-row justify-around gap-4">
				{#if typeof value !== "number"}
					<p>
						{key}:{value}
					</p>
				{:else}
					<p>
						{key}:
					</p>
					<label for={key}>{value}</label>

					<progress class="w-32" id={key} {value} max="100" />
				{/if}
			</div>
		{/each}
		<div class="flex flex-row justify-around gap-4">
			<button
				class="button-class"
				on:click={() => {
					pet.nap();
					pet = pet;
					currentState = `You took a nap with ${pet.name}! ${pet.name} slept well and is less tired now.`;
				}}>Nap</button>
			<button
				class="button-class"
				on:click={() => {
					pet.play();
					pet = pet;
					currentState = `You pet ${pet.name}! ${pet.name} wiggles its tail with happiness.`;
				}}>Play</button>
			<button
				class="button-class"
				on:click={() => {
					pet.eat();
					pet = pet;
					currentState = `You gave ${pet.name} some delicious food! ${pet.name} munched it down instantly.`;
				}}>Eat</button>
		</div>
	{/each}
</div>
{#if currentState}
	<div class="flex flex-row items-center justify-center">
		<p class="py-12 text-xl">{currentState}</p>
	</div>
{/if}
<!--   
  3. När användaren klickar på knappen, ska ett husdjur skapas med namnet man fyllt i samt djurarten man valt. Skapa en div där du skriver ut värden för alla dess egenskaper + knappar för samtliga metoder för husdjuret. (Extra): Använd till fördel <progress>-taggen för att visa ut värden t.ex hunger = 75/100. Du kan läsa om <progress> här: https://www.w3schools.com/TAgs/tag_progress.asp
  -->

<!--    
    4. Man ska kunna skapa flera husdjur.
    5. När man använder en metod, ska det beskrivas i konsolen vad man gör och med vilket djur t.ex. “You played with Maya!” eller “You took a nap with Lexi” etc.  
    6. Lägg till en bild på djuret i div:en baserat på vilken djursort man valt.
    7. Hitta på egen funktionalitet! Din fantasi sätter gränsen :) Sätt t.ex en timer så att för varje 10 sekund, höjs samtliga värden förutom happiness med 10.
-->
<style>
	progress[value]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-green-300 transition-all;
	}

	progress[value]::-webkit-progress-bar {
	}
	.button-class {
		@apply hover-bg-blue-300 rounded-md bg-blue-400 p-2;
	}
</style>
