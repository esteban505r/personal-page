<template>
    <div id="home-index">

       <main id="main" class="site-main">

            <section id="my-works" class="block spacer m-top-xl">
                <div class="wrapper">
                    <h2>
                        <router-link title="My works" class="transform-scale-h" to="/works">My <span class="line">works</span></router-link>
                    </h2>
                </div>

            </section>

            <section id="contact" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="text-center">
                        <h3 class="mb-0 after">Like my work? Want to have a good quality applications? <br>You can contact me now!</h3>

                        <div class="block spacer p-top-lg">
                            <router-link title="Contacts" to="/contacts" class="btn btn-dark btn-bold transform-scale-h border-0">Contact</router-link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    
    </div>
</template>

<script>


    export default {
        components: {
         
        },
        mounted: function() {
            document.body.classList.add( 'home' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'home' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Home | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
