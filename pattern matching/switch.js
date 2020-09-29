function test(str) {
    switch (true) {
      case /xyz/.test(str):
        console.log("• Matched 'xyz' test");
        break;
      case /test/.test(str):
        console.log("• Matched 'test' test");
        break;
      case /ing/.test(str):
        console.log("• Matched 'ing' test");
        break;
      default:
        console.log("• Didn't match any test");
        break;
    }
}

test("testiiii");
test('interesting');
test('hiii');

