export const state = () => ({
  pages:[],
})

export const mutations = {
  setPages(state, pages){
    state.pages = pages;
  }
}

  export const actions = {
    getPages({commit},{index,length}){
      let arr = [];
      for(let i = 1; i <= length; i++){
        arr.push(i);
      } 
      length = arr.length;
      if(length > 7){
        if(index <= 4){
          arr.splice(index + 1,length - (index + 3),'...');
        }
        if(index >= length - 3){
          arr.splice(2,index - 4,'...');
        }
        if(index >= 5 && index < length-3){
          arr.splice(index + 1,length - (index + 3),'...');
          arr.splice(2,index - 4,'...');
        }
      }
      commit('setPages', arr);
      return arr
    }  
  }

export const getters = {
  pages(state){
    return state.pages;
  },
}  

