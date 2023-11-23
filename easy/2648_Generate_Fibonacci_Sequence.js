/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0;
    let a = 1;
    let b = 1;
    yield a;
    yield b;
    while(true){
        a = a + b;
        b = a - b;
        yield a;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
