import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Bem {
  public bemConvertion(
    baseClass: String,
    modifier?: String,
    variant?: String,
    extraClasses?: String[]
  ) {
    let finalClass = baseClass;
    if (modifier && modifier != '') finalClass = `${finalClass}__${modifier}`;
    if ((variant && variant != '')){
      if (modifier!='' && modifier)
        finalClass = `${finalClass} ${finalClass}--${variant}`;
      else
        finalClass = `${finalClass} ${finalClass}--${variant}`
    };
    if (extraClasses && extraClasses.length>0) {
      extraClasses.forEach((extraClass) => {
        finalClass = `${finalClass} ${extraClass}`;
      });
    }
    return finalClass;
  }
}
