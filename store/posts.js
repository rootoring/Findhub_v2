export const state = () => ({
  posts:[],
  post:{},
  postsPerPage:1,
  comments:[],
  popularPosts:[],
  targetPosts:[],
})

export const mutations = {
  setPosts(state, posts){
    state.posts = posts;
  },
  setPost(state, post){
    state.post = post;
  },
  setDraftPosts(state, draftPosts){
    state.draftPosts = draftPosts;
  },
  setPostsPerPage(state, posts){
    state.postsPerPage = posts;
  },   
  setComments(state, comments){
    state.comments = comments;
  },
  setPopularPosts(state, posts){
    state.popularPosts = posts;
  },
  setTargetPosts(state, posts){
    state.targetPosts = posts;
  },
}

  export const actions = {
    async fetchPosts({commit},{ idCat, indexPag }){
      const paged = 6;
      if(idCat){
        try{
          commit('main/toogleLoader',true, {root: true});  
          let posts = await this.$api.postsApi.getCategoryPosts(idCat, indexPag - 1, paged);
          commit('main/toogleLoader',false, {root: true});
          commit('setPostsPerPage', Math.ceil(posts.count/paged));
          commit('setPosts',posts.posts);
        }catch(err){
          commit('main/toogleLoader',false, {root: true}); 
          commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
        }
      }else{
        try{ 
          commit('main/toogleLoader',true, {root: true});  
          let posts = await this.$api.postsApi.getAllPosts(indexPag - 1, paged);
          commit('main/toogleLoader',false, {root: true});
          commit('setPostsPerPage', Math.ceil(posts.count/paged));
          commit('setPosts', posts.posts);
        }catch(err){
          commit('main/toogleLoader',false, {root: true});
          commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
        }
      }
    },

    async fetchPost({commit, dispatch}, id){
      try{ 
        commit('main/toogleLoader',true, {root: true});  
        const post = await this.$api.postsApi.getPost(id);
        commit('main/toogleLoader',false, {root: true});
        commit('setPost', post);
        return post
      }catch(err){
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async getPopularPost({commit}){
      try{  
        let posts = await this.$api.postsApi.getPopularPosts();
        commit('setPopularPosts', posts);
      }catch(err){
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },
    
    async getFindPosts({commit}){
      try{
        commit('main/toogleLoader',true, {root: true});  
        const posts = await this.$api.postsApi.getAllPosts(0, 100);
        commit('main/toogleLoader',false, {root: true});
        commit('setPosts', posts.posts);
      }catch(err){
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },
    
    async getTargetPosts({commit}, category){
      try{  
        const posts = await this.$api.postsApi.getTargetPosts(category);
        commit('setTargetPosts', posts);
      }catch(err){
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async createComments({commit, dispatch}, body){
      try{ 
        commit('main/toogleLoader',true, {root: true}); 
        const comments = await this.$api.postsApi.createPostComments(body);
        commit('main/setMessage',{ text:'Комментарий создан', color:'#00d1a0', active:true }, { root: true });
        commit('main/toogleLoader',false, {root: true});
        return comments
      }catch(err){
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async addFavoritePost({commit},{ userId, postId }){
      try{  
        commit('main/toogleLoader',true, {root: true});
        if(!userId){
          commit('main/setMessage',{ text:'Войдите в сисетему', color:'red', active:true }, { root: true });
        }else{
          await this.$api.postsApi.addFavoritePost({ postId, userId: userId._id });
          commit('main/setMessage',{ text:'Пост сохранен в профиле', color:'#00d1a0', active:true }, { root: true });
        }
        commit('main/toogleLoader',false, {root: true});
      }catch(err){
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async deleteFavoritePost({commit, dispatch},{ userId, postId }){
      try{ 
        commit('main/toogleLoader',true, {root: true});   
        await this.$api.postsApi.deleteFavoritePost({ postId, userId: userId._id });
        await dispatch('getFavoritePost', { idUser: userId });
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:'Пост удалён', color:'#00d1a0', active:true }, { root: true });
      }catch(err){
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async getFavoritePost({commit}, { idUser }){
      try{
        commit('main/toogleLoader',true, {root: true});  
        const posts = await this.$api.postsApi.getFavoritePost(idUser._id);
        commit('main/toogleLoader',false, {root: true});
        commit('setPosts', posts);
      }catch(err){
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },
  }

export const getters = {
  posts(state){
    return state.posts;
  },
  post(state){
    return state.post;
  }, 
  draftPosts(state){
    return state.draftPosts;
  },
  postsPerPage(state){
    return state.postsPerPage;
  },
  comments(state){
    return state.comments;
  },
  popularPosts(state){
    return state.popularPosts;
  },
  targetPosts(state){
    return state.targetPosts;
  }
}  
