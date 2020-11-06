import { getToken, setToken, removeToken } from "@/utils/auth"
import { resolve, reject } from "core-js/fn/promise"
import { login } from "../../api/user"

const state = {
  token: getToken(),
}

const mutations ={
  SET_TOKEN: (state,token)=>{
    state.token = token
  }
}

const actions = {
  // 登录(传递的数据)
  loginIn(){

    return new Promise((resolve,reject)=>{
    login({username: username.trim(),password: password})
      .then(res =>{
        const {data} = res
        // commit('SET_TOKEN',data.token)
        // setToken(data.token)
        // resolve()
        // 取res的值，拿到token，并存，res.....
      }).catch(error=>{
        reject(error)
      })
    })
  }
  
}
