<!--
 * @Author: resunoon
 * @Date: 2021-12-18 06:52:48
 * @Description:
-->
<template>
  <div class="container">
    <Navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
