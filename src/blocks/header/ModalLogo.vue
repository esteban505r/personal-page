<template>
    <router-link title="Logo" class="logo logo-secondary transform-scale-h" to="/">
        <img @click="closeModal"  src="assets/img/logo/logo-2.svg" alt="Logo">
    </router-link>
</template>

<script>
    export default {
        name: 'Modal-Logo',
                computed: {
            currentPage() {
                return this.$route.path;
            },
            showMenuModal () {
                return this.$store.state.showMenuModal
            }
        },
        methods: {
            closeModal: function() {
                if (this.currentPage === '/') {
                    if (this.showMenuModal) {
                        this.$store.commit( 'closeMenuModal' );
                    }
                } else {
                    return;
                }
            }
        }
    }
</script>

<style>
  
</style>