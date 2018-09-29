<template>
    <div class="register">
        <div class="frame">
            <h2>新用户注册</h2>
            <div>
                <el-input placeholder="用户名" v-model="userinfo.username"></el-input>
            </div>
            <div>
                <el-input placeholder="邮箱" v-model="userinfo.email"></el-input>
            </div>
            <div>
                <el-input type="password" placeholder="密码" v-model="userinfo.password" @keyup.enter.native='handleregister'></el-input>
            </div>
            <div>
                <el-button type="primary" @click="handleregister">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userinfo: {
                username: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        handleregister() {
            this.$axios
                .post("/user", this.userinfo)
                .then(res => {
                    if (res.code == 200) {
                        this.$message.success("注册成功");
                        setTimeout(() => {
                            this.$router.push("/");
                        }, 500);
                    } else {
                        this.$message.error(res.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.register {
    background-color: #fff;
    height: 326px;
    width: 714px;
    margin: 100px auto 0;
    padding-top: 30px;
    padding-bottom: 50px;
    color: #000;
    border-radius: 6px;

    .frame {
        height: 326px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 500px;
        margin: 20px auto;
        h2 {
            margin: 0 auto;
        }
        .el-button {
            width: 500px;
        }
    }
}
</style>
