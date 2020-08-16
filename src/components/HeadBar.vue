<template>
    <div class="content">
        <img src='../assets/main.png' style="width:10%;height:60px;float:left"/>
        <el-menu :default-active="activeIndex" :router="true" class="el-menu" mode="horizontal" >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">个人中心</template>
            <el-menu-item index="/leave">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            <el-submenu index="2-4-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-4-3">选项3</el-menu-item>
            </el-submenu>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4" :route="{path:'/leave'}">
                留言板
        </el-menu-item>
        <el-menu-item index="5">关于我</el-menu-item>
        <el-menu-item index="6">文章书籍</el-menu-item>
        <el-menu-item index="7">通知公告</el-menu-item>
        <el-menu-item index="8">关于我</el-menu-item>
    </el-menu>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
       // this.$router.push({path:'leave'})
      }
    }
}
</script>

<style scoped>

.content{
    width:100%;
}
.el-menu{
    float:right;
    width:85%;
}
</style>