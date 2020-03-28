import { ARTICLE_STATUS } from "../models/article"

export type GetArticleResponse = {
    articles: ArticleData[];
}

type ArticleData = {
    id: number;
    createTime: Date
    author: string;
    status: ARTICLE_STATUS;
    title: string;
    contents: string;
}
