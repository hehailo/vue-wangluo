<template>
  <div>
    <van-nav-bar title="文件上传" class="page-nav-bar" />
    <input type="file" @change="handleFileChange" />
    <van-button icon="plus" @click="handleUpload" type="primary"
      >上传文件</van-button
    >
  </div>
</template>

<script>
export default {
  name: "fileUpload",
  data: () => ({
    //函数体
    container: {
      file: null,
    },
  }),
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.container.file = file;
    },
    handleUpload() {},
  },
};
</script>

<style>
</style>