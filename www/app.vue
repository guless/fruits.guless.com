<!--
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->
<template>
<div id="app">
    <global-header></global-header>
    <main class="global-content"><router-view></router-view></main>
    <global-footer></global-footer>
</div>
</template>
<style lang="scss" src="@/assets/css/base.scss"></style>
<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .global-content {
        display: block;
        flex: 1;
        min-height: 0;
    }
}
</style>
