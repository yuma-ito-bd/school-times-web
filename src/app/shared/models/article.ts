
export class Article {
    /** 記事ID */
    id: number;
    /** タイトル */
    title: string;
    /** 内容 */
    contents: string;
    /** 作成者 */
    author: string;
    /** 作成日 */
    createdAt: Date;
    /** 公開済みか */
    isPublised: boolean;

    constructor(title: string, contents: string, author: string) {
        this.title = title;
        this.contents = contents;
        this.author = author;
        this.createdAt = new Date();
        this.isPublised = false;
    }
}
