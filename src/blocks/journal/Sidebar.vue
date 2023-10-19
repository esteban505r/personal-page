<template>
    <aside id="aside" class="widget-area">
        <div id="search-2" class="widget widget_search">
            <SearchForm />
        </div>
        
        <RecentComments />
    
        <div id="archives-2" class="widget widget_archive">
            <h5 class="widget-title">Archives</h5>		
        
            <ul>
                <li><router-link title="March date" to="/journal">March {{ new Date().getFullYear() }}</router-link></li>
            </ul>
        </div>
    
        <Categories />

        <Meta />
    </aside>
</template>

<script>
    import SearchForm from '../../components/Forms/SearchForm';
    import RecentComments from '../../blocks/sidebar/RecentComments';
    import Categories from '../../blocks/sidebar/Categories';
    import Meta from '../../blocks/sidebar/Meta';

    export default {
        name: 'Sidebar',
        components: {
            SearchForm,
            Categories,
            RecentComments,
            Meta
        }
    }
</script>
