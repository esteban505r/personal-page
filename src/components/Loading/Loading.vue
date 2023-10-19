<template>
    <transition appear leave-active-class="animated slideOutRight">
        <div class="loading" ref="loading" v-show="isLoading">
            <div class="wrapper h-100">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="loading-content">
                        <div class="logo logo-secondary">
                            <transition appear>
                                <img class="animated zoomIn" v-if="show" src="assets/img/logo/logo-2.svg" alt="Logo">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                isLoading: true,
                show: false,
            }
        },
        mounted() {
            this.show = true;

            setTimeout( () => {
                this.isLoading = false;
            }, 1000 )
        }
    }
</script>
