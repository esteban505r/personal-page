<template>
    <fragment>
        <footer id="footer" class="site-footer">
            <div class="wrapper no-space">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 align-self-center">
                        <div class="copyright">
                            <p>© {{ new Date().getFullYear() }} Esteban Lopez</p>
                        </div>
                    </div>
                
                    <div class="col-xl-8 col-lg-8 align-self-center">
                        <div class="menu float-xl-right float-lg-right">
                            <MenuSecondary />
                        </div> 
                    </div>
                </div>
            </div>
        </footer>

        <div id="modals">
            <MenuModal />

            <SearchModal />
        </div>
    </fragment>
</template>

<script>
    import { Fragment } from 'vue-fragment';

    import MenuModal from '../../components/Modal/MenuModal';
    import SearchModal from '../../components/Modal/SearchModal';
    import MenuSecondary from '../General/MenuSecondary';

    export default {
        name: 'Footer',
        components: {
            Fragment,
            MenuModal,
            SearchModal,
            MenuSecondary
        }
    }
</script>
