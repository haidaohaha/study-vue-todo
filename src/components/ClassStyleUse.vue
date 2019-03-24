<style scoped>
.activated{
  color: skyblue;
}
.fontSize{
  font-size: 20px;
}
</style>
<template>
  <div class="class_style_use">
    <hr> <button @click="handleClick">改变颜色</button>

    <h5 class="activated">方法一</h5>
    <h5 :class="{'activated':activate}">方法二</h5>
    <h5 :class="activated">方法三</h5>
    <h5 :class="[activated,'fontSize']">方法四</h5>
    <h5 :style="styleObj">方法五</h5>
    <h5 :style="[styleObj,againObj]">方法六</h5>
  </div>
</template>
<script>
export default {
  name: "class_style_use",
  computed: {},
  watch: {},
  methods: {
    handleClick(){
      this.activate=!this.activate;
      if(this.activate){
        this.styleObj=this.againObj;
        this.againObj={}
      }else{
        this.againObj=this.styleObj;
        this.styleObj={}
      }
    }
  },
  data() {
    return {
      activated:'activated',
      activate:false,
      styleObj:{
        color:'plum'
      },
      againObj:{
        color:'red'
      }
    };
  }
};
</script>
