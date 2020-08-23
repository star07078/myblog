<template>
    <div class="paginataion-container">
        <span class="total-num">共&nbsp;{{len}}&nbsp;条</span>
        <img 
			class='pre-page-disabled'
			@click='numLower'
		/>
        <input type="number"
		v-model='num' @focus="focus" @blur="blur" class="current-page" />
        <span class="page-count">/&nbsp;&nbsp;&nbsp;{{page}}</span>
        <img
			class='next-page-disabled'
			@click='numAdd'
		/>
    </div>
</template>

<script>
    export default {
		data(){
			return {
				num: 1,
				once: true,
				focusN: 0,
			}
		},
		watch: {
			type(){
				this.num = 1;
			},
		},
		computed: {
			page(){
				return this.$store.state.studyList.page
			},
			len(){
				return this.$store.state.studyList.len
			},
			type(){
				return this.$store.state.studyTypeName
			}
		},
		methods: {
			focus(){
				this.focusN = this.num;
			},
			blur(){
				if(this.focusN != this.num){
					this.once = false;
				}
			},
			numLower(){
				if(this.once && this.num == 1){
					this.once = true
					return
				}
				if(this.once){
					if(this.num <= 1){
						this.num = 1;
					}else{
						this.num --;
					}
				}
				this.once = true;
				sessionStorage.setItem('num',this.num)
				this.$axios({
					url: this.$store.state.studyTypeName,
					params: {
						page: this.num
					}
				})
				.then(item=>{
					this.$store.commit('setStudyList',item.data)
				})
			},
			numAdd(){
				if(this.once && this.num == this.page){
					this.once = true
					return
				}
				if(this.once){
					if(this.num >= this.page){
						this.num = this.page;
					}else{
						this.num ++;
					}
				}
				this.once = true;
				sessionStorage.setItem('num',this.num)
				this.$axios({
					url: this.$store.state.studyTypeName,
					params: {
						page: this.num
					}
				})
				.then(item=>{
					this.$store.commit('setStudyList',item.data)
				})
			}
		},
		created(){
			var n = sessionStorage.getItem('num');
			if(n){
				this.num = n;
			}
		}
    }
</script>

<style lang="less" scoped>
  .paginataion-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 38px;
    img {
      flex: 0 0 38px;
      height: 38px;
    }
  }

  .total-num {
    font-size: 14px;
    color: #4b595f;
  }

  .page-arrow(@prefix) {
    content: url("../../assets/@{prefix}-page-normal.png");
    &:hover {
      content: url("../../assets/@{prefix}-page-hover.png");
    }

    // Firefox content base64 仅支持 after
    &::after {
      content: url("../../assets/@{prefix}-page-normal.png");
    }
    &:hover {
      &::after {
        content: url("../../assets/@{prefix}-page-hover.png");
      }
    }
  }

  .page-arrow-disabled(@prefix) {
    content: url("../../assets/@{prefix}-page-normal.png");

    // Firefox content base64 仅支持 after
    &::after {
      content: url("../../assets/@{prefix}-page-normal.png");
    }
  }

  .pre-page {
    .page-arrow(pre);
  }

  .pre-page-disabled {
	.page-arrow-disabled(pre);
	// cursor: not-allowed;
  }

  .next-page {
    .page-arrow(next);
  }

  .next-page-disabled {
	.page-arrow-disabled(next);
	// cursor: not-allowed;
  }

  .current-page {
    width: 48px;
    height: 24px;
    line-height: 24px;
    border: solid 1px #ebeef0;
    font-size: 14px;
    text-align: center;
    color: #03a9f4;
    outline: none;
  }

  .page-count {
    font-size: 14px;
    color: #4b595f;
  }
</style>