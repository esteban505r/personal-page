<template>
    <form v-on:submit.prevent="submitForm" class="wpcf7-form">
        <p class="input-group gutter-width-30">
            <span class="gutter-width">
                <input v-model="form.name" name="name" type="text" size="30" maxlength="245" required="required" placeholder="Name *">
            </span>
                                
            <span class="gutter-width">
                <input v-model="form.email" name="email" type="email" size="30" maxlength="100" required="required" placeholder="Email/Phone no. *">
            </span>
        </p>
        
        <p>
            <textarea v-model="form.message" name="message" cols="45" rows="8" maxlength="65525" required="required" placeholder="Message *"></textarea>
        </p>
                            
        <p class="mb-0">
            <input name="submit" type="submit" class="btn btn-dark border-0 transform-scale-h" value="Send"> 
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
        name: 'ContactsForm',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: ''
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
