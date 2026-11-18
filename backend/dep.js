export function log(text) {
  console.log(`${text}`);
}

log("Hi ?");

setInterval(() => {
  log("Hii !");
}, 2000);
