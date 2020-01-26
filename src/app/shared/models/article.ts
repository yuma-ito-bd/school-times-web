
export class Article {
    title: string;
    contents: string;
    author: string;
    createdAt: Date;

    constructor(title: string, contents: string, author: string) {
        this.title = title;
        this.contents = contents;
        this.author = author;
        this.createdAt = new Date();
    }
}
