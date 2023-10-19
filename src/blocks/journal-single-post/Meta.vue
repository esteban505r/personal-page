<template>
    <div class="meta">
        <p>
            <span><router-link class="text-secondary a-small bold" to="/journal-single-post">By admin</router-link></span>

            <span class="text-secondary s-small bold">-</span>

            <span class="text-secondary s-small bold">Comments (4)</span>

            <span class="text-secondary s-small bold">-</span>

            <span class="category"><router-link title="Travel" class="text-secondary a-small bold" to="/journal">Travel</router-link></span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Meta'
    }
</script>
