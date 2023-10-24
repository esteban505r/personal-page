<template>
    <form v-on:submit.prevent="submitForm" action="form.php" method="post" id="commentform" class="comment-form">
        <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p>
        
        <p class="comment-form-comment">
            <textarea v-model="form.comment" id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required" placeholder="Comments *"></textarea>
        </p>
        
        <p class="input-group gutter-width-30">
            <span class="gutter-width">
                <input v-model="form.author" id="author" name="author" type="text"  size="30" maxlength="245" required="required" placeholder="Name *">
            </span>
            
            <span class="gutter-width">
                <input v-model="form.email" id="email" name="email" type="email"  size="30" maxlength="100" required="required" placeholder="Email *">
            </span>
        </p>
        
        <p class="comment-form-url">
            <input v-model="form.url" id="url" name="url" type="url"  size="30" maxlength="200" placeholder="Website *">
        </p>
        
        <p class="comment-form-cookies-consent custom-control custom-checkbox">
            <input id="wp-comment-cookies-consent" class="custom-control-input" name="wp-comment-cookies-consent" type="checkbox" value="yes">
            
            <label class="custom-control-label" for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
        </p>
        
        <p class="form-submit">
            <input name="submit" type="submit" class="btn btn-dark border-0 transform-scale-h" value="Submit"> 
        </p>

        <transition appear leave-active-class="animated fadeOut">
            <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
                {{ responseMessage }}
            </div>
        </transition>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Comment-Form',
        data() {
            return {
                form: {
                    comment: '',
                    author: '',
                    email: '',
                    url: ''
                },
                successMessage: "Sender's message was sent successfully",
                warningMessage: 'Fill up the form, please!',
                errorMessage: 'Something go wrong. Try again later!',
                responseMessage: '',
                alertClass: '',
                callAlert: false
            }
        },
        methods: {
            async submitForm() {
                axios.post( 'https://store.adveits.com/API/form.php', this.form, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }, ).then( response => {
                    if ( response.data.status === 'success' ) {
                        this.responseMessage = this.successMessage;
                    }

                    if ( response.data.status === 'warning' ) {
                        this.responseMessage = this.warningMessage;
                    }

                    if ( response.data.status === 'error' ) {
                        this.responseMessage = this.errorMessage;
                    }

                    this.alertClass = response.data.status;
                    this.callAlert  = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } ).catch( error => {
                    this.responseMessage = this.errorMessage;
                    this.alertClass      = 'danger';
                    this.callAlert       = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } );
            }
        }
    }
</script>
