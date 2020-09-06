import { ARTICLE_STATUS } from "../models/article"

export type UpdateArticleRequest = {
    id: number;
    title: string;
    contents: string;
    authorId: number;
    status: ARTICLE_STATUS;
}

export type UpdateArticleResponse = {
    id: number;
    createTime: string;
    updateTime: string;
    deleteFlg: boolean;
    title?: string;
    contents?: string;
    authorId: number;
    status: number;
}