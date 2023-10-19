<template>
    <div id="list-group" class="block spacer m-top-xl">
        <h2><span class="line">List group</span></h2>
        <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
        
        <div id="list-group-vertical">
            <h3>Vertical example</h3>
        
            <div class="bd-example">
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;ul class=&quot;list-group&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #list-group-vertical -->
        
        <div id="list-group-horizontal">
            <h3>Horizontal example</h3>
            
            <div class="bd-example">
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>
            
            <figure class="highlight">
                                        <pre><code class="language-html">&lt;ul class=&quot;list-group list-group-horizontal&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            </figure>
        </div><!-- #list-group-horizontal -->
    </div>
</template>

<script>
    export default {
        name: 'ListGroup'
    }
</script>
