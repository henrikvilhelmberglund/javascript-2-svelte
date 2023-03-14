<script>
	/*
Polka lover
Gör en funktion vid namn letsDance(danceStyle)som bygger på ett Promise. Funktionen ska ta ett argument danceStyle. Om dansen som erbjuds är polka ska dansen godkännas med frasen Yes, polka is my thing!. Om Dansstilen som erbjuds är något annat så ska dansförfrågan rejectas med en syrlig diss. Funktionen ska ta 2s på sig att svara.
letsDance('waltz')
.then(resp => console.log(response)) // ...
.catch(diss => console.log(diss)) // Not even if a pandemic roamed the earth
Använd setTimeout för att fördröja funktionerna. Testa med fördel både .then() och async/await.
*/

	import { fly } from "svelte/transition";

	const letsDance = async (danceStyle) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (danceStyle === "polka") {
					resolve("Yes, polka is my thing!");
				} else {
					reject("Not even if a pandemic roamed the earth.");
				}
			}, 2000);
		});
	};

	async function printDanceAlt() {
		await letsDance("polka")
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
		await letsDance("notpolka")
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	async function printDance() {
		try {
			let result = await letsDance("polka");
			console.log(result);
			let result2 = await letsDance("notpolka");
			console.log(result2);
		} catch (error) {
			console.log(error);
		}
	}

	let megaDance = ["polka", "notpolka", "polka"];

	async function printDanceMega() {
		try {
			let promises = megaDance.map((dance) => letsDance(dance));

			//Kastar error om ett promise blir rejected
			// let results = await Promise.all(promises);
			// console.log(results);

			//Returnerar rejectade och resolvade promises
			let results2 = await Promise.allSettled(promises);
			console.log(results2);
		} catch (error) {
			console.log(error);
		}
	}

	// printDance();
	// printDanceAlt();
	// printDanceMega();

	/*
Webbprojektet
Du ska göra ett webbprojekt. Gör en promise kedja för detta projekts moment i följande ordning med följande tider:
Researcha målgruppen - 4s
Skissa upp en design på papper - 2s
Gör skissen till pixel perfect mockup I Figma / XD 	- 3s
Koda - 3s
Stackoverflow:a fel - 1s
Testa produkten - 2s
Fira lyckat projekt - 1s
Använd setTimeout för att fördröja funktionerna. Testa med fördel både .then() och async/await.
*/

	let start = [false, false, false, false, false, false, false];
	let thingsToDo = [];

	const research = () => {
		return new Promise((res, rej) => {
			console.log("Researching audience...");
			thingsToDo.push("Researching audience...");
			let flawlessResearch = true;
			setTimeout(() => {
				if (flawlessResearch) {
					res("Research was successfully completed!");
					thingsToDo.push("Research was successfully completed!");
				} else {
					thingsToDo.push("Something went wrong with the research, abort, abort!");
					rej("Something went wrong with the research, abort, abort!");
				}
			}, 4000);
		});
	};

	const wireframe = () => {
		return new Promise((res, rej) => {
			console.log("Drawing a wireframe on paper...");
			thingsToDo.push("Drawing a wireframe on paper...");
			let flawlessDrawing = true;
			setTimeout(() => {
				if (flawlessDrawing) {
					res("The wireframe is complete and beautiful!");
					thingsToDo.push("The wireframe is complete and beautiful!");
				} else {
					rej("The wireframe looks like crap, abort, abort!");
					thingsToDo.push("The wireframe looks like crap, abort, abort!");
				}
			}, 2000);
		});
	};

	const figma = () => {
		return new Promise((res, rej) => {
			console.log("Making a mockup in Figma...");
			thingsToDo.push("Making a mockup in Figma...");
			let flawlessDesign = true;
			setTimeout(() => {
				if (flawlessDesign) {
					res("The mockup is complete and looking awesome!");
					thingsToDo.push("The mockup is complete and looking awesome!");
				} else {
					rej("Figma is impossible to use again, abort, abort!");
					thingsToDo.push("Figma is impossible to use again, abort, abort!");
				}
			}, 3000);
		});
	};

	const code = () => {
		return new Promise((res, rej) => {
			console.log("Coding everything...");
			thingsToDo.push("Coding everything...");
			let flawlessCode = true;
			setTimeout(() => {
				if (flawlessCode) {
					res("The code is perfect without any bugs!");
					thingsToDo.push("The code is perfect without any bugs!");
				} else {
					rej("The code is a tangled mess of spaghetti, abort, abort!");
					thingsToDo.push("The code is a tangled mess of spaghetti, abort, abort!");
				}
			}, 3000);
		});
	};

	const stackoverflow = () => {
		return new Promise((res, rej) => {
			console.log("Googling trying to solve some strange issue using stackoverflow...");
			thingsToDo.push("Googling trying to solve some strange issue using stackoverflow...");
			let flawlessGoogling = true;
			setTimeout(() => {
				if (flawlessGoogling) {
					res("Great googling, found an answer instantly!");
					thingsToDo.push("Great googling, found an answer instantly!");
				} else {
					rej("Stackoverflow is filled with chatGPT nonsense code, abort, abort!");
					thingsToDo.push("Stackoverflow is filled with chatGPT nonsense code, abort, abort!");
				}
			}, 1000);
		});
	};

	const test = () => {
		return new Promise((res, rej) => {
			console.log("Testing and checking for bugs...");
			thingsToDo.push("Testing and checking for bugs...");
			let flawlessTesting = true;
			setTimeout(() => {
				if (flawlessTesting) {
					res("The tests were completed successfully! We're ready to go baby!");
					thingsToDo.push("The tests were completed successfully! We're ready to go baby!");
				} else {
					rej("Tests were unsuccessful, need to do more googling, abort, abort!");
					thingsToDo.push("Tests were unsuccessful, need to do more googling, abort, abort!");
				}
			}, 2000);
		});
	};

	const celebrate = () => {
		return new Promise((res, rej) => {
			console.log("Celebrating...");
			thingsToDo.push("Celebrating...");
			let flawlessCelebration = true;
			setTimeout(() => {
				if (flawlessCelebration) {
					res("You drank a perfect amount of alcohol and had a great time!");
					thingsToDo.push("You drank a perfect amount of alcohol and had a great time!");
				} else {
					rej("You had way too much to drink and you're gonna get a mega hangover, abort, abort!");
					thingsToDo.push(
						"You had way too much to drink and you're gonna get a mega hangover, abort, abort!"
					);
				}
			}, 3000);
		});
	};

	const makeWebProject = async () => {
		try {
			let result;
			result = await research();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await wireframe();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await figma();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await code();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await stackoverflow();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await test();
			thingsToDo = thingsToDo;
			console.log(result);
			result = await celebrate();
			thingsToDo = thingsToDo;
			console.log(result);
			thingsToDo = thingsToDo;
		} catch (error) {
			console.log(`Something went wrong! ${error}`);
		}
	};

	const makeWebProject2 = async () => {
		try {
			const results = await Promise.all([
				research(),
				wireframe(),
				figma(),
				code(),
				stackoverflow(),
				test(),
				celebrate(),
			]);
			console.log(results);
		} catch (error) {
			console.log(`Something went wrong! ${error}`);
		}
	};

	const makeWebProject3 = async () => {
		try {
			const results = await Promise.allSettled([
				research(),
				wireframe(),
				figma(),
				code(),
				stackoverflow(),
				test(),
				celebrate(),
			]);
			console.log(results);
		} catch (error) {
			console.log(`Something went wrong! ${error}`);
		}
	};

	makeWebProject();
	// makeWebProject2();
	// makeWebProject3();
</script>

<div class="flex flex-col items-start [&>*]:text-lg">
  {#each thingsToDo as thing}
	{#key thing}
		<p transition:fly={{ y: 50 }}>
			{thing}
		</p>
    {/key}
    {/each}
  </div>
    
<style>
</style>
