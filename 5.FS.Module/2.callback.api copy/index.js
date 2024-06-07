import { error } from "console";
import * as fs from "fs";
// fs.mkdir("c:\\nodejs", (error) => {
//   if (error) throw error;
//   console.log("Directory Created");
// });

fs.mkdir("c:\\nodejs1", function (error) {
  if (error) throw error;
  console.log("Directory Created");
});

//No need try and catch block...
