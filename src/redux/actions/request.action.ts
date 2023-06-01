import { COMMON_ACTION_TYPES, REQUEST_ACTION_TYPE } from "../../utilities/constants"

const getRequestsList = () => {
    console.log("B")
    return { type: REQUEST_ACTION_TYPE.GET_REQUEST_LIST + COMMON_ACTION_TYPES.REQUEST }
}

export const requestActions = {
    getRequestsList
}