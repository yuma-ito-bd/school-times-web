import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ArticlesData implements InMemoryDbService {
    createDb() {
        const articles = [
            { id: 1, createdAt: new Date(2020, 4, 1), title: '入学式', contents: 'これからよろしくね', author: 'A先生'},
            { id: 2, createdAt: new Date(2020, 7, 1), title: '夏休み', contents: 'さあ夏休みです！', author: 'A先生'},
            { id: 3, createdAt: new Date(2020, 10, 1), title: '運動会', contents: '楽しもうね！', author: 'A先生'},
        ];
        return {articles};
    }
}
