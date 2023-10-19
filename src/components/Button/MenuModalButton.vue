<template>
    <div class="menu-toggle align-self-center no-space">
        <button @click="toggleMenuModal" type="button" class="btn btn-link border-0 p-0 transform-scale-h" data-toggle="modal" data-target="#menu-modal">
            <span class="align-middle">Menu</span>
            <i class="icon-c icon-menu"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Menu-Modal-Button',
        methods: {
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
            }
        }
    }
</script>
