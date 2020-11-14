<!--
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-->
<template>
<header class="global-header"><div class="global-header-wrapper">
    <input id="global-navmenu-state" type="checkbox" />
    <nav class="global-navmenu">
        <ul class="global-navlist">
            <!-- <li class="global-navitem global-navmenu-brandlogo">
                <router-link class="global-navlink" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#fff"/></svg>
                </router-link>
            </li> -->
            <li class="global-navitem global-navmenu-subgroup">
                <router-link class="global-navmenu-subitem global-navlink" to="/mandarin">蜜广小桔子</router-link>
                <router-link class="global-navmenu-subitem global-navlink" to="/contact">联系购买</router-link>
            </li>
            <!-- <li class="global-navitem">
                <router-link class="global-navlink" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="48" viewBox="0 0 17 48"><g><rect fill="none" width="17" height="48"/><path fill="#fff" d="M14.5,15.98H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,18.48v11a2.5,2.5,0,0,0,2.5,2.5h12a2.5,2.5,0,0,0,2.5-2.5v-11A2.5,2.5,0,0,0,14.5,15.98Zm-6-2.875a3.243,3.243,0,0,1,3.212,2.875H5.288A3.243,3.243,0,0,1,8.5,13.105ZM16,29.48a1.5,1.5,0,0,1-1.5,1.5H2.5A1.5,1.5,0,0,1,1,29.48v-11a1.5,1.5,0,0,1,1.5-1.5h12a1.5,1.5,0,0,1,1.5,1.5Z"/></g></svg>
                </router-link>
            </li> -->
        </ul>
    </nav>
</div></header>
</template>
<style lang="scss" scoped>
.global-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    color: #fff;
    z-index: 10;

    &-wrapper {
        max-width: 980px;
        padding: 0 22px;
        margin: 0 auto;
    }

    #global-navmenu-state {
        display: none;
    }

    .global-navmenu {
        height: 48px;

        .global-navlist,
        .global-navitem,
        .global-navlink {
            height: 100%;
        }

        .global-navlist {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .global-navmenu-subgroup {
            flex: auto;
            display: flex;
            justify-content: space-around;
            padding: 0 15px;
        }

        .global-navmenu-subitem {
            position: relative;
            padding: 0 15px;

            &[aria-current="page"] {
                opacity: 0.8 !important;
            } 
        }

        .global-navlink {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.5;
            min-width: 48px;
            transition: opacity 0.28s cubic-bezier(0.52, 0.16, 0.24, 1);
            color: #fff;

            &:hover {
                opacity: .8;
            }
        }
    }

    @media only screen and (max-width: 767px) {
        &-wrapper {
            padding: 0;
        }
    }
}
</style>