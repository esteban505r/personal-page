<template>
    <form class="search-form" role="search" method="get" :action="urlAction">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Type something to search" name="s" title="Type something to search">

            <div class="input-group-append">
                <button type="submit" class="btn btn-link transform-scale-h border-0 p-0">
                    <span>Search</span>
                    <i class="icon-c icon-arrow-right"></i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Search-Form',
        data() {
            return {
                urlAction: window.location.origin + this.$router.resolve( {
                    name: 'search-results',
                    params: { id: 1 }
                } ).href
            }
        }
    }
</script>
