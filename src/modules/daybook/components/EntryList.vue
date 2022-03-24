<template>
<div class="entry-list-container">
    <div class="px-2 pt-2 mb-2">
        <input type="text" class="form-control" placeholder="Buscar entradas..">
    </div>

    <div class="entry-scrollarea">
        <Entry v-for="item in entries" :key="item" />
    </div>
</div>
</template>

<script>import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";

export default {
    components:{
        Entry: defineAsyncComponent(()=> import("./Entry.vue"))
    },
    computed: {
        ...mapState('journal',['entries'])
    }
};
</script>

<style lang="scss">
.entry-list-container{
    border-right: 1px solid rgb(102, 102, 102);
    height: calc(100vh - 56px);
}

.entry-scrollarea{
    height: calc(100vh - 120px);
    overflow-y: auto;
}
</style>