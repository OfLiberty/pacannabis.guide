<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        <div class="page">
            <div class="body-content">
                <div class="breadcrumb">
                <a href="/">Home</a>
                    <i class="fas fa-chevron-right"></i>
                <a href="/guide/">Guide</a>
                    <i class="fas fa-chevron-right"></i>
                <a href="/guide/dispensaries/">Dispensaries</a>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div>
                    <h1>{{ $page.frontmatter.title }}</h1>
                    <p>Website: <a v-bind:href="$page.frontmatter.website" target="_blank"><i class="fas fa-globe"></i> {{ $page.frontmatter.website }}</a></p>
                </div>
                <hr>
                <p class="inner">
                    <span class="prev">
                    ←
                    <a href="/guide/dispensaries/" class="prev router-link-active">
                    Dispensaries
                    </a></span> 
                    </span>
                </p>
                <small class="text-columns">

                    <Dispensaries />
                </small>
            </div>
            <div class="sidebar-2">
                <h3>Locations</h3>
                <div v-for="location in $page.frontmatter.locations" >
                    <hr>                    
                    <h4>{{ location.city }}</h4>
                    <p>
                        <strong>Address</strong><br>
                        {{ location.address }}<br>
                        {{ location.city }}, {{ location.state }}
                    </p>
                    <p>
                        <strong>Phone</strong><br>
                        {{ location.phone_number }}</p>
                </div>
                
                <hr>

                

            </div>
            <div class="clearfix"></div>
            <!-- <div>
                <a href="/guide/dispensaries/" class="back-link"><i class="fas fa-chevron-circle-left"></i> Dispensaries</a>
            </div> -->
            
        </div>
    </div>

</template>

<script>
export default {
    name: 'dispensaries',
    data () {
        return {
            // practitioners: practitioners,
        }
    },
    computed:{
        
    }
}
</script>
<style>
    .page{
        margin: auto 5.5em;
    }
    h1{ margin-top:0px;}
    .sidebar-2{
        width: 32%;
        float:right;
    }
    .body-content{
        width: 65%;
        float: left;
    }
    .breadcrumb{
        padding:1rem 0;
    }
    .back-link{
        font-size: 1.2em;
    }
    .breadcrumb{
        font-size: .9em;
    }
    .breadcrumb>i{
        margin:0 .25em;
    }
    .text-columns > div:nth-child(1) > ul:nth-child(1){
        -webkit-column-count: 3; 
        -moz-column-count: 3; 
        column-count: 3;
        -webkit-column-gap: 40px; 
        -moz-column-gap: 40px; 
        column-gap: 40px;
        /* -webkit-column-rule: 1px solid lightblue; 
        -moz-column-rule: 1px solid lightblue; 
        column-rule: 1px solid lightblue; */
    }
    ul{
        list-style: none;
    }
    @media only screen and (min-width: 1px) and (max-width: 700px){
        .page{
            margin: auto 1em;
        }  
    }
</style>
