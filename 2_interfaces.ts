interface Rectangle {
    readonly id: string;
    color?: string;
    size: {
        width: number,
        height: number
    }
}

const rect1: Rectangle = {
    id: '10',
    color:'#c3c3c3',
    size: {
        height: 50,
        width: 80
    }
}

console.log(rect1);
// rect1.id = 11; is not working because is readonly
const rect2: Rectangle = {
    id: '10',
    size: {
        height: 50,
        width: 80
    }
}

rect2.color = 'blue';

const rect3 = {} as Rectangle;
const rect4 = <Rectangle>{};

interface RectangleWithArea extends Rectangle {
    getArea: () => number;
}

const rect5: RectangleWithArea = {
    id: '11',
    color: 'green',
    size: {
        height: 60,
        width: 100
    },
    getArea(): number {
        return this.size.height * this.size.width;
    }
}
console.log(rect5);
console.log(rect5.getArea());

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1ps solid red',
    marginTop: '2px',
    borderRadius: '5px'
}
