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
}
