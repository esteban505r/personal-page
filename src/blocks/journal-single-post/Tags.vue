<template>
    <div class="tags">
        <p>
            <span class="tags-title">Tags:</span>
            <router-link title="Art" to="/journal">Art</router-link>
            <span>,</span>
            <router-link title="Culture" to="/journal">Culture</router-link>
            <span>,</span>
            <router-link title="Capital" to="/journal">Capital</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Tags'
    }
</script>
