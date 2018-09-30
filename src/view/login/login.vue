<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit" @on-send-captcha="handleSendCaptcha" :errorMessage="errorMessage"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from "_c/login-form";
import { mapActions } from "vuex";
export default {
  components: {
    LoginForm
  },
  data() {
    return {
      errorMessage:''
    }
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo", "handleGetCaptcha"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        if (res.code == 0) {
          this.$router.push({
            name: "home"
          });
        } else {

        }
        // this.getUserInfo().then(res => {
        //   this.$router.push({
        //     name: 'home'
        //   })
        // })
      });
    },
    handleSendCaptcha({ userName }) {
      this.handleGetCaptcha({ userName }).then(res => {
        if (res.code == 0) {
          this.$Message.success("验证码发送成功");
        } else {
          this.$Message.error("操作失败");
        }
      });
    }
  }
};
</script>

<style>
</style>
