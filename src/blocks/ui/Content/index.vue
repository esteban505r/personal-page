<template>
    <div id="content" class="block">
        <h1 class="small">Content</h1>
        
        <typography-block />
        
        <icons-block />
        
        <images-block />
    </div>
</template>

<script>
    import Typography from './Typography';
    import Icons from './Icons';
    import Images from './Images';

    export default {
        name: 'Content',
        components: {
            'typography-block': Typography,
            'icons-block': Icons,
            'images-block': Images
        }
    }
</script>
