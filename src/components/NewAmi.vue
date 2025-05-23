<template>
    <h2>Emits</h2>
    <div class="card text-center" v-on:submit.prevent="submitData">
        <input v-model="enteredName"e="text">
        <input v-model="enteredPhone" type="text">
        <input v-model="enteredMail" type="text">
        <button>bouton</button>
    </div class="card text-center">
</template>

<script>
export default {
    emits: {
    'add-ami': [],
    },
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredMail: ','
        }
    },
    methods: {
        submitData(){
            this.$emit('add-ami', this.enteredMail, this.enteredName, this.enteredPhone)
        }
    },
}
</script>