<template>
  <div class="search-container">
    <!--用来在ios 键盘上显示搜索按钮 -->
    <form action="/">
      <van-search
        v-model="searchText"
        shape="round"
        background="#3296fa"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
      <!-- 搜索框聚焦则 搜搜结果隐藏  -->
    </form>
    <!-- 
        没有输入内容的时候 ，仅展示历史记录
        有输入字符的时候展示，仅联想关键词
        触发搜索后展示 搜索结果
     -->
   <!-- 搜索结果 -->
    <SearchResult v-if="isResultShow" :searchText="searchText"></SearchResult>

    <!-- 联想建议 -->
    <!-- 
        搜索框输入内容的时候，请求加载联想建议的数据
        将请求得到的结果绑定到模板中
     -->
    <SearchSuggestion v-else-if="searchText" :searchText="searchText"  @search="onSearch"></SearchSuggestion>

     <!-- 搜索历史记录 -->
    <SearchHistory v-else  @search="onSearch"></SearchHistory>
  </div>
</template>

<script>
import SearchHistory from "./components/search-history.vue";
import SearchResult from "./components/search-result.vue";
import SearchSuggestion from "./components/search-suggestion.vue";
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      isResultShow: false, // 控制搜索结果的展示
    };
  },
  methods: {
    onSearch(val) {
        this.searchText = val;
        this.isResultShow = true;
    },
    onCancel() {
      this.$router.back();
    },
  },
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggestion,
  },
};
</script>

<style scoped lang="less">
.search-container {
  .van-search__action {
    color: #fff;
  }
  .search-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
