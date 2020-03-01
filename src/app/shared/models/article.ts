export enum STATUS {
    /** 一時保存（未申請） */
    DRAFT = 0,
    /** 申請済みで未公開 */
    UNPUBLISHED = 1,
    /** 公開済み */
    PUBLISHED = 2
}

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
    /** 状態 */
    status: STATUS;

    constructor(title: string, contents: string, author: string);
    constructor(data: Partial<Article>);
    constructor(data: string | Partial<Article> , contents?: string, author?: string ) {
        if (typeof data === 'string') {
            this.title = data;
            this.contents = contents;
            this.author = author;
            this.createdAt = new Date();
            this.status = STATUS.DRAFT;
        } else {
            this.id = data.id;
            this.title = data.title;
            this.contents = data.contents;
            this.author = data.author;
            this.createdAt = data.createdAt;
            this.status = data.status;
        }
    }
}
