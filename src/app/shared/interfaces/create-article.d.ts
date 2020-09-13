import { ARTICLE_STATUS } from "../models/article"

export type CreateArticleRequest = {
    title: string;
    contents: string;
    authorId: number;
    classId: number;
    status: ARTICLE_STATUS;
}

export type CreateArticleResponse = {
    id: number;
    createTime: Date;
    updateTime: Date;
    deleteFlg: boolean;
    title?: string;
    contents?: string;
    authorId: number;
    classId: number;    
    status: number;
}