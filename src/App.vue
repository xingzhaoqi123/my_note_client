<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
export default {
    name: "App",
    components: {
        Layout
    }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
body {
    background-color: #b9b9b9;
}
.w1170 {
    width: 1170px;
    margin: 0 auto;
}
.fll {
    float: left;
}
.flr {
    float: right;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
</style>
