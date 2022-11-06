export class InputGroup {
  constructor(
    public icon?      : string,
    public type       : string = '',
    public label      : string = '',
    public id         : string = '',
    public name       : string = '',
    public placeholder: string = '',
    public disabled   : boolean = false,
    public hidden     : boolean = false
  ) {}
}
