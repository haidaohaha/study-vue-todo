<template>
  <div class="detail">
    <Banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :categoryList="categoryList"
    />
    <Header/>
    <List :list="categoryList"/>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  name: "Detail",
  components: {
    Banner,
    Header,
    List
  },
  computed: {},
  data() {
    return {
      list: [
        {
          id: "001",
          title: "成人票",
          children: [
            { id: "0011", title: "成人票-特价票" },
            { id: "0012", title: "成人票-全家票" },
            { id: "0013", title: "成人票-本地票" },
            { id: "0014", title: "成人票-外地票" }
          ]
        },
        { id: "002", title: "学生票" },
        { id: "003", title: "儿童票" }
      ],
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/static/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInSucc);
    },
    getDetailInSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  activated() {
    // 解决是否请求
    // 默认使用缓存
    // activated 这个勾子 可以实现,也可以在 App.vue 修改
    // 添加  exclude="Detail" 移除这个页面的缓存
    // 对啊, 加或者不加,区别 是否发 Ajax 查看 network id 变化但是没发 请求.
  },
};
</script>

<style scoped>
.detail {
  /* height: 50rem; */
}
</style>
