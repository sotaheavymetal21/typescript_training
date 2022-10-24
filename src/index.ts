import * as fs from "fs";

const createText = () => {
    let text = "";
    while (text.length < 512 * 1024) {
        text += "123 456\n";
    }
    return text;
};

fs.writeFile("./out.txt", createText(), () => console.log("done."));
