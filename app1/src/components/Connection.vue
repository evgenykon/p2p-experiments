<script setup>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
</script>

<template>
  <Toolbar  style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <Button label="Files" text plain />
    </template>

    <template #center>
      <IconField iconPosition="left">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

  </Toolbar>
</template>

<style scoped lang="scss">

</style>