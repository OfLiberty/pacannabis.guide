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

        <div class="title">
            <a  href="/share/"><strong>{{ this.titleText }}</strong></a>
        </div>
        <input class="email" :placeholder="this.placeholderText" v-model="email">

        <button v-on:click="copy">{{ this.copyText }} <i class="fas fa-level-down-alt"></i></button>
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
        titleText(){
            if(this.$page.path.startsWith("/es/")){
                return "Programa de referencia";
            }else{
                return "Referal Program";
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
    #share{
        padding-top: 1.8em;
        padding-bottom: 1.8em;
        color: #2c3e50;
    }
    #share > label{
       font-size: 80%;
    }
    #share > textarea{
        color: #2c3e50;
        text-align: right;
    }
   #share > input.email{
       width:50%;
       float: right;
   }
   #share > .title{
       text-align: right;
       display: block;
       width: 50%;
       float: right;
       padding-bottom: 2px;
       margin-bottom: 2px;
       border-bottom:solid 2px #eaecef;
   }
    #share > button{
        padding: .4em;
        background: #eaecef;
        border: none;
        float: right;
    }
</style>
