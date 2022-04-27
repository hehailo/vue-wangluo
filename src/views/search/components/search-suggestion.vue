<template>
  <!-- 
        搜索框输入内容的时候，请求加载联想建议的数据
        将请求得到的结果绑定到模板中
     -->
  <div class="search-suggestion">
    <van-cell
      v-for="(text, index) in suggestions"
      :key="index"
      icon="search"
      @click="$emit('search', text)"
    >
      <template #title>
        <div v-if="text" v-html="highlight(text)"></div> </template
    ></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from "@/api/search";
import { debounce } from "lodash";
export default {
  name: "SearchSuggestion",
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return { suggestions: [] };
  },
  watch: {
    searchText: {
      // 防抖优化
      handler: debounce(function (newVal) {
        console.log(newVal);
        this.loadSearchSuggestions(newVal);
      }, 200),
      immediate: true,
    },
  },
  methods: {
    async loadSearchSuggestions(val) {
      try {
        const { data } = await getSearchSuggestions(val);
        this.suggestions = data.options;
        console.log(data);
      } catch (error) {
        this.$toast("数据获取失败，请稍后重试");
      }
    },
    highlight(text) {
      const highlightStr = `<span class="active">${this.searchText}</span>`;

      // 正则表达式 // 中间的内容都会当作匹配字符来使用，而不是数据变量
      // 如果需要根据数据变量动态的创建正则表达式，则手动 new RegExp
      // RegExp 正则表达式构造函数
      //    参数1：匹配模式字符串，它会根据这个字符串创建正则对象
      //    参数2：匹配模式，要写到字符串中
      const reg = new RegExp(this.searchText, "gi");
      return text.replace(reg, highlightStr);
    },
  },
};
</script>

<style lang="less" scoped>
.search-suggestion {
  /deep/ span.active {
    color: #3296fa;
  }
}
</style>