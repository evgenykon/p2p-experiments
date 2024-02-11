<script setup>
import { ref, watch } from 'vue'
import {marked} from 'marked'
import Textarea from 'primevue/textarea';
import Connection from "./components/Connection.vue";

const text = ref(
`# test
- Row 1
- Row 2
`)
const compiledMarkdown = ref('')

compiledMarkdown.value = marked(text.value);

watch(text, async (newValue, oldValue) => {
  compiledMarkdown.value = marked(text.value);
})
</script>

<template>
  <Connection></Connection>
  <div class="editor">
    <Textarea rows="25" v-model="text" />
    <div v-html="compiledMarkdown" class="markdownView"></div>
  </div>

</template>

<style lang="scss">
#app {
  width: 100%;
  .editor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    .markdownView {
      text-align: left;
      padding: 0 0 0 15px;
      h1, h2, h3, h4, h5 {
        padding:0;
        margin:0;
      }
    }
  }
}
</style>
