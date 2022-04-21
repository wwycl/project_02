<template>
  <div class="home-container">
    <div class="header w">
      <!-- logo模块 -->
      <div class="logo">
        <!-- 放h1标签是为了提权 -->
        <h1>
          <a href="index.html" title="校园二手购">
            宜宾学院购物商城
          </a>
        </h1>
      </div>
      <!-- 搜索框模块 -->
      <div class="search">
        <input type="search" name="" id="" placeholder="二手教材">
        <button>搜索</button>
      </div>
      <!-- hotwords热点词模块 -->
      <div class="hotwords">
        <ul>
          <li>
            <a href="#" style="color: red;">二手教材</a>
          </li>
          <li>
            <a href="#">学霸笔记</a>
          </li>
          <li>
            <a href="#">寝室用品</a>
          </li>
          <li>
            <a href="#">收留小宠物</a>
          </li>
          <li>
            <a href="#">低价处理</a>
          </li>
          <li>
            <a href="#">急需物品</a>
          </li>
          <li>
            <a href="#">其他热搜物品</a>
          </li>
        </ul>
      </div>
      <!-- shoper购物车模块 -->
      <div class="shoper">
        <a href="carindex.html" style="font-size: 14px;">我的购物车</a>
        <i class="count">0</i>
      </div>
    </div>
    <!-- header头部结束 -->

    <!-- 左侧nav导航栏start -->
    <div class="nav">
      <div class="w">
        <div class="dropdown">
          <div class="dt">
            校园商品分类
          </div>
          <div class="dd">
            <ul>
              <li v-for="item in classifyList" :key="item.id" @click="initClassify(item.classify)">
                <router-link to="/classify">{{item.classify}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navitems">
          <ul>
            <li><a href="#">低价处理</a></li>
            <li><a href="#">限时抢购</a></li>
            <li><a href="#">学校超市</a></li>
            <li><a href="#">今日需求</a></li>
            <li><a href="#">闪购</a></li>
            <li><a href="#">团购</a></li>
            <li><a href="#">全网购</a></li>
            <li><a href="#">浏览记录</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- nav导航栏end -->

    <!-- 首页main板块start -->
    <div class="w">
      <div class="main">
        <div class="fous">

          <!-- 轮播图 -->

          <div class="block">
            <el-carousel trigger="click" height="470px" :interval="3000">
              <el-carousel-item v-for="item in lunboList" :key="item.id">
                <img :src="item.img_url" alt="#">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 轮播图区域结束 -->

          <ol class="fous_top"></ol>
          <div class="fous_left">
            <a href="#"></a>
          </div>
          <div class="fous_right">
            <a href="#"></a>
          </div>
        </div>
        <!-- 快报模块 -->
        <div class="newflash">
          <div class="nf_top">
            <dl>
              <dt>
                <h3>校园购快报</h3>
                <p>更多</p>
              </dt>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <dd><a href="#"><span>[快报]</span>大四毕业季 大量二手好品在线抢购 后续精彩类容请点击，你会发现惊喜</a></dd>
              <!-- 音乐界面链接 -->
              <a href="http://yongdew.web3v.vip" target="_blank">
                <div class="music">来首音乐，放松一下吧<span class="el-icon-video-play"></span></div>
              </a>

            </dl>
          </div>

        </div>
      </div>
    </div>
    <!-- 首页main板块end -->

    <!-- 推荐模块标题recom start -->
    <div class="w">
      <div class="recom">
        <div class="recom_left">
          <img src="@/assets/nice.png" alt="#">
          <h2>好品推荐</h2>
        </div>
      </div>
    </div>
    <!-- 推荐模块标题recom end -->

    <!-- 全部商品信息模块paihang start -->
    <div class="w paihang clearfix" overflow:auto>
      <div class="paihang_bd" overflow>
        <ul>
          <li v-for="item in list" :key="item.id">
            <img :src="item.goods_img" alt="">
            <div class="blue">
              <p>{{item.goods_title}}</p>
              <i>加入购物车</i>
              <h2>价格: ￥{{ item.goods_price}}</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
// 导入bus
import bus from '@/eventBus'

// 导入 axios
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      classifyList: [],
      lunboList: [],
    }
  },
  methods: {
    // 数组去重
    unique(arr) {
      //Set数据结构，它类似于数组，其成员的值都是唯一的
      return Array.from(new Set(arr)) // 利用Array.from将Set结构转换成数组
    },

    // 获取全部商品信息
    async initGoodsApi() {
      const { data: res } = await axios.get('http://127.0.0.1/api/goods')
      if (res.status === 0) {
        console.log(res)
        this.list = res.data
      }
    },

    // 获取商品分类信息
    async GoodsClassify() {
      const { data: res } = await axios.get('http://127.0.0.1/api/goods/classify')
      if (res.status === 0) {
        this.classifyList = res.data
      }
    },

    // 获取轮播图信息
    async lunbo() {
      const { data: res } = await axios.get('http://127.0.0.1/api/goods/lunbo')
      if (res.status === 0) {
        this.lunboList = res.data
      }
    },

    // 点击商品分类，获得分类商品信息
    initClassify(classify) {
      const newList = this.list.filter((item) => item.goods_classify == classify)
      bus.$emit('send', newList)
    },
  },

  created() {
    this.initGoodsApi()
    this.GoodsClassify()
    this.lunbo()
  },
}
</script>




