<template>
<div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionada</h1>

    <FloatingButton />
</div>
</template>


<script>
import { defineAsyncComponent } from "vue";

export default {
    components: {
        FloatingButton: defineAsyncComponent(()=> import("../components/FloatingButton.vue")),
    }
}
</script>

<style lang="scss" scoped> 
div{
    height: 100%;
}
</style>