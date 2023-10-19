<template>
    <div id="card" class="block spacer m-top-xl">
        <h2><span class="line">Card</span></h2>
        <p>Cards provide a flexible and extensible content container. It supports a wide variety of content, including images, text, links, and more.</p>
        
        <div class="bd-example">
            <div class="row gutter-width-60 with-pb-60">
                <div class="col-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <a @click="scrollToSection('#ui-index')" title="Card" href="#">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h">
                                        <img class="card-top-img" src="assets/img/placeholder/600x600.jpg" alt="Card">
                                    </div>
                                </div>
                            </a>

                            <div class="card-category d-none d-sm-block">
                                <a @click="scrollToSection('#ui-index')" title="Category" class="btn btn-sm btn-light transform-scale-h border-0" href="#">Category</a>
                            </div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">
                                <a @click="scrollToSection('#ui-index')" itle="Card body" href="#">Card body</a>
                            </h5>
                        </div>
                    </div>
                </div>
                
                <div class="col-6">
                    <div class="card card-post">
                        <div class="card-top position-relative">
                            <a @click="scrollToSection('#ui-index')" title="Card" href="#">
                                <div class="img object-fit overflow-hidden">
                                    <div class="object-fit-cover transform-scale-h">
                                        <img class="card-top-img" src="assets/img/placeholder/600x600.jpg" alt="Card">
                                    </div>
                                </div>
                            </a>

                            <div class="card-category d-none d-sm-block">
                                <a @click="scrollToSection('#ui-index')" title="Category" class="btn btn-sm btn-light transform-scale-h border-0" href="#">Category</a>
                            </div>
                        </div>

                        <div class="card-body border">
                            <h5 class="card-title">
                                <a @click="scrollToSection('#ui-index')" title="Card body" href="#">Card body</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <figure class="highlight">
                                    <pre><code class="language-html">&lt;div class=&quot;row gutter-width-60 with-pb-60&quot;&gt;
    &lt;div class=&quot;col-6&quot;&gt;
        &lt;div class=&quot;card card-post&quot;&gt;
            &lt;div class=&quot;card-top position-relative&quot;&gt;
                &lt;a title=&quot;Card&quot; href=&quot;&quot;&gt;
                    &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
                        &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
                            &lt;img class=&quot;card-top-img&quot; src=&quot;...&quot; alt=&quot;Card&quot;&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/a&gt;

                &lt;div class=&quot;card-category d-none d-sm-block&quot;&gt;
                    &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm btn-light transform-scale-h border-0&quot; href=&quot;&quot;&gt;Category&lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&quot;card-body&quot;&gt;
                &lt;h5 class=&quot;card-title&quot;&gt;
                    &lt;a title=&quot;Card body&quot; href=&quot;&quot;&gt;Card body&lt;/a&gt;
                &lt;/h5&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-6&quot;&gt;
        &lt;div class=&quot;card card-post&quot;&gt;
            &lt;div class=&quot;card-top position-relative&quot;&gt;
                &lt;a title=&quot;Card&quot; href=&quot;&quot;&gt;
                    &lt;div class=&quot;img object-fit overflow-hidden&quot;&gt;
                        &lt;div class=&quot;object-fit-cover transform-scale-h&quot;&gt;
                            &lt;img class=&quot;card-top-img&quot; src=&quot;...&quot; alt=&quot;Card&quot;&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/a&gt;

                &lt;div class=&quot;card-category d-none d-sm-block&quot;&gt;
                    &lt;a title=&quot;Category&quot; class=&quot;btn btn-sm btn-light transform-scale-h border-0&quot; href=&quot;&quot;&gt;Category&lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&quot;card-body border&quot;&gt;
                &lt;h5 class=&quot;card-title&quot;&gt;
                    &lt;a title=&quot;Card body&quot; href=&quot;&quot;&gt;Card body&lt;/a&gt;
                &lt;/h5&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </figure>
    </div><!-- #card -->
</template>

<script>
    export default {
        name: 'Card'
    }
</script>
