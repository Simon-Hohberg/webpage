export class Post {

    public title: string = "";
    public subtitle: string = "";
    public summary: string = "";
    public imgThumbUrl: string = "";
    public content: string = "";
    public layout: string = "";
    public date: Date = new Date();
    public keywords: Array<string> = [];
    public thumbColor: string = "";
    public thumbImgSrc: string = "";
    public type: string = "";
    public url: string = "";

    constructor() {}

}
