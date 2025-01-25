<template>
  <div class="find-block">
    <Input :type="ETypeInput.NUMBER" />
    <Input :type="ETypeInput.TEXT" />
    <CommonWrapper />
  </div>
</template>

<script setup lang="ts">
import CommonWrapper from "@/components/CommonWrapper.vue";
import Input from "@/components/Input.vue";
import { ETypeInput } from "@/enum";
</script>

<style lang="scss">
.find-block {
  position: relative;
  @include FlexColumnCenterCenter;
  gap: getRem(15);
}
</style>
