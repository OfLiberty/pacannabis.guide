<template>
    <div>
        <ul>
            <li><a href="/guide/dispensaries/beyond-hello.html">Beyond Hello</a></li>
            <li><a href="/guide/dispensaries/columbia-care.html">Columbia Care PA, LLC</a></li>
            <li><a href="/guide/dispensaries/cresco-yeltrah.html">Cresco Yeltrah</a></li>
            <li><a href="/guide/dispensaries/cure-pennsylvania.html">Cure Pennsylvania</a></li>
            <li><a href="/guide/dispensaries/harvest-of-reading.html">Harvest of Reading</a></li>
            <li><a href="/guide/dispensaries/herbology.html">Herbology</a></li>
            <li><a href="/guide/dispensaries/ilera-healthcare.html">Ilera Healthcare</a></li>
            <li><a href="/guide/dispensaries/justice-grown.html">Justice Grown</a></li>
            <li><a href="/guide/dispensaries/keystone-canna-remedies.html">Keystone Canna Remedies</a></li>
            <li><a href="/guide/dispensaries/keystone-center-of-integrative-wellness.html">Keystone Center of Integrative Wellness</a></li>
            <li><a href="/guide/dispensaries/keystone-shops.html">Keystone Shops</a></li>
            <li><a href="/guide/dispensaries/knox-medical.html">Knox Medical</a></li>
            <li><a href="/guide/dispensaries/liberty.html">Liberty</a></li>
            <li><a href="/guide/dispensaries/maitri-medicinals.html">Maitri Medicinals</a></li>
            <li><a href="/guide/dispensaries/mission-pennsylvania-ii.html">Mission Pennsylvania II, LLC</a></li>
            <li><a href="/guide/dispensaries/natures-medicines.html">Nature's Medicines</a></li>
            <li><a href="/guide/dispensaries/organic-remedies.html">Organic Remedies</a></li>
            <li><a href="/guide/dispensaries/restore-integrative-wellness-center.html">Restore Integrative Wellness Center, LLC</a></li>
            <li><a href="/guide/dispensaries/rise.html">RISE</a></li>
            <li><a href="/guide/dispensaries/solevo.html">Solevo</a></li>
            <li><a href="/guide/dispensaries/terravida-holistic-centers.html">TerraVida Holistic Centers</a></li>
            <li><a href="/guide/dispensaries/the-healing-center.html">The Healing Center, LLC</a></li>
        </ul>
        <!-- <div v-for="path in $site.pages">
            <p>{{ path.title }} -{{ path.path }}</p>
        </div> -->
    </div>

</template>

<script>
import dispensaries from '../data/pa-dispensaries.json'
export default {
    name: 'dispensaries',
    data () {
        return {
            dispensaries: dispensaries,
        }
    },
    computed:{
        
    }
}
</script>
<style>
    /* #county{ 
        width: 100%;
    } */
    label{
        float:left;
        width: 30%;
        text-align: right;
        padding: 0px 1em;

    }
    select{
        float:left;
        width: 60%;
        padding: 0px 1em;

    }
    .filter{
        padding: 1em 0px;
    }
    .clearfix{
        clear:both;
    }

    .results{
        padding: 1em;
    }

    @media only screen and (min-width: 1px) and (max-width: 700px){
        label{
            float:left;
            width: auto;
            text-align: center;
            padding: .3em 0px;

        }
        select{
            float:left;
            width: 100%;
            padding: .3em 0px;

        }
    }
</style>
