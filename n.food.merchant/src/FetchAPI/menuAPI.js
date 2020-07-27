import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

function* getMenuList() {
  const response = yield axios.get("https://5f185f637c06c900160dce41.mockapi.io/menu")
  console.log(response.data)
  return response.data
}


function* addFood(id,itemFood) {
  const response = yield axios.post("https://5f185f637c06c900160dce41.mockapi.io/menu/" + id +"/food",itemFood)
  console.log(response.data)
  return response.status === 200 ? response.data : { }
}

function* deleteCategory(id){
  const response = yield axios.delete("https://5f185f637c06c900160dce41.mockapi.io/menu/" + id)
  console.log(response.data)
  return response.status === 200 ? response.data : { }
}

function* addCategory(itemCategory) {
  const response = yield axios.post("https://5f185f637c06c900160dce41.mockapi.io/menu",itemCategory)
  console.log(response.status)
  return response.status === 201 ? response.data : { }
}

export const menuAPI = {
  getMenuList,
  addFood,
  addCategory,
  deleteCategory
}