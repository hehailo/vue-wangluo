<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="加载失败，请点击重试"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in list" :key="index" :title="item.title" @click="$router.push({name:'productDetail',params:{
        productId:item.art_id
      }})">
        <div class="detail" slot="label">
          <div class="author">
            <van-icon name="user-o" /> {{ item.aut_name }}
          </div>
          <div class="labelName"><van-tag :type="item.art_id>300? 'success':'danger'" >{{item.art_id>300? '一级':'二级'}}</van-tag></div>
          <div class="publishTime">
            <van-icon name="clock-o" /> {{ item.pubdate }}
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getSearchResult } from "@/api/search";

export default {
  name: "SearchResult",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perPage: 20,
      error: false,
    };
  },
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  methods: {
    async onLoad() {
      try {
        // 1. 请求获取数据
        const { data } = await getSearchResult({
          page: this.page, // 页码
          per_page: this.perPage, // 每页大小
          q: this.searchText, // 查询关键词
        });

        // 2. 将数据添加到数组列表中
        const { results } = data;
        console.log("search-results",results);
        this.list.push(...results);

        // 3. 将本次加载中的 loading 关闭
        this.loading = false;

        // 4. 判断是否还有数据
        if (results.length) {
          // 如果有，则更新获取下一个数据的页码
          this.page++;
        } else {
          // 如果没有，则将加载状态 finished 设置为结束
          this.finished = true;
        }
      } catch (err) {
        // 展示加载失败的提示状态
        this.error = true;

        // 加载失败了 loading 也要关闭
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.search-result {
  .detail {
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    .author {
      color: black;
    }
    .publishTime {
      color: rgb(167, 75, 5);
    }
  }
}
</style>