<template>
	<component :is="typeComp" :data="data" v-if="typeComp" />
</template>

<script>

	const ParagraphBlock = () => import(`@/components/post/postParty/ParagraphBlock.vue`)
	const H2Block = () => import(`@/components/post/postParty/H2Block.vue`)
	const H3Block = () => import(`@/components/post/postParty/H3Block.vue`)

	export default{
		name:'PartyBlock',
		components:{
			ParagraphBlock,
			H2Block,
			H3Block
		},
		props:{
			type:{
				default:() => null,
				type: String,
			},
			data:{
				default:() => {},
				type: Object,
			}
		},
		computed:{
			typeComp(){
				switch (this.type) {
				  case 'paragraph':
				 		return 'ParagraphBlock'
				    break;
				  case 'h2':
				 		return 'H2Block'
				    break;
				  case 'h3':
				 		return 'H3Block'
				    break;  
				  default:
				    return null
				}
			},
		}
	}
</script>

