const cases = {
    c1: "()",
    c2: "()[]{}",
    c3: "([",
    c4: "{[]}",
    c5: "({]})",
    c6: "([)]"
}

enum BracketDict {
    ')' = '(',
    "}" = '{',
    "]" = '['
}

function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let c of s) {
        const lastStackSymbol = stack[stack.length - 1];
        const closingSymbol = BracketDict[c as keyof typeof BracketDict];
        if (!stack.length || lastStackSymbol !== closingSymbol) {
            stack.push(c);
        } else {
            stack.pop();
        }
    }
    return !stack.length;
};


for (const [key, value] of Object.entries(cases)) {
    const valid = isValid(value);
    console.log(`${key}: ${value}, isValid: ${valid}`);
}

