<template>
    <div class="search-toggle align-self-center">
        <button @click="toggleSearchModal" type="button" class="btn btn-link border-0 p-0 transform-scale-h" data-toggle="modal" data-target="#search-modal">Search</button>
    </div>
</template>

<script>
    export default {
        name: 'Search-Modal-Button',
        methods: {
            toggleSearchModal: function( event ) {
                this.$store.commit( 'toggleSearchModal' )
            }
        }
    }
</script>
