<template>
    <div id="share">
        <div class="social">
           <div class="ref-title">
                <strong>{{ this.socialText }}</strong>
            </div>
            <div class="clearfix"></div>
            <div class="mt-1">
                <a :href="this.refFBLink " target="_blank">
                    <i class="fab fa-3x fa-facebook-square"></i>
                </a>
                <a :href="this.refTWLink " target="_blank">
                    <i class="fab fa-3x fa-twitter-square"></i>
                </a>
                <a :href="this.refRedditLink " target="_blank">
                    <i class="fab fa-3x fa-reddit-square"></i>
                </a>
            </div>
        </div>
        
        <div class="referral">
                
            <div class="ref-title text-right">
                <strong>{{ this.titleText }}</strong>
            </div>
            <div class="clearfix"></div>

            <input class="email mb-2 mt-2" :placeholder="this.placeholderText" v-model="email">

            <button class="mb-2" v-on:click="copy">{{ this.copyText }} <i class="fas fa-level-down-alt"></i></button>

            <textarea class="mb-2" id="refDirectLink"  readonly>{{ refDirectLink }}</textarea> 

            <div class="text-right mb-2">
                <a  href="/share/"><small class="tiny"><em>{{ this.learnMoreText }}</em></small></a>
            </div>
        </div>
        <div class="clearfix"></div>
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
        titleText(){
            if(this.$page.path.startsWith("/es/")){
                return "Programa de referencia";
            }else{
                return "Referal Program";
            }
        },
        socialText(){
            if(this.$page.path.startsWith("/es/")){
                return "Compartir en Social";
            }else{
                return "Share on Social";
            }
        },
        learnMoreText(){
            if(this.$page.path.startsWith("/es/")){
                return "Obtenga más información sobre el programa de referencia.";
            }else{
                return "Learn more about the referral program.";
            }
        },
        placeholderText(){
            if(this.$page.path.startsWith("/es/")){
                return "Ingrese el correo electrónico para el crédito de referencia";
            }else{
                return "Enter email for referral credit";
            }
        },
        copyText(){
            if(this.$page.path.startsWith("/es/")){
                return "Copiar enlace de referencia";
            }else{
                return "Copy Referral Link";
            }
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
    small.tiny{
        font-size: 60%;
    }
    .mb-2{
        margin-bottom:.7em;
    }
    .mt-2{
        margin-top:.7em;
    }
    .mt-1{
        margin-top:.3em;
    }
    #share{
        padding-top: 1.8em;
        padding-bottom: 1.8em;
        color: #2c3e50;
    }
    #share > .social{
        width:49.5%;
        float:left;
    }
    #share > .referral{
        width:49.5%;
        float:right;
    }
     @media screen and (max-width: 880px) {
        #share > .social{
            width:100%;
            float:left;
        }
        #share > .referral{
            width:100%;
            float:right;
        }
    }
    label{
       font-size: 80%;
    }
    textarea{
        color: #2c3e50;
        text-align: right;
        width:100%;font-size:50%;border:none;resize: none;
    }
    input.email{
       width:96%;
       float: right;
   }
    .ref-title{
       display: block;
       width: 100%;
       float: right;
       padding-bottom: 2px;
       margin-bottom: 2px;
       border-bottom:solid 2px #eaecef;
   }
   .text-right{
       text-align: right;
   }
     button{
        padding: .4em;
        background: #eaecef;
        border: none;
        float: right;
    }
</style>
