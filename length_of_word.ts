const cases = {
    c1: "Hello World",
    c2: "   fly me   to   the moon  ",
    c3: "luffy is still joyboy"
}


function lengthOfLastWord(s: string): number {
    let word = "";
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i].trim();
        if (!char && word) {
            break;
        }
        word += char
    }

    return word.length;
};

for (const [key, value] of Object.entries(cases)) {
    const res = lengthOfLastWord(value);
    console.log(`${key}: ${value}, res: ${res}`);
}

