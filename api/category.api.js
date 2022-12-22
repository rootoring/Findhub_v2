export default (axios) => ({
	async getAllCategory(){
		let { data } = await axios.get(`/category`)
		return data
	},

	async getCategory(id){
		let { data } = await axios.get(`/category/${id}`)
		return data
	}
})