<template>
    <div class="home">
        <div>
            <div class="left_img">
                <p class="desc">蒙多，想去哪就去哪</p>
            </div>
            <div class="list" :data="userData" v-for="item in userData">
                <router-link :to="{path:'/article',query:{id:item._id}}" class="item">
                    <div class="item_top">
                        <div class="item_top_left">
                            <img :src="item.author.avatar">
                        </div>
                            <div class="item_top_right">
                                <div class="row_one">
                                    <span class="author_name" v-text="item.author.username"></span>
                                    <h2 class="title" v-text="item.title"></h2>
                                </div>
                                <div class="row_two">
                                    <span>浏览：<span v-text="item.readnumber"></span></span>
                                    <span>回复：<span v-text="item.commonnum"></span></span>
                                    <span>分类：<span v-text="item.category.name"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="item_bottom" v-text="item.contentText"></div>
                </router-link>

            </div>
        </div>
        <userBox class="flr clearfix"></userBox>
    </div>
</template>

<script>
import userBox from "@/components/userBox";
export default {
    components: {
        userBox
    },
    data() {
        return {
            userData: {}
        };
    },
    methods: {
        getarticles() {
            this.$axios
                .get("/article")
                .then(res => {
                    if (res.code == 200) {
                        this.userData = res.data;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        this.getarticles();
    }
};
</script>

<style lang="scss" scoped>
.home {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}
.left_img {
    width: 750px;
    height: 340px;
    background: url("/static/imgs/timg.jpg") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    .desc {
        background-color: #444;
        opacity: 0.7;
        height: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-weight: 400;
        color: #fff;
        font-size: 26px;
        line-height: 1.5;
        text-align: center;
    }
}
.list {
    box-sizing: border-box;
    margin-top: 10px;
    border-radius: 4px;
    padding: 2px 20px;
    background: #fff;
    .item {
        text-decoration: none;
        color: #000;
        display: block;
        padding-bottom: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .item_top {
            height: 80px;
            position: relative;
            display: flex;
            justify-content: space-between;
        }
        .item_bottom {
            height: 21px;
            line-height: 21px;
            margin-top: 15px;
        }
    }
}
.item_top_left {
    img {
        width: 80px;
        height: 80px;
    }
    margin-right: 15px;
}
.item_top_right {
    width: 620px;
    .row_one {
        .author_name {
            color: #409eff;
            font-weight: 700;
            padding-right: 8px;
            border-right: 1px solid #000;
        }
        .title {
            font-size: 18px;
            font-weight: 700;
            margin-left: 15px;
            display: inline;
        }
    }

    .row_two {
        box-sizing: border-box;
        padding: 4px 8px;
        margin-top: 15px;
        border-radius: 4px;
        width: 100%;
        background: #bbb;
        span {
            font-size: 14px;
            color: #333;
            font-weight: 700;
            margin-right: 30px;
        }
    }
}
</style>

