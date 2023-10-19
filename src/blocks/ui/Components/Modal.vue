<template>
    <div id="modal" class="block spacer m-top-xl">
        <h2><span class="line">Modal</span></h2>
        <p>Use Bootstrapís JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. You also need to add the 'modal-adv-1' CLASS to your parent modal DIV element.</p>
        
        <div class="bd-example">
            <button @click="toggleModal" type="button" class="btn btn-dark" data-toggle="modal" data-target="#demo-modal">Demo modal</button>

            <div v-if="show" :style="{ display: 'block' }" class="modal fade modal-adv-1 show" id="demo-modal" tabindex="-1" role="dialog" aria-labelledby="demo-modal" aria-hidden="true">
                <div class="modal-dialog modal-full" role="document">
                    <div class="wrapper">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button @click="toggleModal" type="button" class="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">
                                        <span class="align-middle">Close</span>
                                        <i class="icon-c icon-close"></i>
                                    </span>
                                </button>
                            </div>

                            <div class="modal-body d-flex justify-content-between">
                                <div class="align-self-center">
                                    <p>Modal body text goes here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <figure class="highlight">
                                    <pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-dark&quot; data-toggle=&quot;modal&quot; data-target=&quot;#demo-modal&quot;&gt;Demo modal&lt;/button&gt;

&lt;div class=&quot;modal fade modal-adv-1&quot; id=&quot;demo-modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-labelledby=&quot;demo-modal&quot; aria-hidden=&quot;true&quot;&gt;
    &lt;div class=&quot;modal-dialog modal-full&quot; role=&quot;document&quot;&gt;
        &lt;div class=&quot;wrapper&quot;&gt;
            &lt;div class=&quot;modal-content&quot;&gt;
                &lt;div class=&quot;modal-header&quot;&gt;
                    &lt;button type=&quot;button&quot; class=&quot;close btn btn-link border-0 transform-scale-h&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;
                        &lt;span aria-hidden=&quot;true&quot;&gt;
                            &lt;span class=&quot;align-middle&quot;&gt;Close&lt;/span&gt;
                            &lt;i class=&quot;icon-c icon-close&quot;&gt;&lt;/i&gt;
                        &lt;/span&gt;
                    &lt;/button&gt;
                &lt;/div&gt;

                &lt;div class=&quot;modal-body d-flex justify-content-between&quot;&gt;
                    &lt;div class=&quot;align-self-center&quot;&gt;
                        &lt;p&gt;Modal body text goes here.&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </figure>
    </div><!-- #modal -->
</template>

<script>
    export default {
        name: 'Modal',
        data() {
            return {
                show: false
            }
        },
        methods: {
            toggleModal() {
                this.show = !this.show;
            }
        }
    }
</script>
