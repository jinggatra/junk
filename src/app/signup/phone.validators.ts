import {ValidationErrors, AbstractControl} from '@angular/forms';
import { reject } from 'q';

export class PhoneValidators{
  static cannotContainChara(control: AbstractControl): ValidationErrors{
    if((control.value as number))
      return{cannotContainChara: true}
    return null;
  }

  // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
  //   return new Promise((resolve, reject)=> {
  //     setTimeout(()=>{
  //       if(control.value=== 'polinema')
  //         resolve({shouldBeUnique: true});
  //       else resolve(null);
  //     }, 2000);
  //   })
  // }
}
