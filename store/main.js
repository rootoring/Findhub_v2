export const state = () => ({
  message:{
    text:'Сообщение',
    color:'#fff',
    active:false,
  },
  isActiveMenu:false,
  isActivePreloader: false,
})

export const mutations = {
  setMessage(state, message){
    state.message = message;
  },
  toogleMenu(state, status){
    state.isActiveMenu = status
  },
  toogleLoader(state, status){
    state.isActivePreloader = status
  }  
}

export const actions = {}

export const getters = {
  message(state){
    return state.message
  },
  isActiveMenu(state){
    return state.isActiveMenu
  },
  isActivePreloader(state){
    return state.isActivePreloader
  },    
}  

