<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <div id="subApp"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './components/Menu/index.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="less" scoped>
.el-header {
  position: fixed;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: center;
}
.el-aside {
  position: fixed;
  top: 60px;
  left: 0;
  right: 200px;
  bottom: 0;
  border-right: 1px solid #e6e6e6;
}

.el-main {
  position: fixed;
  top: 60px;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>