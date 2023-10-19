<template>
    <div id="comments" class="comments-area block spacer m-top-xl">
        <div class="comment-title">
            <h2><span class="line">4 Comments</span></h2>
        </div>
        
        <ul class="comment-list list-unstyled"> 
            <li class="comment">
                <div class="comment-wrapper">
                    <div class="comment-details">
                        <div class="comment-header clearfix">
                            <div class="float-left">
                                <h6 class="comment-author">
                                    <router-link title="Tom Harrison" to="/journal-single-post">Tom Harrison</router-link>
                                </h6>

                                <div class="comment-time">
                                    <p class="p-small text-secondary bold">May 15, {{ new Date().getFullYear() }} 3:23 pm</p>
                                </div>
                            </div>

                            <div class="float-right">
                                <div class="comment-reply">
                                    <a @click="scrollToSection('#reply-title')" title="Reply" class="comment-reply-link btn btn-link p-0 transform-scale-h border-0 scroll-to-id" href="#reply-title">
                                        <i class="icon-c icon-arrow-left"></i>Reply
                                    </a>
                                </div>                        
                            </div>
                        </div>

                        <div class="comment-content">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                        </div>
                    </div>
                    
                    <ul class="children">
                        <li class="comment">
                            <div class="comment-wrapper">
                                <div class="comment-details">
                                    <div class="comment-header clearfix">
                                        <div class="float-left">
                                            <h6 class="comment-author">
                                                <router-link title="Wilson Joe" to="/journal-single-post">Wilson Joe</router-link>
                                            </h6>

                                            <div class="comment-time">
                                                <p class="p-small text-secondary bold">May 15, {{ new Date().getFullYear() }} 3:23 pm</p>
                                            </div>
                                        </div>

                                        <div class="float-right">
                                            <div class="comment-reply">
                                                <a @click="scrollToSection('#reply-title')" title="Reply" class="comment-reply-link btn btn-link p-0 transform-scale-h border-0 scroll-to-id" href="#reply-title">
                                                    <i class="icon-c icon-arrow-left"></i>Reply
                                                </a>
                                            </div>                        
                                        </div>
                                    </div>

                                    <div class="comment-content">
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                    </div>
                                </div>
                            </div>
                        </li><!-- #comment-2 -->
                    </ul>
                </div>
            </li><!-- #comment-1 -->
            
            <li class="comment">
                <div class="comment-wrapper">
                    <div class="comment-details">
                        <div class="comment-header clearfix">
                            <div class="float-left">
                                <h6 class="comment-author">
                                    <router-link title="Arthur James" to="/journal-single-post">Arthur James</router-link>
                                </h6>

                                <div class="comment-time">
                                    <p class="p-small text-secondary bold">May 15, {{ new Date().getFullYear() }} 3:23 pm</p>
                                </div>
                            </div>

                            <div class="float-right">
                                <div class="comment-reply">
                                    <a @click="scrollToSection('#reply-title')" title="Reply" class="comment-reply-link btn btn-link p-0 transform-scale-h border-0 scroll-to-id" href="#reply-title">
                                        <i class="icon-c icon-arrow-left"></i>Reply
                                    </a>
                                </div>                 
                            </div>
                        </div>

                        <div class="comment-content">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                        </div>
                    </div>
                </div>
            </li><!-- #comment-3 -->
            
            <li class="comment">
                <div class="comment-wrapper">
                    <div class="comment-details">
                        <div class="comment-header clearfix">
                            <div class="float-left">
                                <h6 class="comment-author">
                                    <router-link title="Joe Eddison" to="/journal-single-post">Joe Eddison</router-link>
                                </h6>

                                <div class="comment-time">
                                    <p class="p-small text-secondary bold">May 15, {{ new Date().getFullYear() }} 3:23 pm</p>
                                </div>
                            </div>

                            <div class="float-right">
                                <div class="comment-reply">
                                    <a @click="scrollToSection('#reply-title')" title="Reply" class="comment-reply-link btn btn-link p-0 transform-scale-h border-0 scroll-to-id" href="#reply-title">
                                        <i class="icon-c icon-arrow-left"></i>Reply
                                    </a>
                                </div>                        
                            </div>
                        </div>

                        <div class="comment-content">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                        </div>
                    </div>
                </div>
            </li><!-- #comment-4 -->
        </ul>

        <div class="loadmore spacer m-top-lg text-xl-left text-lg-left text-md-center text-center">
            <a @click="scrollToSection('#journal-single-post-index')" title="More comments" class="btn btn-dark transform-scale-h border-0" id="comment_loadmore" href="#">More comments</a>
        </div>

        <div id="respond" class="comment-respond block spacer p-top-xl">
            <h2 id="reply-title" class="comment-reply-title">Leave a <span class="line">reply</span> 
                <router-link rel="nofollow" id="cancel-comment-reply-link" class="btn btn-link p-0 border-0 transform-scale-h" to="/journal-single-post" style="display:none;">Cancel reply</router-link>
            </h2>
            
            <CommentForm />
        </div>
    </div>
</template>

<script>
    import CommentForm from '../../components/Forms/CommentForm';

    export default {
        name: 'Comments',
        components: {
            CommentForm
        }
    }
</script>
