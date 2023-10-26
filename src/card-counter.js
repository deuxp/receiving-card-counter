const { Command } = require("commander");
const program = new Command();

program
  .name("card-counter.js")
  .description(
    "CLI, calculate how many receiving cards are needed for a given screen size."
  )
  .version("0.0.1");

program
  .command("getRes")
  .description("Get the maximum resolution of a specified card")
  .argument("<string>", "enter the model number of the card")
  .action(() => {
    // Do work here
    console.log("resolution: ");
  });
