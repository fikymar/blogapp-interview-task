<template>
  <div>
    <Layout>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style></style>
