class TypeScript {
    version: string;

    constructor(version: string){
        this.version = version;
    }

    info(name: string){
        return `[${name}]: Typescrip version is  ${this.version}`
    }
}
const t= new TypeScript('3.9.6');
console.log(t.version);
console.log(t.info('test'));

// class Car {
//     readonly model: string;
//     readonly numerOfWeels: number = 4;

//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }

class Car {
    readonly numerOfWeels: number = 4;

    constructor(readonly model: string) {
        this.model = model;
    }
}

class Animal {
    public color: string = 'black';
    protected voice: string = '';

    constructor() {
        this.walk();
    }

    private walk(){
        console.log('Animal is walking');
    }
}

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice;
    }
    showVoice():void {
        console.log(cat.voice);
    }
}
let cat = new Cat();
cat.setVoice('Miau');
console.log(cat.color);
cat.showVoice();

abstract class Component {
    render(): void {
        console.log('Component is rendering')
    }
    abstract info(): string;
}

class AppComponent extends Component {
    info(): string {
        return 'Hello';
    }

}
var a= new AppComponent();
a.render();
console.log(a.info());

