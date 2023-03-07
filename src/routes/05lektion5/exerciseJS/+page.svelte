<script>
	/*

  Din uppgift är att skapa en applikation för att hitta på en aktivitet att göra med hjälp av följande API-endpoint: http://www.boredapi.com/api/activity/
  1. Användaren ska kunna klicka på en knapp för att hämta en aktivitet från API:et. Varje gång knappen klickas på, ska en ny aktivitet visas ut och ersätta den tidigare aktiviteten.
  */

	// TODO fix regex :)

	/*

    2. Användaren ska - om hen vill - kunna filtrera på följande:
    a. Antal deltagare med radio-buttons: 1-4 deltagare.
    b. Vilken typ av aktivitet via en dropdown-lista (se i dokumentationen vilka olika typer av aktiviteter som finns: https://www.boredapi.com/documentation )
    c. Om aktiviteten måste vara gratis eller inte via en checkbox.

  */

	import { onMount } from "svelte";
	onMount(() => {
		let main;
		if (document.querySelector("main")) {
			main = document.querySelector("main");
			main.innerHTML = "";
		} else {
			main = document.createElement("main");
			document.body.append(main);
		}

		//  1

		const getRandomActivity = async (params) => {
			let response = await fetch(`https://www.boredapi.com/api/activity?${params ?? ""}`, {
				method: "GET",
			});

			let data = await response.text();
			console.log(data);
			return data;
		};

		// radio 1-4
		// type dropdown
		// free checkbox
		//  A factor describing the cost of the event with zero being free [0, 1]

		// fix metoder i URLSearchParams
		// params.get()
		// params.append()

		async function displayActivity() {
			let res = await getRandomActivity();
			let { activity, type, participants, price, link, key, accessibility } = JSON.parse(res);
			main.innerHTML = "";
			render();
			let activityText = document.querySelector(".activity-text");
			activityText.innerHTML = `${activity} <br>type:${type} participants:${participants} price:${price}`;
			activityText.className = "activity-text";
		}

		async function filterActivity() {
			let radioValue = document.querySelector(`input[type="radio"]:checked`).value;
			let dropDownValue = document.querySelector(`option:checked`).value;
			let checkBoxValue = document.querySelector(`input[type="checkbox"]:checked`)?.value;
			// console.log(`checkBoxValue: ${checkBoxValue}`)
			console.log(dropDownValue);
			let params = new URLSearchParams({
				// participants: radioValue,
				...(radioValue !== "any" ? { participants: radioValue } : {}),
				...(dropDownValue !== "any" ? { type: dropDownValue } : {}),
				...(checkBoxValue ? { price: 0 } : {}),
			});
			let res = await getRandomActivity(params);
			let { activity, type, participants, price, link, key, accessibility, error } =
				JSON.parse(res);
			// console.log(`radioValue:${radioValue}`);
			main.innerHTML = "";
			render(radioValue, dropDownValue, checkBoxValue);
			let activityText = document.querySelector(".activity-text");
			activityText.innerHTML = `${
				error ? error : activity
			} <br>type:${type} participants:${participants} price:${price}`;
		}

		function render(selectedValue, selectedType, selectedBool) {
			if (!selectedValue) {
				selectedValue = "any";
			}
			if (!selectedType) {
				selectedValue = 1;
			}
			if (!selectedBool) {
				selectedBool = false;
			}
			// console.log(`selectedValue: ${selectedValue}`);
			main.innerHTML = "";
			let button = document.createElement("button");
			let filterButton = document.createElement("button");
			button.innerText = "Get new activity";
			main.append(button);
			filterButton.innerText = "Filter";
			let filterDiv = document.createElement("div");
			filterDiv.className = "filter-div";
			filterDiv.append(filterButton);
			createRadio(filterDiv, selectedValue);
			createDropdown(filterDiv, selectedType);
			createCheckbox(filterDiv, selectedBool);
			main.append(filterDiv);
      // fix later :)
			let oldRadio =
				document.querySelectorAll(`input[type="radio"]`)[
					selectedValue === "any" ? 0 : selectedValue - 1
				];
			console.log(oldRadio);
			oldRadio.checked = true;
			let type = document.createElement("select");

			let activityDiv = document.createElement("div");
			let activityText = document.createElement("p");
			activityText.className = "activity-text";

			activityDiv.append(activityText);
			main.append(activityDiv);

			button.addEventListener("click", async (e) => {
				displayActivity();
			});

			filterButton.addEventListener("click", async (e) => {
				filterActivity();
			});
		}

		function createRadio(element, defaultValue) {
			// console.log(`defaultValue: ${defaultValue}`);

			let radioValues = ["any", 1, 2, 3, 4];
			radioValues.forEach((value) => {
				let label = document.createElement("label");
				label.htmlFor = `radio_${value}`;
				label.innerText = value;
				let radio = document.createElement("input");
				radio.type = "radio";

				radio.name = "type";
				radio.id = `radio_${value}`;
				radio.className = "radio-input";
				radio.value = value;

				element.append(radio);
				element.append(label);
			});
		}

		function createDropdown(element, defaultValue) {
			let typeOptions = [
				"any",
				"education",
				"recreational",
				"social",
				"diy",
				"charity",
				"cooking",
				"relaxation",
				"music",
				"busywork",
			];
			// console.log(`defaultValue: ${defaultValue}`);
			let select = document.createElement("select");

			typeOptions.forEach((value, i) => {
				let label = document.createElement("label");
				label.htmlFor = `radio_${value}`;
				label.innerText = value;
				let option = document.createElement("option");
				option.type = "option";

				option.name = "type";
				option.id = `option_${value}`;
				select.className = "dropdown-input";
				option.value = value;
				option.innerText = value;

				select.append(option);
				select.append(label);
			});
			element.append(select);
		}

		function createCheckbox(element, defaultValue) {
			// console.log(`defaultValue: ${defaultValue}`);
			let checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = `checkbox-id`;
			checkbox.className = "dropdown-input";
			checkbox.checked = defaultValue;
			let label = document.createElement("label");
			label.htmlFor = `checkbox-id`;
			label.innerText = "Free only";

			element.append(checkbox);
			element.append(label);
		}

		render();
	});
</script>

<main class="p-4">
	<!-- <p class="text-[28rem]">🦆</p> -->
</main>

<style>
	:global(.activity-text) {
		--at-apply: "text-4xl";
	}

	:global(.filter-div) {
		display: block;
	}
	:global(.radio-input) {
		margin: 0 0 0 1rem;
	}
	:global(.dropdown-input) {
		margin: 0 0 0 1rem;
	}
</style>
