<!--
 * @Author: resunoon
 * @Date: 2021-12-23 20:16:17
 * @Description: 菜单
-->
<template>
    <div class="menus">
        <div class="menu-list">
            industprod1
        </div>
        <div class="menu-list">
            industprod2
        </div>
        <div class="menu-list">
            industprod3
        </div>

    <div class="detail right">

    </div>
    <div class="detail right">

    </div>
    <div class="detail right">

    </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.leftmenu{
    text-align: center;
    display: flex;
    justify-content: space-evenly;
}

.menu-list{
    line-height: 95px;
    /* padding: 0 10px; */

}

.detail{
    position: fixed;
    top: 95px;
    left: 0;
    width: 50vw;
    height: 60vh;
    background-color: #fff;
    z-index: 99999999 !important;
}

</style>
