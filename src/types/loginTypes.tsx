// interface를 생성할때 해당 interface의 비어있는 변수를 하나 같이 생성하는 습관을 가지도록 하자.

export interface user {
    name : string,
    id : string,
    pw : string
}
export const userEmpty : user = { 'name' : "", 'id' : '' , 'pw' : ''};

export interface register {
    name : string,
    id : string,
    pw : string
}
export const registerEmpty : register = { 'name' : '', 'id' : '', 'pw' : ''};


