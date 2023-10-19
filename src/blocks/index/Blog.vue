<template>
    <section id="blog" class="block spacer p-top-xl">
        <div class="wrapper">
            <h2 class="text-right">
                <router-link title="Blogging" class="transform-scale-h" to="/journal">
                    <span class="line">Blogging</span>
                </router-link>
            </h2>
        </div>

        <div class="bg-gray-light ptb-blog">
            <div class="wrapper">
                <div class="row gutter-width-lg">
                    <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="card card-post">
                            <div class="card-top position-relative">
                                <router-link :title="item.title" :to="item.link">
                                    <div class="img object-fit overflow-hidden">
                                        <div class="object-fit-cover transform-scale-h">
                                            <img class="card-top-img" :src="item.imgSrc" :alt="item.title">
                                        </div>
                                    </div>
                                </router-link>

                                <div class="card-category">
                                    <router-link :title="item.category" class="btn btn-sm btn-light transform-scale-h border-0" :to="item.categoryLink">{{ item.category }}</router-link>
                                </div>
                            </div>

                            <div class="card-body border">
                                <h5 class="card-title">
                                    <router-link :title="item.title" :to="item.link">{{ item.title }}</router-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlogData from '../../data/blog/blogData.json';

    export default {
        name: 'Blog',
        data() {
            return {
                items: BlogData.blogData.slice(0, 3)
            }
        },
        mounted() {
            const parent = document.querySelector( '#blog .row' );
            const thirdChild = parent.lastChild;

            thirdChild.classList.remove('col-md-6');
            thirdChild.classList.remove('col-sm-6');

            thirdChild.classList.add('d-lg-block');
            thirdChild.classList.add('d-md-none');
            thirdChild.classList.add('d-sm-none');
        }
    }
</script>
