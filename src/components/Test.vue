<template>
  <span @click.prevent="change">{{isLogin | getVal}}</span>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState(['isLogin'])
        
    },
    methods:{
        ...mapMutations(['changeLogin']),
        change(){
            var flag= this.isLogin ? false :true;
            this.$store.commit('changeLogin',flag);
        }

    },
    filters:{
        getVal(val){
            return val ? '是': '否'
        }
    }
}
</script>

<style>

</style>