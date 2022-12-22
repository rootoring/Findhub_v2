export default (axios) => ({

	async getAllPosts(indexPag, paged){
		let { data } = await axios.get(`/post/?limit=${paged}&offset=${(indexPag || 0) * paged }&published=0`)
		return data
	},

	async getCategoryPosts(idCat, indexPag, paged){
		let { data } = await axios.get(`/post/${idCat}/category/?limit=${paged}&offset=${(indexPag || 0) * paged }&published=1`)
		return data
	},

	async getPost(id){
		let { data } = await axios.get(`/post/${id}`)
		return data
	},

	async getPopularPosts(){
		let { data } = await axios.get(`/post/popular/get`)
		return data
	},

	async getTargetPosts(category){
		let { data } = await axios.get(`/post/target/${category}`)
		return data
	},

	async createPostComments(body){
		let { data } = await axios.post(`/post/comment`, body)
		return data
	},

	async addFavoritePost(body){
		let { data } = await axios.post(`/post/favorite`, body)
		return data
	},

	async deleteFavoritePost(body){
		let { data } = await axios.post(`/post/favorite/delete`, body)
		return data
	},

	async getFavoritePost(idUser){
		let { data } = await axios.get(`/post/favorite/${idUser}`)
		return data
	},
})