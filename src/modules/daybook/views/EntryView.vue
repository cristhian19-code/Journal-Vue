import { defineAsyncComponent } from 'vue';
<template>
    <div class="entry-list d-flex justify-content-between p-2 align-items-center">
        <div>
            <span class="text-success fs-3 fw-bold">23</span>
            <span class="mx-2 fs-3">Marzo</span>
            <span class="mx-2 fs-4 fw-ligth">2022, Miercoles</span>
        </div>

        <div class="d-flex gap-1">
            <button class="btn btn-danger">
                Borrar
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button class="btn btn-dark">
                Subir foto
                <i class="fa fa-upload" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"></textarea>
    </div>
    
    <img class="img-thumbnail" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="entry-picture">

    <FloatingButton
        icon="fa fa-save"
    />
</template>

<script>import { defineAsyncComponent } from "vue";

export default {
    components: {
        FloatingButton: defineAsyncComponent(() => import("../components/FloatingButton.vue"))
    }
};
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    resize: none;
    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 100px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
    right: 10px;
}
</style>