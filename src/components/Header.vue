<template>
    <header class="header">
        <div class="header_top w1170">
            <h1 @click="$router.push('/')" class="header_title fll clearfix ">云笔记</h1>
            <el-button @click="$router.push('/writenote')" class="header_btn flr clearfix">写笔记</el-button>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
    height: 50px;
    background-color: #3f4055;
 
}
.header_title {
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    line-height: 2;
    cursor: pointer;
}
.header_btn {
    margin-top: 5px;
}
</style>
