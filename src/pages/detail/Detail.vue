<template>
  <div class="detail">
    <Banner/>
    <Header/>
    <List :list="list"/>
  </div>
</template>

<script>
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
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.detail {
  height: 50rem;
}
</style>
