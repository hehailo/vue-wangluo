<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <!-- 默认插槽 右侧value部分 -->
      <div v-if="isDeleteShow">
        <!-- 
          porp数据如果是引用类型，可一修改：
          obj.xxx = xx; arr.push(xxx);等等；
          不可以重新复制  arr = [];
          如需修改 则徐交给父组件修改
        -->
        <span @click="$emit('clear-search-histories')">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </div>
      <van-icon @click="isDeleteShow = true" v-else name="delete" />
    </van-cell>

    <van-cell
      :title="item"
      v-for="(item, index) in searchHistories"
      :key="index"
      @click="onDelete(item, index)"
    >
      <van-icon v-show="isDeleteShow" name="close" />
    </van-cell>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {removeItem, setItem} from '@/utils/storage'
export default {
  name: "SearchHistory",
  data() {
    return {
      isDeleteShow: false, // 控制删除显示状态
    };
  },
  computed:{
    ...mapState(["user"]),
  },
  props: {
    searchHistories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDelete(item, index) {
      if (this.isDeleteShow) {
         this.searchHistories.splice(index,1);
          // 删除  持久化
          if(this.user){
            this.$emit("delete",item);
          }else{
           setItem("search-histories",this.searchHistories)
          }
         return;
      }
      //非删除状态 进行搜索
      this.$emit("search",item)
    },
  },
};
</script>

<style>
</style>