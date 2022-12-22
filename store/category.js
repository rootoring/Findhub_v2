export const state = () => ({
  category:{},
  categories:[],
})

export const mutations = {
  setCategory(state, category){
    state.category = category;
  },
  setCategories(state, categories){
    state.categories = categories;
  },  
}

  export const actions = {
    async fetchCategory({commit},{ id }){
      try{ 
      commit('main/toogleLoader',true, {root: true});  
        const category = await this.$api.categoryApi.getCategory(id);
         commit('main/toogleLoader',false, {root: true});
        commit('setCategory', category);
        return category
      }catch(err){
         commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async fetchCategories({commit}){
      try{  commit('main/toogleLoader',true, {root: true}); 
        const categories = await this.$api.categoryApi.getAllCategory();
         commit('main/toogleLoader',false, {root: true});
        commit('setCategories', categories);
        return categories
      }catch(err){
         commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },
  }

export const getters = {
  category(state){
    return state.category
  },
  categories(state){
    return state.categories
  },  
}  

