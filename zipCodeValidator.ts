// import { StringValidator } from './stringValidator';

// export const numberRegex = /^[0-9]+$/;

// export class ZipCodeValidator implements StringValidator{
//     isAcceptable(s: string): boolean {
//         return s.length === 8 && numberRegex.test(s);
//     }

// }
import * as AllValidators from './stringValidator';

import { StringValidator } from './stringValidator';

export const numberRegex = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator{
    isAcceptable(s: string): boolean {
        return s.length === 8 && numberRegex.test(s);
    }

}

//export {ZipCodeValidator};
export { ZipCodeValidator as mainValidator }