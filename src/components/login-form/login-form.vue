<template>
  <Form>
    <FormItem :error="cellError">
      <Input v-model="form.userName" placeholder="请输入手机号">
        <span slot="prepend">
          <Icon :size="16" type="ios-phone-portrait"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem :error="codeError">
      <Row>
        <Col span="12">
      <Input type="password" v-model="form.password" placeholder="请输入验证码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
      </Col>
      <Col span="2">&nbsp;{{countDown == 0 ? '' : countDown}}</Col>
      <Col span="10">
        <Button @click="handleSendCaptcha" type="primary" long :disabled="sentDisable">发送验证码</Button>
      </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import {isValidCell} from "@/libs/util"
export default {
  name: "LoginForm",
  props: {
    errorMessage: {type: String }
  },
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      countDown: 0,
      cellError: '',
      codeError: ''
    }
  },
  computed: {
    sentDisable () {
      return this.countDown !== 0
    }
  },
  watched: {
    errorMessage (val) {
      this.codeError = val
    }
  },
  methods: {
    handleSubmit () {
      if (this.checkValid() === false) {
        return
      }
      this.$emit('on-success-valid', {
        userName: this.form.userName,
        password: this.form.password
      })
    },
    handleSendCaptcha () {
      if (this.checkCellValid() === false) {
        return
      }
      this.countDown = 60
      this.handleCountDown()
      this.$emit('on-send-captcha', {
        userName: this.form.userName.trim()
      })
    },
    handleCountDown () {
      var _self = this
      if (this.countDown > 0) {
        this.countDown--
        setTimeout(function () {
          _self.handleCountDown()
        }, 1000)
      }
    },
    checkValid() {
      var cell = this.form.userName.trim()
      if (cell === '') {
        this.cellError = '手机号不能为空'
        return false
      } else {
        this.cellError = ''
      }
      if (isValidCell(cell) === false) {
        this.cellError = '手机号格式错误'
        return false
      } else {
        this.cellError = ''
      }
      var code = this.form.password.trim()
      if (code === '') {
        this.codeError = '验证码不能为空'
        return false
      } else {
        this.codeError = ''
      }
      return true
    },
    checkCellValid() {
      var cell = this.form.userName.trim()
      if (cell === '') {
        this.cellError = '手机号不能为空'
        return false
      } else {
        this.cellError = ''
      }
      if (isValidCell(cell) === false) {
        this.cellError = '手机号格式错误'
        return false
      } else {
        this.cellError = ''
      }
      return true
    },
    clearMessage() {
      this.cellError = ''
      this.codeError = ''
    }
  }
}
</script>
