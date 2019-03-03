import { readFileSync } from "fs";
import formater from "./sqlFormatter";

console.log(process.argv.filter(x => x.endsWith(".sql")));

process.argv.filter(x => x.endsWith(".sql")).forEach(filePath => {
  const content = readFileSync(filePath, "utf8");
  const formatted = formater.format(content, {language: "presto"});
  console.log(formatted);
});
