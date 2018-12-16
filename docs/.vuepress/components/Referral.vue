<template>
    <div id="share">
        <a :href="this.refFBLink " target="_blank">
            <i class="fab fa-facebook-square"></i>
        </a>
        <a :href="this.refTWLink " target="_blank">
            <i class="fab fa-twitter-square"></i>
        </a>
        <a :href="this.refRedditLink " target="_blank">
            <i class="fab fa-reddit-square"></i>
        </a>
        
        <i class="fas fa-grip-lines-vertical"></i>

        <a href="/share/"><strong>Referal Program</strong></a>
        <input class="email" placeholder="Enter Email for referral credit" v-model="email">

        <button v-on:click="copy">Copy Referral Link <i class="fas fa-level-down-alt"></i></button>
        <br>
        <textarea style="width:100%;font-size:50%;border:none;resize: none;" id="refDirectLink"  readonly>{{ refDirectLink }}</textarea> 

    </div>

</template>

<script>
export default {
    name: 'referral',
    data () {
        return {
            page: false,
            email: '',
            tracking: "&utm_medium=crowd_source&utm_campaign=user_referral&utm_term=pa%2Bcannabis%2Bguide",
        }
    },
    computed:{
        path(){
            var path = this.$page.path;
            if(this.$page.path == "/share/"){
                path = "/";
            }
            return path;
        },
        refDirectLink(){
        
            var url = "https://pacannabis.guide"+ this.path +"?utm_source="+encodeURIComponent(this.email)+this.tracking;
            return url;
        
        },
        refFBLink(){
        
            var url = "https://www.facebook.com/sharer/sharer.php?u=https://pacannabis.guide"+ this.path +"?utm_source="+encodeURIComponent(this.email)+this.tracking;
            return url;
        
        },
        refTWLink(){
            
            var url = "https://twitter.com/home?status=Check%20out%20the%20PA%20Cannabis%20Guide!%0Ahttps%3A//pacannabis.guide"+ this.path;
            return url;
        
        },
        refRedditLink(){
        
            var url = "http://www.reddit.com/submit?url=https://pacannabis.guide"+ this.path +"?utm_source="+encodeURIComponent(this.email)+this.tracking;
            return url;
        
        }
    },
    methods: {
        copy: function (event) {
            /* Get the text field */
            var copyText = document.getElementById("refDirectLink");

            /* Select the text field */
            copyText.select();

            /* Copy the text inside the text field */
            document.execCommand("copy");
        }
    }
}
</script>
<style>
    #share{
        padding-top: 1.8em;
        padding-bottom: 1.8em;
    }
    #share > label{
       font-size: 80%;
    }

   #share > input.email{
       width:50%;
   }
</style>
