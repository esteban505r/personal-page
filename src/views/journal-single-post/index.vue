<template>
    <div id="journal-single-post-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <section id="page-content" class="spacer m-top-xl">
                <div class="wrapper">
                    <div id="single">
                        <div class="row gutter-width-lg">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                                <div class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img src="assets/img/placeholder/1113x510.jpg" alt="What to do when holidays go wrong">
                                    </div>
                                </div>
                                
                                <div class="bg-half-ring-left"></div>
                                
                                <p class="date">
                                    <span class="large">25</span> May, {{ new Date().getFullYear() }}
                                </p>

                                <Meta />

                                <div class="description">
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>

                                    <blockquote>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</blockquote>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut.</p>
                                </div>

                                <Tags />

                                <Comments />
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

    import PageTitle from '../../blocks/journal-single-post/PageTitle';
    import Meta from '../../blocks/journal-single-post/Meta';
    import Tags from '../../blocks/journal-single-post/Tags';
    import Comments from '../../blocks/journal-single-post/Comments';
    import Sidebar from '../../blocks/journal/Sidebar';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            Meta,
            Tags,
            Comments,
            Sidebar,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single-post' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single-post' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Journal single post | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
