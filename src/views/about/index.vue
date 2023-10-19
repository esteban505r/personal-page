<template>
    <div id="about-page-index">
        <Loading />

        <Header />
        
       <main id="main" class="site-main">
           <PageTitle />

            <section id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div id="about" class="block">
                        <h2><span class="line">A passionate</span><br> mobile developer.</h2>
                        
                        <div class="row bg-half-ring-left gutter-width-lg">
                            <div class="col align-self-top pl-0">
                                <div class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img src="assets/img/placeholder/527x600.jpg" alt="Esteban Lopez" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col align-self-center description">
                                <h4>I’m Esteban Lopez</h4>
                                
                                <p>Hello, I'm Esteban Lopez, a seasoned mobile engineer with over 4 years of experience in Android and Flutter app development. My passion for technology extends beyond these platforms, as I'm also well-versed in Vue.js and Nest.js, enabling me to create versatile and innovative solutions.</p>

                                <p>I'm a perpetual learner, always eager to explore the latest advancements in the tech world, ensuring that I stay at the forefront of the ever-evolving industry. When I'm not immersed in coding, you'll likely find me on the volleyball court, spiking, setting, and diving for the perfect play.

                                My love for technology is rivaled only by my affection for dogs. They hold a special place in my heart, and I believe they represent the perfect balance of loyalty and curiosity.</p>
                                
                                <p>I'm driven to lead and thrive in a collaborative team environment. Aspiring to take on a leadership role, I'm ready to contribute my technical expertise, creativity, and dedication to help build and lead a great team toward success.

                                Let's connect and explore the possibilities of working together on exciting projects. Join me on this journey where technology, passion, and teamwork converge to create something extraordinary.</p>
                            </div>
                        </div>
                    </div>
                    
                    <MyExperience />
                    
                    <!-- <Awards /> -->
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '../../components/Loading/Loading';
    import Header from '../../blocks/header/Header';
    import Footer from '../../blocks/footer/Footer';

    import PageTitle from '../../blocks/about/PageTitle';
    import MyExperience from '../../blocks/about/MyExperience';
    import Awards from '../../blocks/about/Awards';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            MyExperience,
            Awards,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'About | Esteban Lopez',
            titleTemplate: '%s'
        }
    }
</script>
