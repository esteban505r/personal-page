<template>
    <fragment>
        <transition @enter="startTransitionModal" @after-enter="endTransitionModal" @before-leave="endTransitionModalLeave" @after-leave="startTransitionModalLeave">
            <div v-show="showSearchModal" ref="modal" class="modal fade modal-adv-1" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal" aria-hidden="true">
                <div class="modal-dialog modal-full" role="document">
                    <div class="wrapper">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button @click="closeModal" type="button" class="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">
                                        <span class="align-middle">Close</span>
                                        <i class="icon-c icon-close"></i>
                                    </span>
                                </button>
                            </div>

                            <div class="modal-body d-flex flex-column justify-content-center w-75 m-auto vh-100">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    </fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import { mapMutations } from 'vuex';

    import SearchForm from '../Forms/SearchForm';

    export default {
        name: 'Search-Modal',
        components: {
            SearchForm,
            Fragment
        },
        computed: {
            showSearchModal () {
                return this.$store.state.showSearchModal
            }
        },
        methods: {
            ...mapMutations([
                'toggleSearchModal'
            ]),
            closeModal() {
                document.getElementById( 'search-modal' ).classList.remove( 'show' );

                setTimeout(() => this.$store.commit( 'closeSearchModal' ), 150 );
            },
            startTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.add( 'd-block' );
                }

                if ( ! this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.add( 'd-block' );
                }
            },
            startTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.remove( 'd-block' );
                }

                if ( this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.remove( 'show' );
                }
            },
            endTransitionModal() {
                if ( ! this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.add( 'show' );
                }

                if ( ! this.$refs.modal.classList.contains( 'show' ) ) {
                    this.$refs.modal.classList.add( 'show' );
                }

                if ( ! document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.add( 'modal-open' )
                }
            },
            endTransitionModalLeave() {
                if ( this.$refs.backdrop.classList.contains( 'show' ) ) {
                    this.$refs.backdrop.classList.remove( 'show' );
                }

                if ( this.$refs.modal.classList.contains( 'd-block' ) ) {
                    this.$refs.modal.classList.remove( 'd-block' );
                }

                if ( this.$refs.backdrop.classList.contains( 'd-block' ) ) {
                    this.$refs.backdrop.classList.remove( 'd-block' );
                }
            }
        },
        mounted() {
            document.addEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27) {
                    this.closeModal();
                }
            });
        },
        beforeDestroy() {
            if ( document.body.classList.contains( 'modal-open' ) ) {
                document.body.classList.remove( 'modal-open' )
            }

            document.removeEventListener( 'keydown', e => {
                if ( e.isComposing || e.keyCode === 27) {
                    this.closeModal();
                }
            });

            this.$store.commit( 'variablesNull' );
        }
    }
</script>
