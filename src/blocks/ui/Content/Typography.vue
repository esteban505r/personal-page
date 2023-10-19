<template>
                                <div id="typography" class="block spacer m-top-xl">
                                    <h2><span class="line">Typography</span></h2>
                                    <p>There are examples of typography, including global settings, headings, body text, lists and more.</p>
                                    
                                    <div id="headings">
                                        <h4>Headings</h4>
                                        
                                        <div class="bd-example">
                                            <h1 class="h">H1</h1>
                                            <h1 class="small">H1 small</h1>
                                            <h2>H2</h2>
                                            <h3>H3</h3>
                                            <h4>H4</h4>
                                            <h5>H5</h5>
                                            <h6>H6</h6>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;h1 class=&quot;h&quot;&gt;H1&lt;/h1&gt;
&lt;h1 class=&quot;small&quot;&gt;H1 small&lt;/h1&gt;
&lt;h2&gt;H2&lt;/h2&gt;
&lt;h3&gt;H3&lt;/h3&gt;
&lt;h4&gt;H4&lt;/h4&gt;
&lt;h5&gt;H5&lt;/h5&gt;
&lt;h6&gt;H6&lt;/h6&gt;</code></pre>
                                        </figure>
                                    </div><!-- #headings -->
                                    
                                    <div id="customizing-headings">
                                        <h4>Customizing headings</h4>
                                        
                                        <div class="bd-example">
                                            <h1 class="small">Fancy display <span class="line">heading</span></h1>
                                            <h1 class="small">Fancy display heading<span class="dot">.</span></h1>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;h1 class=&quot;small&quot;&gt;Fancy display &lt;span class=&quot;line&quot;&gt;heading&lt;/span&gt;&lt;/h1&gt;
&lt;h1 class=&quot;small&quot;&gt;Fancy display heading&lt;span class=&quot;dot&quot;&gt;.&lt;/span&gt;&lt;/h1&gt;</code></pre>
                                        </figure>
                                    </div><!-- #customizing-headings -->
                                    
                                    <div id="inline-text-elements">
                                        <h4>Inline text elements</h4>
                                        
                                        <div class="bd-example">
                                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                            <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                            <p><u>This line of text will render as underlined</u></p>
                                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                                            <p><strong>This line rendered as bold text.</strong></p>
                                            <p><em>This line rendered as italicized text.</em></p>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;
&lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;
&lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;
&lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;
&lt;p&gt;&lt;u&gt;This line of text will render as underlined&lt;/u&gt;&lt;/p&gt;
&lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;</code></pre>
                                        </figure>
                                    </div><!-- #inline-text-elements -->
                                    
                                    <div id="abbreviations">
                                        <h4>Abbreviations</h4>
                                        
                                        <div class="bd-example">
                                            <p><abbr title="attribute">attr</abbr></p>
                                            <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p&gt;&lt;abbr title=&quot;attribute&quot;&gt;attr&lt;/abbr&gt;&lt;/p&gt;
&lt;p&gt;&lt;abbr title=&quot;HyperText Markup Language&quot; class=&quot;initialism&quot;&gt;HTML&lt;/abbr&gt;&lt;/p&gt;</code></pre>
                                        </figure>
                                    </div><!-- #abbreviations -->
                                    
                                    <div id="blockquotes">
                                        <h4>Blockquotes</h4>
                                        
                                        <div class="bd-example">
                                            <blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            </blockquote>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;blockquote&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre>
                                        </figure>
                                    </div><!-- #blockquotes -->
                                    
                                    <div id="lists">
                                        <h4>Lists</h4>
                                        <p>Display a list of items inside your content, rendered with a number, a bullet, or none.</p>
                                        
                                        <div id="unordered-list">
                                            <h6>Unordered list</h6>
                                        
                                            <div class="bd-example">
                                                <ul>
                                                    <li>Lorem ipsum</li>
                                                    <li>Phasellus iaculis</li>
                                                    <li>Nulla volutpat</li>
                                                </ul>
                                            </div>
                                        
                                            <figure class="highlight">
                                            <pre><code class="language-html">&lt;ul&gt;
    &lt;li&gt;Lorem ipsum&lt;/li&gt;
    &lt;li&gt;Phasellus iaculis&lt;/li&gt;
    &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                            </figure>
                                        </div><!-- #unordered-lists -->
                                        
                                        <div id="ordered-lists">
                                            <h6>Ordered list</h6>
                                        
                                            <div class="bd-example">
                                                <ol>
                                                    <li>Lorem ipsum</li>
                                                    <li>Phasellus iaculis</li>
                                                    <li>Nulla volutpat</li>
                                                </ol>
                                            </div>
                                        
                                            <figure class="highlight">
                                            <pre><code class="language-html">&lt;ol&gt;
    &lt;li&gt;Lorem ipsum&lt;/li&gt;
    &lt;li&gt;Phasellus iaculis&lt;/li&gt;
    &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                                            </figure>
                                        </div><!-- #ordered-lists -->
                                    
                                        <div id="unstyled-lists">
                                            <h6>Unstyled list</h6>
                                            
                                            <div class="bd-example">
                                                <ul class="list-unstyled">
                                                    <li>Lorem ipsum</li>
                                                    <li>Phasellus iaculis</li>
                                                    <li>Nulla volutpat</li>
                                                </ul>
                                            </div>
                                            
                                            <figure class="highlight">
                                            <pre><code class="language-html">&lt;ul class=&quot;list-unstyled&quot;&gt;
    &lt;li&gt;Lorem ipsum&lt;/li&gt;
    &lt;li&gt;Phasellus iaculis&lt;/li&gt;
    &lt;li&gt;Nulla volutpat&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                            </figure>
                                        </div><!-- #unstyled-lists -->
                                    </div><!-- #lists -->
                                    
                                    
                                    <div id="text-alignment">
                                        <h4>Text alignment</h4>
                                        
                                        <div class="bd-example">
                                            <p class="text-left">Left aligned text on all viewport sizes.</p>
                                            <p class="text-center">Center aligned text on all viewport sizes.</p>
                                            <p class="text-right">Right aligned text on all viewport sizes.</p>
                                            
                                            <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
                                        </div>
                                    
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p class=&quot;text-left&quot;&gt;Left aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class=&quot;text-center&quot;&gt;Center aligned text on all viewport sizes.&lt;/p&gt;
&lt;p class=&quot;text-right&quot;&gt;Right aligned text on all viewport sizes.&lt;/p&gt;

