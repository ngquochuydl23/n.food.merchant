import {
  ADD_CATEGORY,
  GET_MENU_LIST,
  ADD_FOOD,
  FETCHING_MENU_SUCCESS,
  FETCHING_MENU_FAIL,
  DELETE_CATEGORY
} from './actionType';

export function addCategory(itemCategory) {
  return {
    type: ADD_CATEGORY,
    itemCategory
  }
}


export function deleteCategory(idCategory) {
  return {
    type: DELETE_CATEGORY,
    idCategory
  }
}

export function addFood(idCategory,itemFood) {
  return {
    type: ADD_FOOD,
    idCategory,
    itemFood
  }
}


export function getMenuList() {
  return {
    type: GET_MENU_LIST
  }
}

export function fetchMenuListSuccess(receivedMenu) {
  return {
    type: FETCHING_MENU_SUCCESS,
    receivedMenu
  }
}

export function fetchMenuListFail(error) {
  return {
    type: FETCHING_MENU_FAIL,
    error
  }
} 