<template>
  <div class="home-container">
    <!-- 快捷导航栏 start-->
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <ul>
            <li>

              <!-- 主页模块的路由链接 -->
              <router-link to="/" style="color:#FF00FF">宜宾学院校园购物平台</router-link>欢迎你!

            </li>

            <!-- 登录模块的路由链接 -->
            <li><a href="#">请 <router-link to="/login" style="color:blue">登录</router-link> &nbsp;&nbsp;</a>

              <!-- 注册模块路由的链接 -->
              <router-link to="/register" style="color:red">免费注册</router-link>

            </li>
          </ul>
        </div>
        <div class="fr">
          <ul>
            <li><a href="#">我的订单</a></li>
            <li></li>
            <li><a href="#" class="arrow_icon">我的二手清单</a></li>
            <li></li>
            <li><a href="#">平台会员</a></li>
            <li></li>
            <li><a href="#">企业采购</a></li>
            <li></li>
            <li><a href="#" class="arrow_icon">关注宜宾学院</a></li>
            <li></li>
            <li><a href="#" class="arrow_icon">客户服务</a></li>
            <li></li>
            <li><a href="#" class="arrow_icon">网站导航</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 快捷导航栏 end -->

    <!-- 路由占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 底部帮助模块mod_help start -->
    <div class="footer">
      <div class="w">
        <div class="mod_help">
          <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">购物指南</a></dd>
          </dl>
          <dl>
            <dt>配送方式</dt>
            <dd><a href="#">上门自提</a></dd>
            <dd><a href="#">限时送达</a></dd>
            <dd><a href="#">配送服务查询</a></dd>
            <dd><a href="#">配送费收取标准</a></dd>
            <dd><a href="#">校外配送</a></dd>
          </dl>
          <dl>
            <dt>支付方式</dt>
            <dd><a href="#">货到付款</a></dd>
            <dd><a href="#">在线支付</a></dd>
            <dd><a href="#">分期付款</a></dd>
            <dd><a href="#">邮局汇款</a></dd>
            <dd><a href="#">校园线下交易</a></dd>
          </dl>
          <dl>
            <dt>售后服务</dt>
            <dd><a href="#">售后政策</a></dd>
            <dd><a href="#">价格保护</a></dd>
            <dd><a href="#">退款说明</a></dd>
            <dd><a href="#">返修/退换货</a></dd>
            <dd><a href="#">取消订单</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">待定</a></dd>
            <dd><a href="#">待定</a></dd>
            <dd><a href="#">待定</a></dd>
            <dd><a href="#">待定</a></dd>
            <dd><a href="#">待定</a></dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <dd><a href="#">
                <img src="" alt="">
              </a>
            </dd>
            <dd>
              校园二手购客户端
            </dd>
          </dl>
        </div>
      </div>
      <!-- 底部帮助模块mod_help end -->
      <!-- 底部版权模块start -->
      <div class="w">
        <div class="mod_copyright">
          <div class="mod_copyright_one">
            <ul>
              <li><a href="#"></a>关于我们</li>
              <li><a href="#"></a>联系我们</li>
              <li><a href="#"></a>商家入驻</li>
              <li><a href="#"></a>营销中心</li>
              <li><a href="#"></a>友情链接</li>
              <li><a href="#"></a>关于我们</li>
              <li><a href="#"></a>营销中心</li>
              <li><a href="#"></a>友情链接</li>
              <li><a href="#"></a>关于我们</li>
              <li><a href="#"></a>营销中心</li>
            </ul>
          </div>
          <div class="mod_copyright_two">
            地址：四川省宜宾市翠屏区宜宾学院 邮编:644000 电话:0831—3545029 传真:3530929
          </div>
          <div class="mod_copyright_three">
            蜀ICP备11016844号 川公网安备 51010502010969号
          </div>
        </div>
      </div>
      <!-- 底部版权模块end -->
    </div>
  </div>
</template>



<script>
export default {
  name: 'App',
}
</script>



<style lang='less' scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.shortcut {
  height: 31px;
  background-color: #f1f1f1;
  line-height: 31px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.fl ul li {
  float: left;
  padding-right: 10px;
}
.fr ul li {
  float: left;
  margin-left: -1px;
}
/* 选择所有的偶数小li */
.shortcut .fr ul li:nth-child(even) {
  width: 1px;
  height: 12px;
  background-color: #666;
  margin: 9px 15px 0;
}
</style>