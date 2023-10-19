<template>
    <div id="link" class="block spacer m-top-xl">
        <h2><span class="line">Link</span></h2>
        <p>User Interface includes custom made classes for links. The link can be without a hover or with scalable hover.</p>
    
        <div class="bd-example">
            <a @click="scrollToSection('#ui-index')" title="Link" class="btn btn-link border-0 p-0" href="#">Link</a>
            <a @click="scrollToSection('#ui-index')" title="Link hover scale" class="btn btn-link border-0 p-0 transform-scale-h" href="#">Link hover scale</a>
        </div>
        
        <figure class="highlight">
                                    <pre><code class="language-html">&lt;a title=&quot;Link&quot; class=&quot;btn btn-link border-0 p-0&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;
&lt;a title=&quot;Link hover scale&quot; class=&quot;btn btn-link border-0 p-0 transform-scale-h&quot; href=&quot;#&quot;&gt;Link hover scale&lt;/a&gt;</code></pre>
        </figure>
    </div><!-- #link -->
</template>

<script>
    export default {
        name: 'Link'
    }
</script>
