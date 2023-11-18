<template>
  <div class="wrapper">
    <div class="content">
      <slot class="me-6"></slot>
    </div>
    <div class="content">
      <slot class="me-6"></slot>
    </div>
    <div class="content">
      <slot class="me-6"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap-utilities.scss";
  .wrapper {
    overflow: hidden;
    display: flex;
    width: 100vw;
    padding: 10px;
    background-color: var(--bs-primary, #da7d4a);
  }
  .content {
    color: #fff;
    display: inline-block;
    white-space: nowrap;
    font-family: "Mantou Sans";
    font-size: 64px;
    line-height: 105%;
    letter-spacing: 2px;
    animation: goLeft 20s linear infinite;
    @include media-breakpoint-down(lg) {
      font-size: 40px;
    }
  }
  // animate
  @keyframes goLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
