process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  
  // Delay the exit to allow the output to be printed first
  setTimeout(() => process.exit(), 0);
});

process.on("exit", () => {
  console.log("This important software is now closing");
});
