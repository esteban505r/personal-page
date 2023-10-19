<template>
    <div id="button" class="block spacer m-top-xl">
        <h2><span class="line">Button</span></h2>
        <!-- <p>Oxer includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. </p> -->
    
        <div class="bd-example">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
            <button type="button" class="btn btn-link">Link</button>
        </div>
    
        <figure class="highlight">
                                    <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;Light&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-link&quot;&gt;Link&lt;/button&gt;</code></pre>
        </figure>

        <div id="outline-buttons">
            <h4>Outline buttons</h4>

            <div class="bd-example">
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
                <button type="button" class="btn btn-outline-warning">Warning</button>
                <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-light">Light</button>
                <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
    
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary&quot;&gt;Secondary&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success&quot;&gt;Success&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-danger&quot;&gt;Danger&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning&quot;&gt;Warning&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-info&quot;&gt;Info&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-light&quot;&gt;Light&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
            </figure>
        </div><!-- #outline-buttons -->
        
        <div id="button-hover">
            <h4>Button hover</h4>
            
            <div class="bd-example">
                <button type="button" class="btn btn-dark transform-scale-h">Dark</button>
                <button type="button" class="btn btn-outline-dark transform-scale-h">Dark</button>
                <button type="button" class="btn btn-link transform-scale-h">Dark</button>
            </div>
            
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-dark transform-scale-h&quot;&gt;Dark&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-dark transform-scale-h&quot;&gt;Dark&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-link transform-scale-h&quot;&gt;Dark&lt;/button&gt;</code></pre>
            </figure>
        </div>

        <div id="sizes">
            <h4>Sizes</h4>

            <div class="bd-example">
                <button type="button" class="btn btn-primary btn-sm">Small</button>
                <button type="button" class="btn btn-primary">Normal</button>
                <button type="button" class="btn btn-primary btn-lg">Large</button>
            </div>

            <figure class="highlight">
                                        <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-sm&quot;&gt;Small&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Normal&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary btn-lg&quot;&gt;Large&lt;/button&gt;</code></pre>
                                        </figure>
        </div><!-- #sizes -->
    </div><!-- #button -->
</template>

<script>
    export default {
        name: 'Buttons',
        methods: {
            toggleRadio: function( e ) {
                let radio = e.target;
                let radioParent = radio.parentNode;

                radioParent.children.forEach( child => {
                    child.classList.remove( 'active');
                })

                radio.classList.add('active');
            }
        }
    }
</script>