<style lang="less" scoped>
.header {
  position: relative;
  height: 105px;
}

.header .logo {
  position: absolute;
  top: 20px;
  width: 171px;
  height: 61px;
}

.logo a {
  display: block;
  width: 1771px;
  height: 80px;
  /* 插入背景图片，no-repeat图片不叠加 */
  background: url('@/assets/logo1.png') no-repeat;
  /* 隐藏链接的文字 */
  font-size: 0;
}

.search {
  position: absolute;
  top: 25px;
  left: 346px;
  width: 538px;
  height: 36px;
  background-color: pink;
  border: 2px solid red;
}

.search input {
  float: left;
  width: 454px;
  height: 32px;
  padding-left: 10px;
}

.search button {
  float: left;
  width: 80px;
  height: 32px;
  background-color: red;
  font-size: 16px;
  color: #fff;
}

.hotwords {
  position: absolute;
  top: 76px;
  left: 346px;
}

.hotwords ul li {
  display: inline-block;
  padding-right: 20px;
}
/* 购物车图标 */
.shoper {
  position: absolute;
  top: 25px;
  right: 60px;
  width: 140px;
  height: 35px;
  background-color: #f7f7f7;
  border: 1px solid #dfdfdf;
  text-align: center;
  line-height: 35px;
}

.shoper::before {
  content: '';
  font-family: 'icomoon';
  color: red;
  font-size: 16px;
}

.shoper::after {
  content: '';
  font-family: 'icomoon';
  vertical-align: bottom;
  font-size: 16px;
}

.count {
  position: absolute;
  top: -5px;
  left: 95px;
  height: 14px;
  line-height: 14px;
  border-radius: 7px 7px 7px 0;
  background-color: red;
  padding: 0 5px;
}

.nav {
  height: 50px;
  line-height: 47px;
  border-bottom: 2px solid red;
}

.dropdown {
  float: left;
  width: 210px;
}

.dt {
  margin-top: 50px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-align: center;
  background-color: #b1191a;
}

.dd {
  height: 423px;
  background-color: red;
}

.dropdown .dd ul li a {
  display: block;
  width: 208px;
  height: 31px;
  background-color: red;
  line-height: 31px;
  padding-left: 20px;
  margin-left: 2px;
  font-size: 14px;
  color: white;
  font-weight: 400;
}
/* 鼠标经过dd时 */
.dropdown .dd ul li a:hover {
  background-color: #fff;
  color: black;
  font-weight: normal;
}

.dropdown .dd ul li {
  position: relative;
}

.dropdown .dd ul li a::after {
  position: absolute;
  right: 10px;
  content: '';
  font-family: 'icomoon';
  top: 1px;
  font-size: 16px;
}

.navitems ul li {
  float: left;
}

.navitems ul li a {
  display: inline-block;
  font-size: 16px;
  padding: 0 25px;
}

.main {
  margin-left: 220px;
  width: 980px;
  height: 480px;
}

