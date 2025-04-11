<script setup>
import CommonModal from "@/components/common/modal/CommonModal.vue";
import {ref, useTemplateRef} from "vue";

const showModal = ref(false)
const buttonRef = useTemplateRef("modalButton")

</script>

<template>
  <button ref="modalButton" class="button scale" @click="showModal = true">
    <fa-icon icon="fa-plus"/>
  </button>

  <common-modal :show="showModal"
                :width="500"
                :height="600"
                :button="buttonRef"
                @close="showModal = false">
    <template #header>
      <div>TEST</div>
    </template>
    <template #content>
      <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button class="bg-lime-500 mx-2">Save</button>
        <button class="bg-rose-500 mx-2">Cancel</button>
      </div>
    </template>
  </common-modal>
</template>

<style scoped>
.button {
  color: var(--green);
  transition: transform 0.2s ease-out;

  &:hover {
    color: var(--light-green);
  }
}

.scale:hover {
  transform: scale(1.5);
}
</style>