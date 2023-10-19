<template>
    <div id="recent-comments-2" class="widget widget_recent_comments">
        <h5 class="widget-title">Recent Comments</h5>
    
        <ul id="recentcomments">
            <li v-for="item in items" :key="item.id" class="recentcomments">
                <span class="comment-author-link">{{ item.author }}</span> on 
                <router-link :title="item.comment" :to="item.link">{{ item.comment }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import RecentComments from '../../data/sidebar/recentCommentsData.json';

    export default {
        name: 'Recent-Comments',
        data() {
            return {
                items: RecentComments.recentCommentsData
            }
        }
    }
</script>
