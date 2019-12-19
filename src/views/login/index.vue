<template>
  <div class="login">
    <!--使用elemenent框架-->
    <el-card class="longin-vard">
      <!-- 放置背景图片-->
       <div class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
       </div>
       <!-- 放置表单 -->
       <el-form>
          <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
          <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
          </el-form-item>
          <!-- 表单域 -->
          <el-form-item>
          <el-input style="width:65%" placeholder="验证码"></el-input>
          <el-button style="float:right" type="primary" plain>发送验证码</el-button>
          </el-form-item>
          <!-- 复选框 -->
          <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
          <el-button style="width:100%" type="primary">登录</el-button>
          </el-form-item>

       </el-form>

    </el-card>
  </div>
</template>

<script>
export default {}

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
