<template>
    <div id="awards" class="block spacer p-top-xl">
        <h2 class="text-right"><span class="line">Awards</span> I’ve earned.</h2>
        
        <div class="row gutter-width-lg with-pb-lg">
            <div v-for="item in items" :key="item.id" class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card">
                    <div class="card-body p-large">
                        <h4>{{ item.title }}</h4>
                        <p class="mt-0">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AwardsData from '../../data/about/awardsData.json';

    export default {
        name: 'Awards',
        data() {
            return {
                items: AwardsData.awardsData
            }
        }
    }
</script>
