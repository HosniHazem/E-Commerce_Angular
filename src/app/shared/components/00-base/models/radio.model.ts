export interface RadioItem{
        label: String,
        id: String,
        value:String,
        disabled:boolean,
}

export class RadioGroup {
  constructor(
    public label: String = '',
    public name: String,
    public radioItems: RadioItem[]
  ) {}
}
