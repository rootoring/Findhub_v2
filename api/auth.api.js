export default (axios) => ({
	async signUp(body){
		let { data } = await axios.post(`http://localhost:3002/auth/signup`, body)
		return data
	},
})