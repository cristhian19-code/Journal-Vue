<template>
    <button class="btn btn-primary">
        <i :class="`fa fa-2x ${icon}`" aria-hidden="true"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
};
</script>

<style lang="scss" scoped>
button{
    border-radius: 50%;
    bottom: 10px;
    height: 60px;
    position: fixed;
    right: 10px;
    width: 60px;
}
</style>