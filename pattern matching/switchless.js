function test(str) {
    const res = new Map([
        [/xyz/, "• Matched 'xyz' test"],
        [/test/, "• Matched 'test' test"],
        [/ing/,    "• Matched 'ing' test"],
        [/\d*/, "• Didn't match any test"],
    ]);

    for (let regexItem of res.keys()) {
        if(regexItem.test(str)) {
            console.log(res.get(regexItem));
            break;
        }
    }
}

test("test");
test('interesting');
// test('hiii');

