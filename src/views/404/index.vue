<template>
    <div id="404-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main bg-half-ring-up">
            <PageTitle />

            <div id="page-content" class="block">
                <div class="wrapper">
                    <p class="spacer p-top-lg w-50 m-0">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                    
                    <div class="spacer p-top-xs d-xl-flex d-lg-flex d-md-flex justify-content-between block m-top-extrasmall">
                        <div class="align-self-center w-50">
                            <SearchForm />
                        </div>
                        
                        <BackToHome />
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/404/PageTitle';
    import SearchForm from '../../components/Forms/SearchForm';
    import BackToHome from '../../components/Button/BackToHome';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            SearchForm,
            BackToHome,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'error404' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'error404' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: '404 | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
