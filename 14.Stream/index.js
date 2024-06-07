//Streams provides to work on a large ammount of data....
// 64kiloo data
// Efficient Data Handling: Streams break data into smaller chunks, ideal for large datasets.
// Asynchronous Processing: Allows data processing as it's available, without waiting for full data loads.
// Piping Data: Streams can be easily connected, so data flows from one to another.
// Types of Streams: Readable, Writable, Duplex, and Transform, each serving specific purposes.
// Error Handling: Streams handle errors gracefully, with mechanisms for error handling.
// Backpressure Handling: Controls data flow to prevent overload, ensuring efficiency.
// Integration: Streams are integrated into many Node.js modules for consistent data handling.

import { createReadStream } from "fs";
// const stream = createReadStream("./data.txt", { highWaterMark: 90000 });

//Read entire data

const stream = createReadStream("./data.txt", { encoding: "utf-8" });

stream.on("data", (data) => {
  console.log(data);
});
