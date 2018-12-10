<template>
    <div>
        <div v-if="this.ads">
            <div v-if="this.displayAd == 0">
                <a href="https://pacannabis.guide/entireweb.html" target="_blank"><img class="no-spy" src="http://affiliate.entireweb.com/accounts/default1/bz06nf/c124b148.gif" alt="Entireweb SEO Service" title="Entireweb SEO Service" width="468" height="60" /></a><img class="no-spy" style="border:0" src="http://affiliate.entireweb.com/scripts/iz06nf?a=ofLiberty&amp;b=c124b148" width="1" height="1" alt="" />
            </div>
            <div v-if="this.displayAd == 1">
                <a href="https://pacannabis.guide/entireweb.html" target="_blank"><img class="no-spy" src="http://affiliate.entireweb.com/accounts/default1/bz06nf/d191e86d.jpg" alt="Free Search Engine Submission" title="Free Search Engine Submission" width="468" height="60" /></a><img class="no-spy" style="border:0" src="http://affiliate.entireweb.com/scripts/iz06nf?a=ofLiberty&amp;b=d191e86d" width="1" height="1" alt="" />
            </div>
            <div v-if="this.displayAd == 2">
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=gift_certificates&banner=180TQ0K9X17QCCZQS4R2&f=ifr&linkID=b60d87c07d8d250bf901a95b7cfd06e1&t=ofliberty-20&tracking_id=ofliberty-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
            </div>
            <div v-if="this.displayAd == 3">
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ez&f=ifr&linkID=5772b16a7270980a46b87b1c529b82f1&t=ofliberty-20&tracking_id=ofliberty-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
            </div>
            <div v-if="this.displayAd == 4">
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=kindlerotating&f=ifr&linkID=98cb69633942dd64d14f91c618c9e8d4&t=ofliberty-20&tracking_id=ofliberty-20" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
            </div>
        </div>
        <div v-if="!this.ads">
            <small><em>
            This is a project from <a href="https://ofliberty.org/" target="_blank">ofLiberty</a> and is being brought to you ad free. <a href="https://www.patreon.com/ofLiberty" target="_blank">Please donate today</a> to allow us to continue to provide an ad free experience.
            </em></small>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ads',
    data () {
        return {
            ads: false,
        }
    },
    computed:{
        displayAd(){
            return Math.floor(Math.random() * Math.floor(5));
        }
    }
}
</script>
<style>
   .no-spy{
       
   }
</style>
