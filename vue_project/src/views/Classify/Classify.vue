<template>
  <div>
    <div class="w detail">详情页面</div>
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
import bus from '@/eventBus'
export default {
  data() {
    return {
      list: [],
    }
  },

  created() {
    bus.$on('send', (val) => {
      this.list = val
    })
  },
}
</script>


<style lang="less" scoped>
// 头部
.detail {
  height: 50px;
  color: chartreuse;
  text-align: center;
  font-size: 35px;
  line-height: 50px;
  background-color: rgb(238, 21, 191);
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
</style>