import postsApi from '@/api/posts.api.js'
import categoryApi from '@/api/category.api.js'
import authApi from '@/api/auth.api.js'

export const apiCreate = (axios) => ({
	postsApi:postsApi(axios),
	categoryApi:categoryApi(axios),
	authApi:authApi(axios)
})