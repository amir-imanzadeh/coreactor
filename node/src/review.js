import fs from "fs";

export function review(file){
    let code =  fs.readFileSync(file,`utf-8`)
    return code;
}
