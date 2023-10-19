<template>
    <div id="journal-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <section id="page-content" class="spacer p-top-xl">
                <div id="blog">
                    <div class="wrapper">
                        <div class="row gutter-width-lg">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <Blog />
                            
                                <LoadMore />
                            </div>
                        
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                <Sidebar />
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

    import PageTitle from '../../blocks/journal/PageTitle';
    import Blog from '../../blocks/journal/Blog';
    import LoadMore from '../../components/Loadmore/Loadmore';
    import Sidebar from '../../blocks/journal/Sidebar';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Blog,
            LoadMore,
            Sidebar,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'blog' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'blog' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Journal | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
