<!--
 * @Author: resunoon
 * @Date: 2021-12-18 07:38:10
 * @Description: 导航栏
-->

<template>
    <!-- header-container -->
    <div class="header">
        <!-- header-navs -->
        <div class="menu-container">
            <div class="menu left-menu"><LeftMenu/></div>
            <div class="middle-menu">ASN-LOGO</div>
            <div class="menu right-menu"><RightMenu/></div>
        </div>
    </div>
</template>

<script>
import LeftMenu from './menus/LeftMenu.vue';
import RightMenu from './menus/RightMenu.vue';

export default {
  components: {
    LeftMenu,
    RightMenu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

.menu-container {
    height: 95px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    font-family: 'Montserrat';
    color: white;
}
.menu{
    width: 35%;
    padding: 0 10px;
}
.middle-menu{
    background-color: #343434;
    width: 20%;

    /* showonly */
    line-height: 95px;
    text-align: center;
}
</style>
