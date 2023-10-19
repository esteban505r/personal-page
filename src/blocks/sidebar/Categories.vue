<template>
    <div id="categories-2" class="widget widget_categories">
        <h5 class="widget-title">Categories</h5>		

        <ul>
            <li v-for="item in items" :key="item.id" class="cat-item">
                <router-link :title="item.title" :to="item.link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import CategorieList from '../../data/sidebar/categoriesData';

    export default {
        name: 'Categories',
        data() {
            return {
                items: CategorieList.categoriesData
            }
        }
    }
</script>
