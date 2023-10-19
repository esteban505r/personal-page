<template>
    <div id="components" class="block spacer m-top-xl">
        <h1 class="small">Components</h1>
        
        <alerts-block />
                            
        <buttons-block />
                                
        <links-block />
                                
        <card-block />
                            
        <forms-block />
                                
        <list-group-block />
                                
        <modal-block/>
                                
        <navs-block />

        <scroll-block />
    </div>
</template>

<script>
    import Alerts from './Alerts';
    import Link from './Link';
    import Buttons from './Buttons';
    import Card from './Card';
    import Forms from './Forms';
    import ListGroup from './ListGroup';
    import Modal from './Modal';
    import Navs from './Navs';
    import Scroll from './Scroll';

    export default {
        name: 'index',
        components: {
            'alerts-block': Alerts,
            'links-block': Link,
            'buttons-block': Buttons,
            'card-block': Card,
            'forms-block': Forms,
            'list-group-block': ListGroup,
            'modal-block': Modal,
            'navs-block': Navs,
            'scroll-block': Scroll
        }
    }
</script>
