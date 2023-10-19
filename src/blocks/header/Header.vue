<template>
    <header id="header" class="site-header">
        <div class="wrapper d-flex justify-content-between">
            <div class="align-self-center">                    
                <Logo />
            </div>
            
            <SearchModalButton />
            
            <MenuModalButton />
        </div>
    </header>
</template>

<script>
    import Logo from './HeaderLogo';
    import SearchModalButton from '../../components/Button/SearchModalButton';
    import MenuModalButton from '../../components/Button/MenuModalButton';

    export default {
        name: 'Header',
        components: {
            Logo,
            SearchModalButton,
            MenuModalButton,
        }
    }
</script>
