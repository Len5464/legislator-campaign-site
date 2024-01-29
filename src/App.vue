<script setup lang="ts">
  import Home from "./views/Home.vue";
</script>

<template>
  <component :is="Home" />
</template>

<style lang="scss">
  /* 首先匯入 BS 函數 */
  @import "../node_modules/bootstrap/scss/functions";

  /* 在此處匯入任何預設變數覆蓋 */
  @import "scss/variables.scss";

  /* 匯入所需的 Bootstrap 樣式表的其餘部分（包括任何獨立的顏色模式樣式表） */
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/variables-dark";

  /* 在此匯入任何scss預設map覆蓋 */
  /* 匯入bootstrap需要的其他部分 */
  @import "../node_modules/bootstrap/scss/maps";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/root";

  /* 依需求匯入bootstrap工具 */
  @import "../node_modules/bootstrap/scss/utilities";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/type";
  @import "../node_modules/bootstrap/scss/images";
  @import "../node_modules/bootstrap/scss/containers";
  @import "../node_modules/bootstrap/scss/grid";

  /* 依需求匯入bootstrap元件 */
  // @import "../node_modules/bootstrap/scss/tables";
  @import "../node_modules/bootstrap/scss/forms";
  @import "../node_modules/bootstrap/scss/buttons";
  @import "../node_modules/bootstrap/scss/transitions";
  // @import "../node_modules/bootstrap/scss/dropdown";
  // @import "../node_modules/bootstrap/scss/button-group";
  @import "../node_modules/bootstrap/scss/nav";
  @import "../node_modules/bootstrap/scss/navbar";
  // @import "../node_modules/bootstrap/scss/card";
  // @import "../node_modules/bootstrap/scss/accordion";
  // @import "../node_modules/bootstrap/scss/breadcrumb";
  // @import "../node_modules/bootstrap/scss/pagination";
  @import "../node_modules/bootstrap/scss/badge";
  // @import "../node_modules/bootstrap/scss/alert";
  // @import "../node_modules/bootstrap/scss/progress";
  // @import "../node_modules/bootstrap/scss/list-group";
  @import "../node_modules/bootstrap/scss/close";
  // @import "../node_modules/bootstrap/scss/toasts";
  @import "../node_modules/bootstrap/scss/modal";
  // @import "../node_modules/bootstrap/scss/tooltip";
  // @import "../node_modules/bootstrap/scss/popover";
  // @import "../node_modules/bootstrap/scss/carousel";
  // @import "../node_modules/bootstrap/scss/spinners";
  @import "../node_modules/bootstrap/scss/offcanvas";
  @import "../node_modules/bootstrap/scss/placeholders";
  @import "../node_modules/bootstrap/scss/helpers";

  /* 在此處添加其他自定義代碼 */

  @import "scss/base.scss";
  @import "scss/utils.scss";
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"); // font

  /* 依需求加入實用程序API，以便根據`_utilities.scss`中的 Sass 映射生成類 */
  @import "../node_modules/bootstrap/scss/utilities/api";
</style>
