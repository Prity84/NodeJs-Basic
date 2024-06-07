import * as fs from "fs/promises";

//Creating Directory / Folder

// try {
//   //   await fs.mkdir("c:\\nodejs\\courses");
//   await fs.mkdir("c:\\nodejs\\courses\\redux\\toolkit", { recursive: true });

//   console.log("Folder created..");
// } catch (error) {
//   console.log("error");
// }

//Read content of files

// try {
//   const files = await fs.readdir("c:\\nodejs");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

//Remove folder / Directory
// try {
//   await fs.rmdir("c:\\nodejs\\course");
// } catch (error) {
//   console.log(error);
// }

//Create anf write files

// try {
//   await fs.writeFile("README.md", "Hello prity nodejs");
// } catch (error) {
//   console.log(error);
// }

// Read file

// try {
//   //   const data = await fs.readFile("README.md");  buffer return
//   const data = await fs.readFile("README.md", "utf-8"); //exact data

//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

//append data

// try {
//   await fs.appendFile("README.md", "prity is learner");
// } catch (error) {
//   console.log(error);
// }

//Copy file

try {
  await fs.copyFile("README.md", "info.txt");
} catch (error) {
  console.log("Error");
}

//Get file information

try {
  const info = await fs.stat("info.txt");
  //   console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log("Error");
}
