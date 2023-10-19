<template>
    <header id="header" class="site-header">
        <div class="wrapper d-flex justify-content-between">
            <div class="align-self-center">                    
                <router-link title="Logo" class="logo primary-logo transform-scale-h" to="/">
                    <img src="assets/img/logo/logo.svg" alt="Logo">
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
