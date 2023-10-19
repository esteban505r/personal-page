<template>
    <div id="image" class="block spacer m-top-xl">
        <h2><span class="line">Image</span></h2>
        <p>Information for opting your images into responsive behaviour (images never become larger than their parent elements). All of the image styles are added via classes.</p>
        
        <div id="responsive-images">
            <h4>Responsive images</h4>
            
            <div class="bd-example">
                <img src="assets/img/placeholder/600x600.jpg" class="img-fluid" alt="Responsive image">
            </div>
            
            <figure class="highlight"><pre><code class="language-html">&lt;img src=&quot;...&quot; class=&quot;img-fluid&quot; alt=&quot;Responsive image&quot;&gt;</code></pre></figure>
        </div><!-- #responsive-images -->
                                            
        <div id="object-fit-size">
            <h4>Object fit size</h4>
            
            <div class="bd-example">
                <div class="row pb-3">
                    <div class="col-4">
                        <div class="img object-fit size-5">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 112% -->
                    </div>
                    
                    <div class="col-4">
                        <div class="img object-fit">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 100% -->
                    </div>
                    
                    <div class="col-4">
                        <div class="img object-fit size-4">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 95% -->
                    </div>
                </div>
                
                <div class="row pt-3">
                    <div class="col-4">
                        <div class="img object-fit size-3">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 85% -->
                    </div>
                    
                    <div class="col-4">
                        <div class="img object-fit size-2">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 54% -->
                    </div>
                    
                    <div class="col-4">
                        <div class="img object-fit size-1">
                            <div class="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit">
                            </div>
                        </div><!-- Height: 47% -->
                    </div>
                </div>
            </div>
                                        
                                        <figure class="highlight">
                                        <pre><code class="language-html">&lt;div class=&quot;row pb-3&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit size-5&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 112% --&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 100% --&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit size-4&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 95% --&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;row pt-3&quot;&gt;
    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit size-3&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 85% --&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit size-2&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 54% --&gt;
    &lt;/div&gt;

    &lt;div class=&quot;col-4&quot;&gt;
        &lt;div class=&quot;img object-fit size-1&quot;&gt;
            &lt;div class=&quot;object-fit-cover&quot;&gt;
                &lt;img src=&quot;...&quot; alt=&quot;Objet fit&quot;&gt;
            &lt;/div&gt;
        &lt;/div&gt;&lt;!-- Height: 47% --&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                        </figure>
        </div><!-- #object-fit-size -->
    </div><!-- #image -->
</template>

<script>
    export default {
        name: 'Images'
    }
</script>
