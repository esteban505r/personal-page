<template>
    <div id="scroll" class="block spacer m-top-xl">
        <h2><span class="line">Scroll</span></h2>
        <p>Visitors can access a specific section of the page by clicking a link. You need to add an ID attribute to your target element. Then, use that ID in value of href attribute of your <code class="highlighter-rouge">&lt;a&gt;</code> tag and add a "scroll-to-id" class.</p>
    
        <div class="bd-example">
            <a @click="scrollToSection('#content')" class="btn btn-dark scroll-to-id" href="#content">Scroll to content</a>
        </div>
    
        <figure class="highlight">
        <pre><code class="language-html">&lt;a class=&quot;btn btn-dark scroll-to-id&quot; href=&quot;#content&quot;&gt;Scroll to content&lt;/a&gt;</code></pre>
        </figure>
    </div><!-- #scroll -->
</template>

<script>
    export default {
        name: 'Scroll'
    }
</script>