&lt;p class=&quot;text-justify&quot;&gt;Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.&lt;/p&gt;</code></pre>
                                        </figure>
                                    </div><!-- #text-alignment -->

                                    <div id="text-transform">
                                        <h4>Text transform</h4>
                                        
                                        <div class="bd-example">
                                            <p class="text-lowercase">Lowercased text.</p>
                                            <p class="text-uppercase">Uppercased text.</p>
                                            <p class="text-capitalize">CapiTaliZed text.</p>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p class=&quot;text-lowercase&quot;&gt;Lowercased text.&lt;/p&gt;
&lt;p class=&quot;text-uppercase&quot;&gt;Uppercased text.&lt;/p&gt;
&lt;p class=&quot;text-capitalize&quot;&gt;CapiTaliZed text.&lt;/p&gt;</code></pre>
                                        </figure>
                                    </div><!-- #text-transform -->
                                    
                                    <div id="text-color">
                                        <h4>Text color</h4>
                                        
                                        <div class="bd-example">
                                            <p class="text-primary">.text-primary</p>
                                            <p class="text-secondary">.text-secondary</p>
                                            <p class="text-success">.text-success</p>
                                            <p class="text-danger">.text-danger</p>
                                            <p class="text-warning">.text-warning</p>
                                            <p class="text-info">.text-info</p>
                                            <p class="text-light bg-dark">.text-light</p>
                                            <p class="text-dark">.text-dark</p>
                                            <p class="text-body">.text-body</p>
                                            <p class="text-muted">.text-muted</p>
                                            <p class="text-white bg-dark">.text-white</p>
                                            <p class="text-black-50">.text-black-50</p>
                                            <p class="text-white-50 bg-dark">.text-white-50</p>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p class=&quot;text-primary&quot;&gt;.text-primary&lt;/p&gt;
&lt;p class=&quot;text-secondary&quot;&gt;.text-secondary&lt;/p&gt;
&lt;p class=&quot;text-success&quot;&gt;.text-success&lt;/p&gt;
&lt;p class=&quot;text-danger&quot;&gt;.text-danger&lt;/p&gt;
&lt;p class=&quot;text-warning&quot;&gt;.text-warning&lt;/p&gt;
&lt;p class=&quot;text-info&quot;&gt;.text-info&lt;/p&gt;
&lt;p class=&quot;text-light bg-dark&quot;&gt;.text-light&lt;/p&gt;
&lt;p class=&quot;text-dark&quot;&gt;.text-dark&lt;/p&gt;
&lt;p class=&quot;text-body&quot;&gt;.text-body&lt;/p&gt;
&lt;p class=&quot;text-muted&quot;&gt;.text-muted&lt;/p&gt;
&lt;p class=&quot;text-white bg-dark&quot;&gt;.text-white&lt;/p&gt;
&lt;p class=&quot;text-black-50&quot;&gt;.text-black-50&lt;/p&gt;
&lt;p class=&quot;text-white-50 bg-dark&quot;&gt;.text-white-50&lt;/p&gt;</code></pre>
                                        </figure>
                                    </div><!-- #text-color -->
                                    
                                    <div id="text-color-weight">
                                        <h4>Text color weight</h4>
                                        
                                        <div class="bd-example">
                                            <p class="text-secondary">.text-secondary</p>
                                            <p class="text-secondary regular">.text-secondary</p>
                                            <p class="text-secondary bold">.text-secondary</p>
                                        </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;p class=&quot;text-secondary&quot;&gt;.text-secondary&lt;/p&gt;
&lt;p class=&quot;text-secondary regular&quot;&gt;.text-secondary&lt;/p&gt;
&lt;p class=&quot;text-secondary bold&quot;&gt;.text-secondary&lt;/p&gt;</code></pre>
                                        </figure>
        </div><!-- #text-color-weight -->
    </div><!-- #typography -->
</template>

<script>
    export default {
        name: 'Typography'
    }
</script>
