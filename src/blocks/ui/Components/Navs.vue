<template>
    <div id="nav" class="block spacer m-top-xl">
        <h2><span class="line">Nav</span></h2>
        <p>User interface includes navigation components. It is responsive and powerful navigation header which supports, branding, navigation, and more.</p>
        
        <div id="nav-primery">
            <h4>Primary</h4>
            
            <div class="bd-example">
                <nav class="menu-primary">
                    <ul class="clearfix list-unstyled">
                        <li @click="scrollToSection('#ui-index')" class="menu-item text-left"><a title="Demo 1" href="#">Demo 1</a></li>
                        <li @click="scrollToSection('#ui-index')" class="menu-item text-left current-menu-item"><a title="Demo 2" href="#">Demo 2</a></li>
                    </ul>
                </nav>
            </div>
            
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;nav class=&quot;menu-primary&quot;&gt;
    &lt;ul class=&quot;clearfix list-unstyled&quot;&gt;
        &lt;li class=&quot;menu-item text-left&quot;&gt;&lt;a title=&quot;Demo 1&quot; href=&quot;#&quot;&gt;Demo 1&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;menu-item text-left current-menu-item&quot;&gt;&lt;a title=&quot;Demo 2&quot; href=&quot;#&quot;&gt;Demo 2&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
            </figure>
        </div><!-- #nav-primery -->
        
        <div id="nav-secondary">
            <h4>Secondary</h4>
            
            <div class="bd-example">
                <nav class="menu-secondary">
                    <ul class="clearfix list-unstyled">
                        <li><a @click="scrollToSection('#ui-index')" title="Demo 1" class="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 1</a></li>
                        <li><a @click="scrollToSection('#ui-index')" title="Demo 2" class="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 2</a></li>
                        <li><a @click="scrollToSection('#ui-index')" title="Demo 3" class="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 3</a></li>
                        <li><a @click="scrollToSection('#ui-index')" title="Demo 4" class="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 4</a></li>
                    </ul>
                </nav>
            </div>
            
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;nav class=&quot;menu-secondary&quot;&gt;
    &lt;ul class=&quot;clearfix list-unstyled&quot;&gt;
        &lt;li&gt;&lt;a title=&quot;Demo 1&quot; class=&quot;btn btn-link transform-scale-h border-0 p-0&quot; href=&quot;#&quot;&gt;Demo 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a title=&quot;Demo 2&quot; class=&quot;btn btn-link transform-scale-h border-0 p-0&quot; href=&quot;#&quot;&gt;Demo 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a title=&quot;Demo 3&quot; class=&quot;btn btn-link transform-scale-h border-0 p-0&quot; href=&quot;#&quot;&gt;Demo 3&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a title=&quot;Demo 4&quot; class=&quot;btn btn-link transform-scale-h border-0 p-0&quot; href=&quot;#&quot;&gt;Demo 4&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                </figure>
        </div><!-- #nav-secondary -->
    </div><!-- #nav -->
</template>

<script>
    export default {
        name: 'Navs'
    }
</script>
