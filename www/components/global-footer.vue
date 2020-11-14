<!--
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->
<template>
<footer class="global-footer"><div class="global-footer-wrapper">
    <div class="global-footer-legal">
        <div class="global-footer-links">
            <a href="javascript:void(0);">隐私政策</a>
            <a href="javascript:void(0);">使用条款</a>
            <a href="javascript:void(0);">销售政策</a>
            <a href="javascript:void(0);">法律信息</a>
        </div>
        <div class="global-footer-copyright">Copyright © 2020 南丰桔里农业有限公司，保留所有权利。</div>
        <div class="global-footer-license">
            <a class="mr-2" href="http://beian.miit.gov.cn/" target="_blank">京ICP备10214630号</a>
            <a class="mr-2" href="javascript:void(0);">营业执照</a>
        </div>
    </div>
</div></footer>
</template>
<style lang="scss" scoped>
.global-footer {
    background: #f6f8fa;
    color: #959da5;
    font-size: 12px;
    border-top: 1px solid #e1e4e8;

    a {
        color: inherit;
    }

    &-wrapper {
        max-width: 980px;
        padding: 0 22px;
        margin: 0 auto;
    }

    .global-footer-legal {
        padding: 8px 15px;
    }

    .global-footer-links {
        display: flex;
        justify-content: center;
        padding: 4px 0 8px 0;

        a {
            padding: 0 12px;
        }

        a:not(:last-child) {
            border-right: 1px solid #d1d5da;
        }
    }

    .global-footer-copyright {
        text-align: center;
    }

    .global-footer-license {
        text-align: center;
    }

    @media only screen and (max-width: 767px) {
        &-wrapper {
            padding: 0;
        }
    }
}
</style>