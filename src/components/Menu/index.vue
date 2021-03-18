<template>
  <div class="menu">
    <el-menu :default-active="defaultActiveId" class="el-menu-vertical-demo">
      <el-menu-item :index="item.id" v-for="item in menus" :key="item.id">
        <i :class="item.icon"></i>
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import menus from '../../lib/const/menus'

const defaultActiveId = computed(() => {
  return 'vue'
})

</script>
<style lang="less" scoped>
.menu {
  .el-menu {
    border-right: none;
  }
}
</style>