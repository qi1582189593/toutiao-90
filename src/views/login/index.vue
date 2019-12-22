<template>
  <div class="login">
    <!--使用elemenent框架-->
    <el-card class="longin-vard">
      <!-- 放置背景图片-->
       <div class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
       </div>
       <!-- 放置表单,绑定表单数据对象,绑定数据的校验规则-->
       <el-form :model="loginForm" :rules="loginRules" ref="myForm">
          <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
          <el-form-item prop="mobile" >
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" ></el-input>
          </el-form-item>
          <!-- 表单域 -->
          <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:65%" placeholder="验证码"></el-input>
          <el-button style="float:right" type="primary" plain>发送验证码</el-button>
          </el-form-item>
          <!-- 复选框 -->
          <el-form-item prop="agree">
          <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitLogin">登录</el-button>
          </el-form-item>

       </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 绑定表单数据对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议

      },
      loginRules: {
        //   决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [
          { required: true, message: '请输入手机号码' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不对' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位' }
        ],
        agree: [
          { validator: function (rule, value, callback) {
            // 自定义校验函数
          // rule 规则 没啥用
          // value 要校验的字段的值
          // callback 是一个回调函数
            // if (value) {
            //   // 认为已经勾选
            //   callback()// 认为当前的规则校验通过了
            // } else {
            //   callback(new Error('必须同意用户协议'))// 如果没有勾选 认为当前校验失败 应该停止
            // }
            // 三元表达式
            value ? callback() : callback(new Error('必须同意用户协议'))
          } }
        ]

      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          if (isOK) {
          //  说明校验通过  应该调用登录接口
          // axios  body参数 get参数地址参数 路由参数  查询参数
          // body参数 axios  data
          // get参数  axios params
            this.$axios({
              url: '/authorizations', // 请求地址 axios 没有指定 类型 默认走get类型
              method: 'post', // 类型
              data: this.loginForm // body 参数
            }).then(result => {
            // 只接受正确结果
            // 前端缓存 登录成功返回给我们的令牌
              window.localStorage.setItem('user-token', result.data.token)
              this.$router.push('/home') // 跳转到home页
            }).catch(() => {
              // this.$message({
              //   type: 'warning',
              //   message: '手机号或者验证码错误!'
              // })
            })
          }
        }
      })
    }
  }
}

</script>

<style lang='less' scoped>
.login{
 background-image: url(../../assets/img/back.jpg);
 height: 100vh;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
  .longin-vard{
    width: 440px;
    height: 350px;
      .title{
        text-align:center;
        margin-bottom: 30px;
          img{
            height: 45px;
          }
      }
  }
}

</style>
