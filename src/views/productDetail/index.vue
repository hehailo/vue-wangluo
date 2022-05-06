<template>
  <div class="porduct-deail">
    <van-nav-bar
      title="产品详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 头部 -->
    <van-card>
      <template #title>
        <div class="enterprise-name">新农（郑州）饲料有限公司</div>
      </template>
      <template #thumb>
        <div class="enterprise-photo">农饲</div>
      </template>
      <template #tags>
        <van-tag type="success">服务类</van-tag>
        &nbsp;&nbsp;
        <van-tag type="danger">有限责任公司</van-tag>
      </template>
    </van-card>
    <!-- 详细信息 -->
    <van-grid :column-num="3" icon-size="12">
      <van-grid-item text="何晨曦">
        <template #icon>
          <div class="topText">法定代表人</div>
        </template>
      </van-grid-item>
      <van-grid-item text="2022-05-06">
        <template #icon>
          <div class="topText">成立日期</div>
        </template>
      </van-grid-item>
      <van-grid-item text="10人以下">
        <template #icon>
          <div class="topText">人员规模</div>
        </template>
      </van-grid-item>
      <van-grid-item text="500万元">
        <template #icon>
          <div class="topText">注册资金</div>
        </template>
      </van-grid-item>
      <van-grid-item text="1008611">
        <template #icon>
          <div class="topText">统一社会信用代码</div>
        </template>
      </van-grid-item>
      <van-grid-item text="在营">
        <template #icon>
          <div class="topText">经营状态</div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 经营范围 -->
    <van-cell title="经营范围" :label="desc" />
    <!-- 地址 -->
    <div class="addrZone">
      <van-cell title="郑州市高新区红叶路11号" icon="location-o" is-link>
        <template> 地图/导航 </template>
      </van-cell>
    </div>
    <!-- 电话 -->
    <div class="mobileZone">
      <van-cell title="19522951024">
        <template #icon>
          <van-icon class="van-cell__left-icon" name="phone-o" />
        </template>
        <template #right-icon>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </template>
      </van-cell>
    </div>
    <!-- 企业动态 -->
    <div class="statusZone">
      <van-cell title="企业动态" />
      <van-grid :border="false">
        <van-grid-item icon="exchange" text="历史变更" />
        <van-grid-item icon="todo-list-o" text="招标信息" />
        <van-grid-item icon="cash-back-record" text="中标信息" />
        <van-grid-item icon="volume-o" text="企业资讯" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
  data() {
    return {
      activeNames: ["1"],
      value1: 0,
      option1: [
        { text: "更多手机", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      desc: "一直致力于教槽料的研究和开发,积极与国内外高校和科研机构合作,推广养猪技术、动物营养新概念,向世界一流农牧企业学习与合作。本公司生产的乳猪料、教槽料、保育料等饲料产拼.",
    };
  },
  props: {
    productId: {
      type: String,
      // required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.porduct-deail {
  .van-nav-bar {
    background-color: #3296fa;
    /deep/ .van-icon,
    /deep/ .van-nav-bar__text,
    /deep/ .van-nav-bar__title {
      color: #fff !important;
    }
  }
  .van-card__thumb {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .enterprise-photo {
    width: 80%;
    height: 80%;
    background-color: pink;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .enterprise-name {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 40px;
    // background-color: yellow;
  }
  .topText {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .van-van-cell__title {
    padding: 0 10px;
  }
  .addrZone {
    margin: 10px 0;
    .van-cell__title {
      flex-basis: 120px;
    }
  }
  .mobileZone {
    /deep/ .van-dropdown-menu__bar {
      height: 40px;
      box-shadow: none;
      .van-ellipsis {
        font-size: 14px;
      }
    }
    .van-dropdown-menu {
      margin-right: 10px;
    }
    .van-cell__value {
      align-self: right;
    }
  }
}
</style>