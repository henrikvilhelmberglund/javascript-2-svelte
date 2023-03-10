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

</script>

<main class="p-4">
	<p class="text-[28rem]">🐱‍💻</p>
</main>

<style>
</style>
