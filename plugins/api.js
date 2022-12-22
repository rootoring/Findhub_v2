import { apiCreate } from '@/api/'

export default (ctx, inject) => {
  inject('api', apiCreate(ctx.$axios))
}