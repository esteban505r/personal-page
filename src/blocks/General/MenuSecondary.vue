<template>
    <nav class="menu-secondary">
        <ul class="clearfix list-unstyled">
            <li v-for="item in items" :key="item.id"><a :title="item.title" class="btn btn-link transform-scale-h border-0 p-0" :href="item.href">{{ item.title }}</a></li>
        </ul>
    </nav>
</template>

<script>
    import FooterData from '../../data/footer/footerData.json';

    export default {
        name: 'Menu-Secondary',
        data() {
            return {
                items: FooterData.footerData,
            }
        }
    }
</script>
