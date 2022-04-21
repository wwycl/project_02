<template>
  <div class="register-container">
    <div class="w">
      <header>
        <!-- logo模块 -->
        <div class="logo">
          <a href="index.html"><img src="@/assets/logo1.png" alt="#"></a>
        </div>
      </header>
      <div class="registerarea">
        <div class="head">
          <h2>注册新用户</h2>
          <h3>我已有账号，去 <router-link to="/login" style="color:red">登录</router-link>
          </h3>
        </div>
        <!-- 表单部分 -->
        <div class="reg_form">
          <form id="form1">
            <ul>
              <li>
                <label for="">用户名:</label><input type="text" class="inp" name="usernane" v-model.trim="username" />
                <!-- <span class="error"><i class="error_icon"></i>用户名不正确，请重新输入</span> -->
              </li>
              <li>
                <!-- <label for="">短信验证码:</label><input type="text" class="inp">
                <span class="correct"><i class="correct_icon"></i>验证码格式不正确，请重新输入</span> -->
              </li>
              <li>
                <label for="">登录密码:</label><input type="password" class="inp" name="password" v-model.trim="password" />
                <span class="error"><i class="error_icon"></i>密码格式不正确，请重新输入</span>
              </li>
              <li class="safe">安全程度 <em class="ruo">弱</em> <em class="zhong">中</em> <em class="qiang">强</em>
              </li>
              <li>
                <label for="">确认密码:</label><input type="text" class="inp">
                <span class="error"><i class="error_icon"></i>密码格式不正确，请重新输入</span>
              </li>
              <li class="xieyi">
                <input type="checkbox" name="" id=""> 同意协议并注册<a href="#" class="skyblue">《知晓用户协议》</a>
              </li>
              <li><input type="submit" value="完成注册" class="btn" @click.prevent="initRegisterApi"></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async initRegisterApi() {
      let data = {
        username: this.username,
        password: this.password,
      }
      const { data: res } = await axios.post('http://127.0.0.1/api/reguser', qs.stringify(data))
      console.log(res)
      if (res.status === 0) {
        alert('注册新用户成功！')
        this.$router.push('/login')
      } else {
        alert('注册失败')
      }
    },
  },
}
</script>




<style lang="less" scoped>
.skyblue {
  color: #28a3ef;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 104px;
  border-bottom: 2px solid #c81523;
}
.logo {
  padding-top: 15px;
}
.registerarea {
  height: 512px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.registerarea .head {
  height: 43px;
  line-height: 43px;
  background-color: #ececec;
  padding: 0 20px;
}
.registerarea .head h2 {
  float: left;
}
.registerarea .head h3 {
  float: right;
}
.reg_form {
  width: 600px;
  margin: 50px auto 0;
}
.reg_form ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
  margin-right: 10px;
}
.reg_form ul li .inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ccc;
}
.error {
  color: crimson;
}
.correct {
  color: green;
}
.error_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  // background: url(../images/error.png);
  margin-top: -2px;
}
.correct_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  // background: url(../images/correct.png);
  margin-top: -2px;
}
.reg_form ul li {
  margin-bottom: 20px;
}
.safe {
  padding-left: 173px;
}
.safe em {
  padding: 0 12px;
  color: white;
}
.safe .ruo {
  background-color: red;
}
.safe .zhong {
  background-color: rgb(111, 231, 95);
}
.safe .qiang {
  background-color: yellow;
}
.xieyi {
  padding-left: 125px;
}
.xieyi input {
  vertical-align: middle;
}
.btn {
  background-color: #c81523;
  color: white;
  padding: 8px 70px;
  margin: 25px 125px;
  font-size: 14px;
}

/* 底部模块 */
.mod_copyright {
  text-align: center;
  padding-top: 30px;
}
.mod_copyright .mod_copyright_one ul li {
  display: inline-block;
  width: 60px;
  border-right: 1px solid black;
}
.mod_copyright .mod_copyright_one ul li:last-child {
  border: none;
}
.mod_copyright .mod_copyright_two {
  margin-top: 20px;
}
.mod_copyright .mod_copyright_three {
  margin-top: 5px;
}
</style>