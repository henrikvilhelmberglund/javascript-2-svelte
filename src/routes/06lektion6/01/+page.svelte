<script>
	/*

  Callbacks: argument med en funktion som körs från en annan funktion (i t.ex arraymetoder och event listeners)

  Promises: Löfte om att jag returnerar något någon gång men vet inte hur lång tid det tar
  Kan resolvas eller rejectas och är pending innan return
  Pending, resolve, reject


  let dough = async () => {
    let hasDoughInTheFridge = false;
    //Ett Promise har tre olika stadier - pending, resolved, rejected
    return new Promise((resolve, reject) => {
      if (hasDoughInTheFridge) {
        resolve("Promise resolved!");
      } else {
        reject("Promise rejected :( ");
      }
    });
  };

  sedan try-catch när man awaitar

  let makePizza = async () => {
  try {
    await dough();
    console.log("Pizzan är färdig");
  } catch (error) {
    console.log(error);
  }
};

  makePizza();

  */

	/*

  throw new Error("custom error här")

*/

	/*

  Finns även Promise.all() som inväntar en array av promises

  // Multiple promises - Promise.all och Promise.allSettled()

  let getUser = async (id) => {
    try {
      let response = await fetch(
        `https://jsonplaceholkder.typicode.com/users/${id}`
      );
      let data = await response.json();
      return data;
    } catch (err) {
      console.log("error", err);
    }
  };

  let userIds = [3, 6, 10];

  let getAllUsers = async () => {
    try {
      console.log("körs");

      let promises = userIds.map((id) => getUser(id));

      //Kastar error om ett promise blir rejected
      let results = await Promise.all(promises);

      //Returnerar rejectade och resolvade promises
      let results2 = await Promise.allSettled(promises);
      console.log(results2);
    } catch (error) {
      console.log("Error", error);
    }
  };

*/

	/*

  .map() returnerar en ny array med det som returneras från funktionen istället för
  .forEach() som inte returnerar något
  let promises = userIds.map((id) => getUser(id));

*/
</script>

<main class="p-4">
	<p class="text-[28rem]">🐱‍💻</p>
</main>

<style>
</style>
