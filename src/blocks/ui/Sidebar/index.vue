<template>
    <aside id="aside" class="widget-area">
        <div class="widget">
            <h5 class="widget-title">
                <a @click="scrollToSection('#content')" title="Content" class="scroll-to-id" href="#content">Content</a>
            </h5>
            
            <ul>
                <li><a @click="scrollToSection('#typography')" title="Typography" class="scroll-to-id" href="#typography">Typography</a></li>
                <li><a @click="scrollToSection('#icon')" title="Icon" class="scroll-to-id" href="#icon">Icon</a></li>
                <li><a @click="scrollToSection('#image')" title="Image" class="scroll-to-id" href="#image">Image</a></li>
            </ul>
        </div>
        
        <div class="widget">
            <h5 class="widget-title">
                <a @click="scrollToSection('#components')" title="Components" class="scroll-to-id" href="#components">Components</a>
            </h5>
                
            <ul>
                <li><a @click="scrollToSection('#alert')" title="Alert" class="scroll-to-id" href="#alert">Alert</a></li>
                <li><a @click="scrollToSection('#button')" title="Button" class="scroll-to-id" href="#button">Button</a></li>
                <li><a @click="scrollToSection('#link')" title="Link" class="scroll-to-id" href="#link">Link</a></li>
                <li><a @click="scrollToSection('#card')" title="Card" class="scroll-to-id" href="#card">Card</a></li>
                <li><a @click="scrollToSection('#form')" title="Form" class="scroll-to-id" href="#form">Form</a></li>
                <li><a @click="scrollToSection('#list-group')" title="List group" class="scroll-to-id" href="#list-group">List group</a></li>
                <li><a @click="scrollToSection('#modal')" title="Modal" class="scroll-to-id" href="#modal">Modal</a></li>
                <li><a @click="scrollToSection('#nav')" title="Nav" class="scroll-to-id" href="#nav">Nav</a></li>
                <li><a @click="scrollToSection('#scroll')" title="Scroll" class="scroll-to-id" href="#scroll">Scroll</a></li>
            </ul>
        </div>
        
        <div class="widget">
            <h5 class="widget-title">
                <a @click="scrollToSection('#utilities')" title="Utilities" class="scroll-to-id" href="#utilities">Utilities</a>
            </h5>
                
            <ul>
                <li><a @click="scrollToSection('#background')" title="Background" class="scroll-to-id" href="#background">Background</a></li>
            </ul>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'Sidebar',
        mounted() {
            window.onscroll = function() {
                var rect      = document.querySelector( "#sticky" ).getBoundingClientRect();
                var offsetTop = rect.top + window.scrollY;

                var position             = window.pageYOffset - offsetTop;
                var parentwidth          = window.getComputedStyle( document.getElementById( "sticky" ), null );
                var parentContainerWidth = parentwidth.getPropertyValue( "width" );
                var parentPaddingLeft    = parentwidth.getPropertyValue( "padding-left" );
                var parentPaddingRight   = parentwidth.getPropertyValue( "padding-right" );

                var parentContainerWidthSplit = parentContainerWidth.split( "px" );
                var parentPaddingLeftSplit    = parentPaddingLeft.split( "px" );
                var parentPaddingRightSplit   = parentPaddingRight.split( "px" );

                var parentWidthAfterCalc = parentContainerWidthSplit[0] - parentPaddingLeftSplit[0] - parentPaddingRightSplit[0];

                if ( position > 0 ) {
                    document.getElementById( 'aside' ).classList.add( 'sticky-fixed-md' );
                    document.getElementById( 'aside' ).style.width = parentWidthAfterCalc + 'px';
                } else {
                    document.getElementById( 'aside' ).classList.remove( 'sticky-fixed-md' );
                    document.getElementById( 'aside' ).style.width = null;
                }
            };

            window.onresize = function() {
                var rect      = document.querySelector( "#sticky" ).getBoundingClientRect();
                var offsetTop = rect.top + window.scrollY;

                var position             = window.pageYOffset - offsetTop;
                var parentwidth          = window.getComputedStyle( document.getElementById( "sticky" ), null );
                var parentContainerWidth = parentwidth.getPropertyValue( "width" );
                var parentPaddingLeft    = parentwidth.getPropertyValue( "padding-left" );
                var parentPaddingRight   = parentwidth.getPropertyValue( "padding-right" );

                var parentContainerWidthSplit = parentContainerWidth.split( "px" );
                var parentPaddingLeftSplit    = parentPaddingLeft.split( "px" );
                var parentPaddingRightSplit   = parentPaddingRight.split( "px" );

                var parentWidthAfterCalc = parentContainerWidthSplit[0] - parentPaddingLeftSplit[0] - parentPaddingRightSplit[0];

                if ( position > 0 ) {
                    document.getElementById( 'aside' ).classList.add( 'sticky-fixed-md' );
                    document.getElementById( 'aside' ).style.width = parentWidthAfterCalc + 'px';
                    document.getElementById( 'aside' ).style.top = position + 'px';
                } else {
                    document.getElementById( 'aside' ).classList.remove( 'sticky-fixed-md' );
                    document.getElementById( 'aside' ).style.width = null;
                    document.getElementById( 'aside' ).style.top = null;
                }
            };
        }
    }
</script>
