<template>
    <div id="my-experience" class="block spacer p-top-xl">
        <h2>My <span class="line">experience.</span></h2>
        
        <div class="row gutter-width-lg with-pb-lg">
            <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card border-0">
                    <div class="card-body p-0">
                        <h4>{{ item.position }}</h4>
                        
                        <p class="p-small text-secondary bold">{{item.start_date}} - {{ item.end_date }} </p>
                        
                        <p>{{ item.description }}</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ExperienceData from '../../data/about/experienceData.json';

    export default {
        name: 'My-Experience',
        data() {
            return {
                items: ExperienceData.experienceData
            }
        }
    }
</script>
