<template>
  <div class="home-container">
    <!-- 搜索按钮 -->
    <van-nav-bar class="page-nav-bar">
      <template #title>
        <van-button
          class="search-btn"
          type="info"
          size="small"
          round
          icon="search"
          to="/search"
          >搜索</van-button
        >
      </template></van-nav-bar
    >
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" lazy-load fit="cover" class="imgShow" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
        @click="toUpload"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {
    toUpload() {
      this.$router.push("/upload")
    },
  },
};
</script>

<style scoped lang="less">
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }
  .imgShow {
    width: 710px;
    height: 300px;
    margin: 10px 20px;
  }
}
</style>