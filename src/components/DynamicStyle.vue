<template>
  <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
    <div class="col">
      <div
        class="card"
        @click="selectionCard(1)"
        :style="{ backgroundColor: selectCard1 == true ? 'red' : 'aqua' }"
      >
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div
        class="card"
        @click="selectionCard(2)"
        :style="{ backgroundColor: selectCard2 ? 'green' : 'violet' }"
      >
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  components: {},
  props: {
    // v-model
    modelValue: {
      default: '',
    },
  },
  emits: {
    // v-model event with validation
    'update:modelValue': value => value !== null,
  },
  data() {
    return {
      selectCard1: false,
      selectCard2: false,
      styleObject: {
        color: 'red',
        fontSize: '53px',
      },
    }
  },
  methods: {
    selectionCard(uneCard) {
      if (uneCard === 1) {
        this.selectCard1 = !this.selectCard1
      }
      if (uneCard === 2) {
        this.selectCard2 = !this.selectCard2
      }
    },
  },
})
</script>
