<script>
	import { base } from "$app/paths";

	class Pet {
		constructor(name, animalType) {
			this.name = name;
			this.animalType = animalType;
			this.tiredness = 50;
			this.hunger = 50;
			this.loneliness = 50;
			this.happiness = 50;
			this.state = "idle";
		}

		startStateInterval() {
			this.continuousStateInterval = setInterval(() => {
				this.setActiveState();
				activePet = activePet;
			}, updateDelay);
		}

		startStatUpdateInterval() {
			this.continuousStatUpdateInterval = setInterval(() => {
				this.tiredness += 10;
				this.hunger += 10;
				this.loneliness += 10;
				this.checkValues();
				activePet = activePet;
				console.log("line 29");
			}, statDelay);
		}

		nap() {
			if (this.tiredness < 30) {
				currentState = `${this.name} is too energetic to sleep!`;
				return false;
			}
			this.tiredness -= 40;
			this.happiness -= 10;
			this.hunger += 10;
			this.loneliness += 10;
			this.checkValues();
			this.state = "nap";
			currentState = `You took a nap with ${this.name}! ${this.name} slept well and is less tired now.`;
		}

		play() {
			if (this.tiredness > 70) {
				currentState = `${this.name} is too tired to play right now!`;
				return false;
			}
			this.happiness += 30;
			this.hunger += 20;
			this.tiredness += 20;
			this.loneliness -= 40;

			this.checkValues();
			this.state = "play";
			currentState = `You pet ${this.name}! ${this.name} wiggles its tail with happiness.`;
		}

		eat() {
			if (this.hunger < 40) {
				currentState = `${this.name} is already full!`;
				return false;
			}
			this.hunger -= 60;
			this.tiredness += 10;
			this.checkValues();
			this.state = "eat";
			currentState = `You gave ${this.name} some delicious food! ${this.name} munched it down instantly.`;
		}

		setActiveState() {
			if (this.hunger === this.loneliness && this.hunger === this.tiredness) {
				this.state = "idle";
				currentState = `${this.name} is feeling very average.`;
			} else if (
				this.happiness >= this.hunger &&
				this.happiness >= this.loneliness &&
				this.happiness >= this.tiredness
			) {
				this.state = "happy";
				currentState = `${this.name} is happy! Good job!`;
			} else if (
				this.tiredness >= this.hunger &&
				this.tiredness >= this.loneliness &&
				this.tiredness > this.happiness
			) {
				this.state = "tired";
				currentState = `${this.name} is trying hard not to fall asleep!`;
			} else if (
				this.hunger > this.tiredness &&
				this.hunger >= this.loneliness &&
				this.hunger >= this.happiness
			) {
				this.state = "hungry";
				currentState = `${this.name}'s stomach is making a strange sound!`;
			} else if (
				this.loneliness > this.hunger &&
				this.loneliness > this.tiredness &&
				this.loneliness > this.happiness
			) {
				this.state = "lonely";
				currentState = `${this.name} is looking at you with a sad face!`;
			}
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

	$: name =
		type === "duck"
			? "Darkwing Duck"
			: type === "frog"
			? "Froggy the Frog"
			: type === "fish"
			? "Fishi"
			: "";
	let type;
	let types = ["Duck", "Frog", "Fish"];
	let pets = [];
	let currentState;
	let possibleActions = ["nap", "play", "eat"];
	let activePet = {};
	let updateDelay = 1000;
	let statDelay = 10000;

	function addPet() {
		pets.forEach((pet) => {
			clearInterval(pet.continuousStateInterval);
			clearInterval(pet.continuousStatUpdateInterval);
		});
		let pet = new Pet(name, type);
		pets.push(pet);
		pets = pets;

		pet.startStateInterval();
		pet.startStatUpdateInterval();
		console.log("line 166");
		// console.log(pet.continuousStatUpdateInterval);
		// activePet = pet;

		return pet;
	}

	function cap(s) {
		return s ? s[0].toUpperCase() + s.slice(1) : "";
	}

	function setActivePet(clickedPet) {
		pets.forEach((pet) => {
			clearInterval(pet.continuousStateInterval);
			clearInterval(pet.continuousStatUpdateInterval);
		});
		activePet = clickedPet;
		activePet.startStateInterval();
		activePet.startStatUpdateInterval();
		console.log("line 184");
	}
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

<main class="flex flex-col items-center  justify-center p-4 [&>*]:p-2">
	<div class="flex-row rounded-lg bg-white [&>*]:mx-1 [&>*]:p-1">
		<input bind:value={name} class="rounded border" placeholder="Name" type="text" />
		<!-- <label for="type">Select an animal</label> -->
		<select bind:value={type} class="border" name="type" id="type">
			{#each types as type, i}
				<option value={type.toLowerCase()} selected={i === 0 ? "selected" : ""}>{type}</option>
			{/each}
		</select>
		<button
			on:click={() => {
				activePet = addPet();
				activePet = activePet;
			}}
			class="rounded-md bg-emerald-400 p-2 hover:bg-emerald-300">Create animal</button>
	</div>

	<div
		class="pointer-events-none fixed bottom-56 left-0 z-[-1] flex h-[100%] w-[100%] items-center justify-center">
		<header class="pointer-events-initial flex flex-row gap-4 pb-4">
			{#each pets || [] as pet, i}
				<label
					class:bg-pink-300={activePet === pet}
					class:bg-slate-300={activePet !== pet}
					class="cursor-pointer rounded-md p-1"
					for="{pet.animalType}-{i}">{pet.name}</label>
				<input
					on:click={() => setActivePet(pet)}
					class="hidden"
					type="radio"
					name="pets"
					id="{pet.animalType}-{i}" />
			{/each}
		</header>
		{#if activePet.animalType}
			<div class="border-1 flex w-72 flex-col gap-2 rounded-md border-solid border-black bg-white">
				{#each Object.entries(activePet) as [key, value]}
					{#if typeof value === "number" && key !== "continuousStateInterval" && key !== "continuousStatUpdateInterval"}
						<div class="flex-row justify-end gap-2">
							<p>
								{key}:
							</p>
							<label for={key}>{value}</label>

							{#if key === "happiness"}
								<progress
									class:good={key === "happiness"}
									class="w-32 self-center"
									id={key}
									{value}
									max="100" />
							{:else}
								<progress
									class:bad={key !== "happiness"}
									class="w-32 self-center"
									id={key}
									{value}
									max="100" />
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		{/if}

		{#key activePet.state}
			{#if activePet.animalType}
				<div
					class="pointer-events-none fixed top-0 left-0 z-[-1] flex h-[100%] w-[100%] items-center justify-center">
					<img
						class="absolute ml-auto mr-auto "
						src="{base}/images/tamagocchi_{activePet.animalType.toLowerCase()}.png"
						alt="" />

					<img
						class="absolute z-[1] mix-blend-overlay"
						src="{base}/images/{activePet.animalType.toLowerCase()}_{activePet.state}.gif"
						width="256"
						height="256"
						alt="" />
				</div>
			{/if}
		{/key}
	</div>
	<!-- three buttons -->
	{#if activePet.animalType}
		<div
			class="pointer-events-none fixed -bottom-64 left-0 z-[100] flex h-[100%] w-[100%] flex-row items-center justify-center gap-20 text-2xl">
			{#each possibleActions as action, i}
				<div class:!mt-30={i === 1} class="pointer-events-initial my-10">
					<button
						class="button-class"
						on:click={() => {
							clearInterval(activePet.continuousStateInterval);
							activePet[action]();
							activePet = activePet;
							setTimeout(() => {
								activePet.startStateInterval();
								console.log("line 300");
							}, 4000);
						}}>{cap(action)}</button>
				</div>
			{/each}
		</div>
	{/if}
</main>

{#if currentState}
	<div
		class="top-50 pointer-events-none fixed left-0 z-[-1] flex h-[100%] w-[100%] items-center justify-center">
		<p class="pointer-events-initial border-1 rounded-xl border border-black bg-white p-2 text-xl">
			{currentState}
		</p>
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
	::-webkit-progress-bar {
		/* ... */
	}

	::-webkit-progress-value {
		/* ... */
	}

	.bad::-webkit-progress-value {
		/* @apply bg-gradient-to-r from-red-500 to-red-300 transition-all; */
		@apply bg-indigo-700 transition-all;
	}

	.good::-webkit-progress-value {
		@apply transition-all;
		filter: hue-rotate(calc(70deg * 2));
	}
	progress[value="0"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-green-500;
	}
	progress[value="10"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-red-500;
		/* filter: hue-rotate(calc(10deg * 1)); */
	}
	progress[value="20"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-green-500;
		/* filter: hue-rotate(calc(10deg * 2)); */
	}
	progress[value="30"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-green-500;
		/* filter: hue-rotate(calc(10deg * 3)); */
	}
	progress[value="40"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-green-500;
		/* filter: hue-rotate(calc(10deg * 4)); */
	}
	progress[value="50"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-orange-500;
		/* filter: hue-rotate(calc(10deg * 5)); */
	}
	progress[value="60"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-orange-500;
		/* filter: hue-rotate(calc(10deg * 6)); */
	}
	progress[value="70"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-orange-500;
		/* filter: hue-rotate(calc(10deg * 7)); */
	}
	progress[value="80"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-red-500;
		/* filter: hue-rotate(calc(10deg * 8)); */
	}
	progress[value="90"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-red-500;
		/* filter: hue-rotate(calc(10deg * 9)); */
	}
	progress[value="100"]::-webkit-progress-value {
		@apply bg-gradient-to-r from-green-500 to-red-500;
		/* filter: hue-rotate(calc(10deg * 10)); */
	}

	progress[value]::-webkit-progress-bar {
	}
	.button-class {
		@apply hover-bg-blue-300 z-200 rounded-full bg-blue-400 p-2;
	}

	img {
		max-width: 300%;
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: pixelated;
		image-rendering: optimize-contrast;
		-ms-interpolation-mode: nearest-neighbor;
	}
</style>
