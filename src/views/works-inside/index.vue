<template>
    <div id="works-inside-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main bg-half-ring-right bg-half-ring-top">
            <section id="page-content">
                <div class="wrapper">
                    <div id="single">
                        <div class="row gutter-width-lg single-content">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                <div v-for="itemPhoto in item.images" :key="itemPhoto" class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img :src="itemPhoto.imgSrc" alt="">
                                    </div>
                                </div>
                            </div>
                        
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                <p class="date"><span class="large">25</span> May, {{ new Date().getFullYear() }}</p>
                                
                                <h1 class="small">{{item.title}}</h1>
                                
                                <div class="description">
                                    <p>{{item.description}}</p>

                                    <!-- <h5>Idea</h5>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p> -->

                                    <h5>Product features</h5>

                                    <ul>
                                        <li v-for="feature in item.features" v-bind="feature.id">{{feature.description}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import WorksInsideData from '../../data/works-inside/worksInsideData.json';

    export default {
        components: {
            Loading,
            Header,
            Footer
        },
        data() {
            return {
                item: WorksInsideData.worksInsideData.find((a)=>a.id==this.$route.params.id)
            }
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-portfolio' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-portfolio' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Works inside | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
