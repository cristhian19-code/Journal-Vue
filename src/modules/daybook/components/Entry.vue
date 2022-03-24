<template>
    <div class="entry-container mb-3 pointer p-2" @click="selectEntry">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">23</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2022, Miercoles</span>
        </div>

        <div
            class="entry-description"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia repudiandae rerum repellendus culpa a officiis enim doloribus non accusantium, adipisci excepturi, sapiente iusto? Maxime quae ut vel est eum!</div>
    </div>
</template>

<script>
export default {
    name: 'EntryItem',
    methods: {
        selectEntry() {
            this.$router.push(
                {
                    name: "entry-id",
                    params: {
                        entryId: 4
                    }
                }
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}

.entry-container {
    border-bottom: 1px solid #2c3e50;
    border-radius: 5px;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        box-shadow: 2px 2px 5px #e4e4e4;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>