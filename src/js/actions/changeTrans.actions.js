import { CHANGE_TRANS } from "./actionTypes";

export const changeTrans = (lang) =>{
    return {
        type:CHANGE_TRANS,
        lang: lang
    }
}