.main .fous {
  float: left;
  width: 721px;
  height: 480px;
}

.lunbo {
  position: absolute;
  top: 0;
  left: 0;
  width: 600%;
}

.lunbo li {
  float: left;
}

.fous img {
  width: 721px;
  height: 475px;
}

.main .newflash {
  float: right;
  width: 250px;
  height: 473px;
}

.fous {
  position: relative;
  overflow: hidden;
  width: 721px;
  height: 475px;
}

.fous_top {
  position: absolute;
  top: 10px;
  left: 350px;
}
.current {
  background-color: red;
}
.fous_top li {
  display: inline-block;
  margin-left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid white;
}
/* 左右箭头 */
.fous_right,
.fous_left {
  display: none;
}
.fous_left::after {
  position: absolute;
  top: 190px;
  left: 10px;
  width: 20px;
  height: 40px;
  content: '';
  font-family: 'icomoon';
  color: white;
  font-size: 20px;
  background-color: #5c5251;
  line-height: 40px;
}
.fous_right::after {
  position: absolute;
  top: 190px;
  right: 10px;
  width: 20px;
  height: 40px;
  content: '';
  font-family: 'icomoon';
  color: white;
  font-size: 20px;
  background-color: #5c5251;
  line-height: 40px;
}

.nf_top {
  width: 250px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #dfdfdf;
}

.nf_zhong {
  overflow: hidden;
  width: 250px;
  height: 213px;
  border: 1px solid #dfdfdf;
}
#zaixian {
  margin-top: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}
.nf_top dl dt {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #dfdfdf;
  padding-left: 10px;
}

.nf_top dl dt h3 {
  float: left;
}

.nf_top dl dt p {
  float: right;
  margin-right: 15px;
}

.nf_top dl dt p::after {
  content: '';
  font-family: 'icomoon';
}

.nf_top dl dd {
  height: 26px;
  line-height: 26px;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.nf_top dl dd span {
  font-weight: 700;
}

.nf_top dl dd:first-of-type {
  margin-top: 5px;
}

.nf_zhong ul {
  width: 260px;
  height: 220px;
}

.nf_zhong ul li {
  float: left;
  text-align: center;
  width: 63px;
  height: 71px;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
}

.nf_zhong ul li i {
  display: inline-block;
  width: 24px;
  height: 28px;
  margin-top: 12px;
  // background: url(assets/icons.png) -17px -15px;
}

/* 推荐模块start */
.recom {
  height: 163px;
  margin-top: 12px;
  img {
    width: 70px;
    height: 70px;
    border: none;
  }
}

.recom_left {
  float: left;
  width: 100%;
  height: 163px;
  background-color: #fff186;
  text-align: center;
  padding-top: 35px;
}

.recom_left h2 {
  color: rgb(255, 136, 0);
  margin-top: 10px;
  font-size: 26px;
}

.recom_right {
  float: left;
}

/* 推荐模块end */
/* 排行模块paihang start */
.paihang {
  width: 1200px;
  background-color: rgba(214, 84, 186, 0.089);
}

.paihang_hd {
  height: 77px;
  line-height: 77px;
  text-align: center;
}
.paihang_bd ul li {
  float: left;
  width: 268px;
  height: 350px;
  color: #fff;
  border: 1px solid #ccc;
  margin-left: 25px;
  background-color: #ccc;
  margin-top: 15px;
}

.paihang_bd ul li img {
  width: 220px;
  height: 210px;
  margin-left: 20px;
  margin-top: 10px;
}

.paihang_bd ul li i {
  display: inline-block;
  margin-top: 8px;
  color: red;
}

.paihang_bd ul li h2 {
  margin-top: 8px;
  color: #ff6000;
}

.blue {
  height: 108px;
  padding-top: 10px;
  margin-top: 20px;
  color: black;
}
.blue h2 {
  margin-bottom: 0px;
}

// 轮播图样式
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// 放音乐
.music {
  margin-top: 20px;
  height: 65px;
  color: white;
  font-size: 20px;
  line-height: 65px;
  background-color: #67c23a;
}
.music:hover {
  color: rgb(214, 228, 11);
}
</style>