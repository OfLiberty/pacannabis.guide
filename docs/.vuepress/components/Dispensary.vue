<template>
    <div>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb rounded-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/guide/">Guide</a></li>
                <li class="breadcrumb-item"><a href="/guide/dispensaries/">Dispensaries</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ $page.title }}</li>
            </ol>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                    
                    <div>
                        <h1>{{ $page.frontmatter.title }}</h1>
                        <p>Website: <a v-bind:href="$page.frontmatter.website" target="_blank"><i class="fas fa-globe"></i> {{ $page.frontmatter.website }}</a></p>
                    </div>
                    <hr>
                    

                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <h3>Locations</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12" v-for="location in $page.frontmatter.locations">
                                
                                <div class="pl-4">
                                    <h4 class="text-right">{{ location.city }}</h4>
                                    <div class="container-fluid pt-2 pb-3">
                                        <div class="row row align-items-top">
                                            <div class="col-10">
                                                <p>
                                                    {{ location.address }}<br>
                                                    {{ location.city }}, {{ location.state }}
                                                </p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <i class="fas fa-map-marked-alt fa-2x"></i>
                                            </div>

                                            <div class="col-10">
                                                <p>{{ location.phone_number }}</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <i class="fas fa-phone fa-2x"></i>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
                <div class="col-12">
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
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'dispensary',
    data () {
        return {
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
    .brdcrm{
        padding:1rem 0;
    }
    .back-link{
        font-size: 1.2em;
    }
    .brdcrm{
        font-size: .9em;
    }
    .brdcrm>i{
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
    @media only screen and (min-width: 1px) and (max-width: 700px){
        .page{
            margin: auto 1em;
        }  
    }
</style>
