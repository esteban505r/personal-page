<template>
    <div id="form" class="block spacer m-top-xl">
        <h2><span class="line">Form</span></h2>
        <p>Several form control styles, layout options, and custom components for creating a wide variety of forms.</p>
        
        <div id="inputs">
            <h4>Inputs</h4>
            <p>Text inputs, selects and textarea.</p>
            
            <div id="input-primary">
                <h5>Primary</h5>

                <div class="bd-example">
                    <p>
                        <input type="text" placeholder="Input text">
                    </p>

                    <p>
                        <textarea placeholder="Textarea"></textarea>
                    </p>

                    <p>
                        <select>
                            <option>Select</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                    </p>
                    
                    <p>
                        <input type="checkbox" id="checkbox-input">
                        <label for="checkbox-input" class="mb-0">Checkbox</label>
                    </p>
                    
                    <p>
                        <input type="radio" id="radio-input">
                        <label for="radio-input" class="mb-0">Radio</label>
                    </p>
                </div>
                
                <figure class="highlight">
                                            <pre><code class="language-html">&lt;p&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
&lt;/p&gt;

&lt;p&gt;
    &lt;textarea placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
&lt;/p&gt;

&lt;p&gt;
    &lt;select&gt;
        &lt;option&gt;Select&lt;/option&gt;
        &lt;option&gt;Option 1&lt;/option&gt;
        &lt;option&gt;Option 2&lt;/option&gt;
    &lt;/select&gt;
&lt;/p&gt;

&lt;p&gt;
    &lt;input type=&quot;checkbox&quot; id=&quot;checkbox-input&quot;&gt;
    &lt;label for=&quot;checkbox-input&quot; class=&quot;mb-0&quot;&gt;Checkbox&lt;/label&gt;
&lt;/p&gt;

&lt;p&gt;
    &lt;input type=&quot;radio&quot; id=&quot;radio-input&quot;&gt;
    &lt;label for=&quot;radio-input&quot; class=&quot;mb-0&quot;&gt;Radio&lt;/label&gt;
&lt;/p&gt;</code></pre>
            </figure>
        </div><!-- #input-primary -->
        
        <div id="input-secondary">
            <h5>Secondary</h5>
        
            <div class="bd-example">
                <p>
                    <input type="text" class="form-control" placeholder="Input text">
                </p>        

                <p>
                    <textarea class="form-control" placeholder="Textarea"></textarea>
                </p>
            
                <p>
                    <select class="form-control">
                        <option>Select</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                </p>
                
                <p class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="custom-checkbox-input">
                    <label for="custom-checkbox-input" class="custom-control-label mb-0">Checkbox</label>
                </p>
                
                <p class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="custom-radio-input">
                    <label for="custom-radio-input" class="custom-control-label mb-0">Radio</label>
                </p>
            </div>
            
            <figure class="highlight">
                                            <pre><code class="language-html">&lt;p&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Input text&quot;&gt;
&lt;/p&gt;        

&lt;p&gt;
    &lt;textarea class=&quot;form-control&quot; placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
&lt;/p&gt;

&lt;p&gt;
    &lt;select class=&quot;form-control&quot;&gt;
        &lt;option&gt;Select&lt;/option&gt;
        &lt;option&gt;Option 1&lt;/option&gt;
        &lt;option&gt;Option 2&lt;/option&gt;
    &lt;/select&gt;
&lt;/p&gt;

&lt;p class=&quot;custom-control custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;custom-control-input&quot; id=&quot;custom-checkbox-input&quot;&gt;
    &lt;label for=&quot;custom-checkbox-input&quot; class=&quot;custom-control-label mb-0&quot;&gt;Checkbox&lt;/label&gt;
&lt;/p&gt;

&lt;p class=&quot;custom-control custom-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; class=&quot;custom-control-input&quot; id=&quot;custom-radio-input&quot;&gt;
    &lt;label for=&quot;custom-radio-input&quot; class=&quot;custom-control-label mb-0&quot;&gt;Radio&lt;/label&gt;
&lt;/p&gt;</code></pre>
                </figure>
            </div><!-- #input-secondary -->
        </div><!-- #inputs -->
        
        <div id="input-group">
            <h4>Input group</h4>
            <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>
            
            <div id="input-group-primary">
                <h5>Primary</h5>
                
                <div class="bd-example">
                    <p class="input-group gutter-width-30">
                        <span class="gutter-width">
                            <input type="text" placeholder="Input text">
                        </span>

                        <span class="gutter-width">
                            <input type="text" placeholder="Input text">
                        </span>
                    </p>
                </div>
                
                <figure class="highlight">
                                            <pre><code class="language-html">&lt;p class=&quot;input-group gutter-width-30&quot;&gt;
    &lt;span class=&quot;gutter-width&quot;&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
    &lt;/span&gt;

    &lt;span class=&quot;gutter-width&quot;&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
    &lt;/span&gt;
&lt;/p&gt;</code></pre>
            </figure>
        </div><!-- #input-group-primary -->
        
        <div id="input-group-secondary">
            <h5>Secondary</h5>
        
            <div class="bd-example">
                <p class="input-group gutter-width-30">
                    <span class="gutter-width">
                        <input class="form-control" type="text" placeholder="Input text">
                    </span>

                    <span class="gutter-width">
                        <input class="form-control" type="text" placeholder="Input text">
                    </span>
                </p>
            </div>
            
            <figure class="highlight">
                                            <pre><code class="language-html">&lt;p class=&quot;input-group gutter-width-30&quot;&gt;
    &lt;span class=&quot;gutter-width&quot;&gt;
        &lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
    &lt;/span&gt;

    &lt;span class=&quot;gutter-width&quot;&gt;
        &lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Input text&quot;&gt;
    &lt;/span&gt;
&lt;/p&gt;</code></pre>
                </figure>
            </div><!-- #input-group-secondary -->
        </div><!-- #input-group -->
    </div><!-- #form -->
</template>

<script>
    export default {
        name: 'Forms'
    }
</script>
