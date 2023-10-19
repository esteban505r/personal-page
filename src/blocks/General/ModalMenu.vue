<template>
    <nav class="menu-primary">
        <ul class="clearfix list-unstyled">
            <li @click="closeOnSameRoute" :class="[ ( currentPage === '/' ) ? activeClass : '', 'menu-item' ]">
                <router-link title="Home" to="/">Home</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('about') ? activeClass : '', 'menu-item' ]">
                <router-link title="About" to="/about">About</router-link>
            </li>

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('works') ? activeClass : '', 'menu-item' ]">
                <router-link title="Works" to="/works">Works</router-link>
            </li>

            <!-- <li @click="closeOnSameRoute" :class="[ currentPage.includes('journal') ? activeClass : '', 'menu-item' ]">
                <router-link title="Journal" to="/journal">Journal</router-link>
            </li> -->

            <li @click="closeOnSameRoute" :class="[ currentPage.includes('contacts') ? activeClass : '', 'menu-item' ]">
                <router-link title="Contacts" to="/contacts">Contacts</router-link>
            </li>
        </ul>
    </nav> 
</template>

<script>
    export default {
        name: 'Modal-Menu',
        data() {
            return {
                activeClass: 'current-menu-item'
            }
        },
        methods: {
            closeOnSameRoute: function( event ) {
                const clickTargetHref = event.target.getAttribute( 'href' );

                if ( clickTargetHref === this.$route.path ) {
                    this.toggleMenuModal();
                }
            },
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
                this.$store.commit( 'variablesNull' );
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
