<script>
export default {
  data() {
    return {
      text: [
      '<p style="background-color: #000;color: #fff;">普通样式</p>',
      '<p style="background-color: yellow;"><span style="color: red;"><b>多层样式合并</b></span></p>',
      '<p><span style="color: #000000"><span style="background-color: #ffff00">这个是图片+文案</span></span></p>',
      `<p style="background-color: blue;font-size: 20px;">
        <span style="color: red;"><b>PartA</b></span>
        <b style="color: green;">PartB</b>
      </p>`,
      '<p style="line-height: 22px;color: #666666;"><b>Hippy</b>(<a href="https://hippyjs.org">https://hippyjs.org</a>)是为前端开发人员设计的跨端框架，支持<b>React</b>和<b>Vue</b>两种语法，可平滑迁移到<b>Web</b>。iOS增量</p><p style="color: red;">1MB</p>，Android增量最小<p style="color: red;">2.5MB</p><img style="height: 280px;width: 340px;" src="xxx"/>'
      ].join(''),
      styles: {
        p: {
          color: '#666666',
          // 保证内部 span 排列
          display: 'flex',
          flexWrap: 'wrap',
        },
        img: {
          height: 400,
          width: 400,
        }
      }
    };
  },
  methods: {
    pressed(url) {
      console.log(url);
    }
  }
};
</script>

<template>
  <div style="display: flex;">
    <hippy-vue-html class="hippy" :html="text" :styles="styles" @link-press="pressed"></hippy-vue-html>
    <div v-html="text" />
  </div>
</template>

<style>
p {
  margin-block: 0;
}
.hippy span {
  display: block;
}
</style>
