interface Option{
    id:string;
    value:string;
}

export class SelectInputGroup{
    constructor(
        public id:string="",
        public label:string="",
        public name:string="",
        public options:Option[]
    ){}
}