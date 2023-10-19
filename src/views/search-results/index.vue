<template>
    <div id="search-results-index">
        <Loading />

        <Header />

       <main id="main" class="site-main">
           <PageTitle />

            <section id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-lg with-pb-lg nth-last-child-3-pb-0">
                        <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <h4>
                                        <router-link title="The only guide to travel insurance you’ll ever need" class="d-block" :to="item.link">{{ item.head }}</router-link>
                                    </h4>
                                    
                                    <p class="p-small">
                                        <router-link :title="item.category" class="text-secondary bold" :to="item.categoryLink">{{ item.category }}</router-link>
                                    </p>

                                    <p>{{ item.description }}</p>
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

    import PageTitle from '../../blocks/search-results/PageTitle';
    import SearchItems from '../../data/search-results/searchItems.json';

    export default {
        data() {
            return {
                items: SearchItems.searchItems
            };
        },
        components: {
            Loading,
            Header,
            PageTitle,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'search-results' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'search-results' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Search results | - Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
