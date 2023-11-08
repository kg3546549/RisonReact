export default class ComicData {
    title:string;
    author:string;
    id:number;
    star:number;

    constructor(title:string,author:string ,id:number, star:number) {
        this.title = title;
        this.author = author;
        this.id = id;
        this.star = star;
    }
}

