export class Movie{
    
    constructor(
        public id: number,
        public title: string,
        public gender: string = "",
        public director: string="",
        public year: number = 2030,
        public platform: string ="",
        public pay: boolean = false
    ){}
}