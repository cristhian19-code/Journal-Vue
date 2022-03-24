<template>
<nav class="navbar bg-dark">
    <a class="navbar-brand text-white" href="">
        <img src="@/assets/logo.png" alt="Vue Logo" class="d-inline-block align-text-top mx-1"
        height="24">
        Daybook
    </a>

    <div class="d-flex">
        <button class="btn btn-danger mx-2">
            <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
        </button>
    </div>
</nav>
</template>
<script>
export default {
    name: 'NavbarItem',
};
</script>