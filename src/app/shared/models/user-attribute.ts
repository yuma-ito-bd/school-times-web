const valueList = [
    'Parent', // 保護者
    'Teacher', // 先生
    'SuperUser', // 管理者
] as const;
type UserAttributeType = typeof valueList[number];

/**
 * ユーザー属性の値オブジェクト
 */
export class UserAttribute {
    constructor(readonly value: UserAttributeType) {
        if (!valueList.includes(value)) {
            throw new Error(`値が不正です。[value: ${value}]`);
        }
    }

    /**
     * 番号から該当するユーザー属性のインスタンスを生成する
     * @param num 属性の番号
     */
    public static fromNumber(num: number): UserAttribute {
        switch (num) {
            case 1:
                return new UserAttribute('Parent');
            case 2:
                return new UserAttribute('Teacher');
            case 3:
                return new UserAttribute('SuperUser');
            default:
                throw new Error('number is invalid');
        }
    }
}
