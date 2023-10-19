<template>
    <div class="row gutter-width-lg with-pb-lg">
        <div v-for="item in items" :key="item.id" class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
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
</template>

<script>
    import BlogData from '../../data/blog/blogData.json';

    export default {
        name: 'Blog',
        data() {
            return {
                items: BlogData.blogData
            }
        }
    }
</script>
