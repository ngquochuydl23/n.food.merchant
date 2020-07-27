import { FETCHING_MENU_FAIL, FETCHING_MENU_SUCCESS, ADD_FOOD, ADD_CATEGORY } from "../action/menuAction/actionType";

export const menuReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHING_MENU_SUCCESS:
      console.log("Success")
      return action.receivedMenu
    case FETCHING_MENU_FAIL:
      console.log("Fail")
      return []
    default:
      return state
  }
} 