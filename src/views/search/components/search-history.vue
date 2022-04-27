<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <!-- 默认插槽 右侧value部分 -->
      <span>全部删除</span>
      <span>完成</span>
      <van-icon name="delete" />
    </van-cell>
    <van-cell title="hello">
      <van-icon name="close" />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "SearchHistory",
    data(){
      return {
          
      }
  }
};
</script>

<style>
</style>