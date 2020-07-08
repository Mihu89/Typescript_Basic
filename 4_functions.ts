function add(a: number, b: number): number {
    return a + b;
}

function toUpper(str: string): string {
    return str.trim().toUpperCase();
}

interface Position {
    x: number | undefined,
    y: number | undefined
}

interface DefaultPosition extends Position {
    default: string
}

function position(): Position
function position(a: number): DefaultPosition
function position(a: number, b: number): DefaultPosition

function position(a?: number, b?: number) {

    if (!a && !b) {
        return { x: undefined, y: undefined };
    }

    if(a && !b) {
        return { x: a, y:undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty', position());
console.log('Empty', position(undefined, undefined));
console.log('One param', position(78));
console.log('One param', position(undefined,78));
console.log('Two params', position(10,25));

