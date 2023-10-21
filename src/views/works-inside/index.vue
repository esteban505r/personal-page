<template>
    <div id="works-inside-index">
        <Loading />

        <Header />

        <main id="main" class="site-main bg-half-ring-right bg-half-ring-top">
            <section id="page-content">
                <div class="wrapper">
                    <div id="single">
                        <div class="row gutter-width-lg single-content">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12" id="carousel">
                                <!-- <div v-for="itemPhoto in item.images" :key="itemPhoto" class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img :src="itemPhoto.imgSrc" alt="">
                                    </div>
                                </div> -->
                                <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators
                                    background="#ababab" img-width="1024" img-height="480"
                                    style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
                                    @sliding-end="onSlideEnd">
                                    <b-carousel-slide caption="First slide"
                                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                        img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

                                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                                        <h1>Hello world!</h1>
                                    </b-carousel-slide>

                                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                                
                                    <b-carousel-slide>
                                        <template #img>
                                            <img class="d-block img-fluid w-100" width="1024" height="800"
                                                src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                                        </template>
                                    </b-carousel-slide>

                                    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis,
                                            tincidunt
                                            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                        </p>
                                    </b-carousel-slide>
                                </b-carousel>
                            </div>

                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                <p class="date"><span class="large">25</span> May, {{ new Date().getFullYear() }}</p>

                                <h1 class="small">{{ item.title }}</h1>

                                <div class="description">
                                    <p>{{ item.description }}</p>

                                    <!-- <h5>Idea</h5>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p> -->

                                    <h5>Product features</h5>

                                    <ul>
                                        <li v-for="feature in item.features" v-bind="feature.id">{{ feature.description }}
                                        </li>
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
            item: WorksInsideData.worksInsideData.find((a) => a.id == this.$route.params.id)
        }
    },
    mounted: function () {
        document.body.classList.add('single');
        document.body.classList.add('single-portfolio');
        document.body.classList.add('bg-fixed');
        document.body.classList.add('bg-line');
    },
    beforeDestroy() {
        document.body.classList.remove('single');
        document.body.classList.remove('single-portfolio');
        document.body.classList.remove('bg-fixed');
        document.body.classList.remove('bg-line');
    },
    metaInfo: {
        title: 'Works inside | Esteban Lopez',
        titleTemplate: '%s'
    }
}
</script>

<style scoped lang="scss">
#carousel /deep/ {
    @import "~bootstrap/dist/css/bootstrap.min";
}
</style>