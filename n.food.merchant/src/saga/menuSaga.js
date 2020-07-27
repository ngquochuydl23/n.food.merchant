import { ADD_CATEGORY,ADD_FOOD,GET_MENU_LIST, DELETE_CATEGORY } from "../action/menuAction/actionType";
import { menuAPI } from "../FetchAPI/menuAPI";
import { fetchMenuListSuccess,fetchMenuListFail,getMenuList } from '../action/menuAction/menuAction';
import { put,takeLatest } from "redux-saga/effects";

function* fetchMenu() {
  try {
    const data = yield menuAPI.getMenuList()
    yield put(fetchMenuListSuccess(data))
  } catch (error) {
    console.log("error : " + error)
    yield put(fetchMenuListFail(error)) 
  }
}

function* addCategoryAction(action){
  try {
    const result = yield menuAPI.addCategory(action.itemCategory)
    if(result !== null)
      yield put(getMenuList())
  } catch (error) {
    
  }
}

function* deleteCategoryAction(action){
  try {
    const result = yield menuAPI.deleteCategory(action.id)
    if(result !== null)
      yield put(getMenuList())
  } catch (error) {
    
  }
}


function* addFoodAction(action){
  try {
    console.log(JSON.stringify())
    const result = yield menuAPI.addFood(action.idCategory,action.itemFood)
    if(result !== null)
      yield put(getMenuList())
  } catch (error) {
    
  }
}


export function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY,deleteCategoryAction)
}

export function* watchFetchMenu() {
  yield takeLatest(GET_MENU_LIST,fetchMenu)
}

export function* watchAddCategoty() {
  yield takeLatest(ADD_CATEGORY,addCategoryAction)
}

export function* watchAddFood() {
  yield takeLatest(ADD_FOOD,addFoodAction)
}