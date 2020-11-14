<!--
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->
<template>
<div class="views-mandarin">
    <section class="swiper">
        <div class="swiper-images"><img src="~@/assets/images/p4.jpg" width="100%" /></div>
    </section>
    <section class="product mb-3">
        <header class="text-bold p-1 bg-gray border">产品信息：</header>
        <table class="product-table">
            <tr>
                <td>品牌：桔里</td>
                <td>名称：贡品蜜广</td>
            </tr>
            <tr>
                <td>重量：5KG/箱</td>
                <td>售价：¥50元/箱</td>
            </tr>
            <tr>
                <td>产地：江西省南丰县</td>
                <td>包装：礼盒装</td>
            </tr>
            <tr>
                <td>配送：顺丰包邮（注：见下方包邮地区）</td>
                <td>到货：预计 2-3 天</td>
            </tr>
            <tr>
                <td>采摘：当季现摘</td>
                <td>保质期：±15天</td>
            </tr>
            <tr>
                <td>储藏：0-8℃</td>
                <td>保鲜剂：无</td>
            </tr>
            <tr>
                <td>成色：金黄色</td>
                <td>果肉：无籽无渣</td>
            </tr>
            <tr>
                <td>果径：40mm ~ 60mm</td>
                <td>国家标准：<a href="http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=A7AA45633FB268E97DF629D89ED019CE">[GB 19051-2008]</a></td>
            </tr>
        </table>
    </section>
    <section class="product mb-3">
        <header class="text-bold p-1 bg-gray border">包邮地区：</header>
        <div class="note error p-3 border m-0">
            <p>1、江西、广东、安徽、福建、湖南、湖北、江苏、上海、浙江、北京、河北、海南、天津、山西、广西、河南、山东等地区包邮。</p>
            <p>2、黑龙江、吉林、辽宁、宁夏、内蒙古、甘肃、贵州、云南、陕西、四川、重庆等地区补 10 元邮费差价。</p>
            <p>3、青海、新疆、西藏等地区不建议购买，原因是发货时间太长，桔子容易损坏，另外邮费太贵不划算。</p>
        </div>
    </section>
    <section class="product mb-3">
        <div class="p-3">
            <router-link class="btn btn-primary btn-block btn-large" to="/contact" tag="button"><span>联系购买</span></router-link>
        </div>
    </section>
</div>
</template>
<style lang="scss" scoped>
.swiper {
    position: relative;
    width: 100%;
    &-images {
        position: relative;
        img { display: block; }
    }
}
.product {
    position: relative;
    max-width: 980px;
    margin: 0 auto;
    padding: 0 22px;

    &-table {
        width: 100%;
        td {
            padding: 6px 13px;
            border: 1px solid #dfe2e5;
        }
    }
}

@media only screen and (max-width: 767px) {
    .product {
        padding: 0;
    }
}
</style>