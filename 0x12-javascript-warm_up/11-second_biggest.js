#!/usr/bin/node
const args = process.argv;
if (args.length <= 3) console.log(0);
else {
  console.log(args.map(Number).slice(2, args.length).sort((a, b) => b - a)[1]);
}
