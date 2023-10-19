<template>
    <div id="meta-2" class="widget widget_meta">
        <h5 class="widget-title">Meta</h5>			

        <ul>
            <li>
                <router-link title="Log in" to="/journal">Log in</router-link>
            </li>
            
            <li>
                <router-link title="Entries RSS" to="/journal">Entries <abbr title="Really Simple Syndication">RSS</abbr></router-link>
            </li>
            
            <li>
                <router-link title="Comments RSS" to="/journal">Comments <abbr title="Really Simple Syndication">RSS</abbr></router-link>
            </li>		
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Meta'
    }
</script>
