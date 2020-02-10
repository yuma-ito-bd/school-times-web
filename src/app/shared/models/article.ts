export enum STATUS {
    /** 一時保存（未申請） */
    DRAFT,
    /** 申請済みで未公開 */
    UNPUBLISHED,
    /** 公開済み */
    PUBLISHED
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

    constructor(title: string, contents: string, author: string) {
        this.title = title;
        this.contents = contents;
        this.author = author;
        this.createdAt = new Date();
        this.status = STATUS.DRAFT;
    }
}
