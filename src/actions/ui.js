import { types } from "../types/types";

export const uiOpenAlert = (type,sms) => ({
    type: types.uiOpenAlert,
    payload : {
        type : type,
        sms: sms
    }
})
export const uiCloseAlert = () => ({
    type: types.uiCloseAlert
})