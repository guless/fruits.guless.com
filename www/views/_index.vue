<!--
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->
<template>
<div class="views-index">
    <table class="good-params">
        <tr>
            <td>品牌：桔里</td>
            <td>名称：贡品蜜广</td>
            <td>重量：5KG/箱</td>
            <td>售价：¥50元/箱</td>
            <td>购买方式：（微信号：13661210903）</td>
        </tr>
        <tr>
            <td>产地：江西省南丰县</td>
            <td>包装：礼盒装</td>
            <td>配送：顺丰包邮（注：包邮地区）</td>
            <td>到货：预计 2-3 天</td>
            <td rowspan="3" align="center"><img src="~@/assets/images/qrcode.jpeg" width="200" /></td>
        </tr>
        <tr>
            <td>采摘：当季现摘</td>
            <td>保质期：±15天</td>
            <td>储藏：0-8℃</td>
            <td>保鲜剂：无</td>
        </tr>
        <tr>
            <td>成色：金黄色</td>
            <td>果肉：无籽无渣</td>
            <td>果径：40mm ~ 60mm</td>
            <td>国家标准：<a href="http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=A7AA45633FB268E97DF629D89ED019CE">[GB 19051-2008]</a></td>
        </tr>
    </table>
</div>
</template>
<style lang="scss" scoped>
.good-params {
    margin: 0 auto;

    tr {
        background-color: #fff;
    }

    tr:nth-child(2n) {
        background-color: #f6f8fa;
    }

    td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
    }
}
</style>
