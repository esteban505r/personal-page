<template>
    <div id="ui-index">
        <Loading />

        <Header />

        <main id="main" class="site-main">
            <PageTitle />

            <section id="examples" class="block spacer p-top-xl">
                <div class="wrapper">
                    <div class="row gutter-width-lg">
                        <div class="col-xl-8 col-lg-8 col-md-8 order-xl-0 order-lg-0 order-md-0 order-1">
                            <Content />

                            <Components />

                            <Utilities />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 order-xl-1 order-lg-1 order-md-1 order-0" id="sticky">
                            <Sidebar />
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
    import Header from '../../blocks/ui/Header';
    import Footer from '../../blocks/ui/Footer';

    import PageTitle from '../../blocks/ui/PageTitle';
    import Content from '../../blocks/ui/Content';
    import Components from '../../blocks/ui/Components';
    import Utilities from '../../blocks/ui/Utilities';
    import Sidebar from '../../blocks/ui/Sidebar';

    import Prism from 'vue-prismjs';
    import 'prismjs/themes/prism.css';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Content,
            Components,
            Utilities,
            Sidebar,
            Footer,
            Prism
        },
        mounted: function() {
            document.body.classList.add( 'ui' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'ui' );
            document.body.classList.remove( '"bg-fixed' );
            document.body.classList.remove( '"bg-line' );
        },
        metaInfo: {
            title: 'UI | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
