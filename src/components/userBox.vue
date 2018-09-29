<template>
    <div class="user">
        <div class="register" v-if="!userinfo.username">
            <div>
                <el-input class="msg" placeholder="请输入邮箱" v-model="formData.email"></el-input>
            </div>
            <div>
                <el-input class="msg" placeholder="请输入密码" type="password" v-model="formData.password" @keyup.enter.native='handleLogin'></el-input>
            </div>
            <div>
                <el-button class="msg" type="primary" @click="handleLogin">登录</el-button>
            </div>
            <div>
                <el-button class="msg" @click="$router.push('/register')">注册</el-button>
            </div>
        </div>
        <div class="userinfo" v-else>
            <div class="avatar"><img :src="userinfo.avatar"></div>
                <div class="username item">用户名:<span>{{userinfo.username}}</span></div>
                <div class="email item">email:<span>{{userinfo.email}}</span></div>
                <div class="item">
                    <el-button type="warning" @click="handlelogout">退出登录</el-button>
                </div>
            </div>
        </div>

</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            formData: {
                email: "12345@qq.com",
                password: "123456"
            }
        };
    },
    methods: {
        handleLogin() {
            this.$axios
                .post("/login", this.formData)
                .then(res => {
                    if (res.code == 200) {
                        this.$message.success("登录成功");
                        this.$store.commit("CHANGE_USERINFO", res.userData);
                    } else {
                        this.$message.error(res.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        handlelogout() {
            let user = {
                avatar: "",
                username: "",
                email: ""
            };
            this.$axios
                .get("/logout")
                .then(res => {
                    if (res.code == 200) {
                        this.$message.success(res.msg);
                        this.$router.push("/");
                        this.$store.commit("CHANGE_USERINFO", user);
                    } else {
                        this.$store.commit("CHANGE_USERINFO", user);
                        this.$message.error(res.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    computed: {
        ...mapState(["userinfo"])
    }
};
</script>

<style scoped lang='scss'>
.user {
    width: 360px;
    height: 332px;
    background-color: #fff;
    border-radius: 5px;
    .register {
        height: 332px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .msg {
            width: 300px;
            margin-left: 30px;
        }
    }
    .userinfo {
        .avatar {
            img {
                height: 150px;
            }
            margin: 30px auto 0;
            width: 150px;
        }
        .item {
            margin: 10px auto 0;
            width: 250px;
            span {
                display: inline-block;
                margin-left: 50px;
            }
        }
        .el-button {
            width: 250px;
        }
    }
}
</style>
