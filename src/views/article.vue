<template>
    <div class="contain">
        <div class="content">
            <div class="head fll clearfix" v-if="article.author">
                <div class="head_portrait fll clearfix ">
                    <img :src="article.author.avatar" alt="">
                     </div>
                    <div class="head_perinfo">
                        <div class="username" v-text="article.author.username">
                        </div>
                        <div class="user_info">
                            <p><span class="updateTime" v-text="article.createTime"></span><span class="readnum">阅读：<span v-text="article.readnumber"></span></span></p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="title">
                        <h1 v-text="article.title"></h1>
                    </div>
                    <div class="richText" v-html="article.content"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            article: {}
        };
    },
    methods: {
        getarticle() {
            this.$axios
                .get(`/article/${this.id}`)
                .then(res => {
                    if (res.code == 200) {
                        this.article = res.data;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        this.id = this.$route.query.id;
        this.getarticle();
    }
};
</script>
<style lang="scss" scoped>
.content {
    width: 960px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    margin: 50px auto 0;
    .head {
        height: 90px;
        width: 100%;
        padding: 20px;
        .head_portrait {
            border-radius: 50%;
            width: 70px;
            height: 70px;
            img {
                width: 70px;
                height: 70px;
            }
        }
    }
}
.head_perinfo {
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    .username {
        color: #333333;
        font-size: 14px;
        font-weight: 700;
    }
    .user_info {
        font-size: 15px;
        color: #909090;
        .readnum {
            margin-left: 20px;
        }
    }
}
.detail {
   
    padding:30px;
    .title{
margin-bottom: 30px;
    }
}
</style>

