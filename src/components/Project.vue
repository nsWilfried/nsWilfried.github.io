<template >
    <div id="projects" class="project__section  bg--300 ">
        <div class="projects h-full flex flex-col  justify-center">
            <!-- experience title -->
            <div class="h-auto w-full bg-green-">
                <h1 class="section__title projects__title primary-font font-bold">04.<span class="text-white"
                        style=" color: #2C3E50;">Mes Projets</span></h1>
            </div>

            <!-- content -->
            <section 
                class="text-gray-600 bg--300w-full projects__content h-auto flex-wrap  flex bg--800 justify-around gap-16">

                    <div class="project " v-for="(project, index) in projects" :data-index="index" :key="index">
                    <div class="max-w-sm rounded border-t-4 border-t-red-400  overflow-hidden shadow-sm">
                        <img class="w-full project__image" :src="'/src/assets/imgs/'+project.thumbnail"
                            :alt="project.name">
                        <div  class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 flex justify-between">
                                <div>
                                    <font-awesome-icon icon="fa-solid fa-play " class="text-sm text-red-400 pr-2" />
                                    <span>{{project.name}}</span>
                                </div>

                                <div>
                                    <a :href="project.githubLink" target="_blank">
                                        <font-awesome-icon icon="fa-brands fa-github" class="transition__icon" />
                                    </a>
                                    <a :href="project.link">
                                        <font-awesome-icon class="transition__icon ml-4"
                                            icon="fa-solid fa-arrow-up-right-from-square" />
                                    </a>
                                </div>
                            </div>
                            <p class="text-gray-700 text-base secondary-font ">
                                {{project.description}}
                            </p>
                        </div>
                        <div class="px-6 py-4">
                            <span 
                                v-for="(techno, index) in project.technos" :key="index"
                                class="secondary-font inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm  text-gray-700 mr-2">
                                #{{techno}}
                            </span>

                        </div>
                    </div>
            </div>
              


            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "Ecommmerce Website",
                    description: "Il s'agit d'un Application Web Ecommerce pour Fast Food.",
                    thumbnail: "woocommerce.jpg",
                    technos: ["Angular","Material",  "Firebase", "WooApi", "NodeJs"],
                    githubLink: "https://github.com/nsWilfried/Authority-Ecommerce",
                    liveView: ""
                },
                {
                    name: "Blog",
                    description: "Il s'agit d'une Application Web  de blogging developpé à base d'un template Colorlib.",
                    thumbnail: "blog.png",
                    technos: ["VueJs", "NodeJs/AdonisJs", "PostgreSQL", "Tailwindcss"],
                    githubLink: "https://github.com/nsWilfried/Axole-Template",
                    liveView: "https://nsblog.netlify.app"
                },
                {
                    name: "Jwt Authentication",
                    description: "Il s'agit d'un système d'authentification par jeton avec Angular et JsonWebToken.",
                    thumbnail: "jwt-auth-app.png",
                    technos: ["Angular", "Material", "NodeJs/Express",  "JWToken", "Mongodb"],
                    githubLink: "https://github.com/nsWilfried/Angular-jwt-auth",
                    liveView: "https://ns-jwt-angular-auth.netlify.app"
                },
                {
                    name: "Api + Documentation",
                    description: "Il s'agit d'une api de blogging réalisé avec Nodejs/Adonijs. Une documentation claire est bien sûr fourni avec l'api et a été fait avec Swagger🥳.",
                    thumbnail: "ns-blog-api.png",
                    githubLink: "https://github.com/nsWilfried/Axole-Template",
                    technos: ["NodeJs/Adonisjs", "Swagger", "PostgreSQL"],
                    liveView: "https://ns-blog-api.netlify.app"
                },
                {
                    name: "Google Keep Clone",
                    description: "Il s'agit du clone de google keep.",
                    thumbnail: "google_keep_clone.png",
                    technos: ["VueJs", "Supabase", "Sass"],
                    githubLink: "https://github.com/nsWilfried/Google-Keep-Clone",
                    liveView: "https://ns-google-keep.netlify.app"
                },
                {
                    name: "Mon Portfolio",
                    description: "Il s'agit de mon portfolio personnel.",
                    thumbnail: "portfolio.png",
                    technos: ["VueJS", "PocketBase", "Tailwindcss"],
                    githubLink: "https://github.com/nsWilfried/Wilfried-Portfolio",
                    liveView: ""
                },
            ]
        }
    }, 
    methods: {
        // beforeEnter(el){
        //     el.style.opacity = 0
        //     el.style.transform = 'translateY(60px)'
        // }, 
        // enter(el){
        //     gsap.to(el, {
        //         opacity: 1, 
        //         y:0, 
        //         duration: 1 , 
        //         delay: el.dataset.index *0.2
        //     })
        // }
    }
}
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/mixins/titlebar";

.project__section {
    @include center;
}

.projects {
    width: $secondary-width;
    margin-bottom: 400px;

    // background-color: white;
    z-index: 2;
    &__content {
        margin-top:130px
    }
}

.project__image {
    transform: scale(1);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
        transition: transform 0.3s;
    }
}



.transition__icon {
    transform: translate(0px);
    transition: all 0.3s;

    &:hover {

        @apply text-red-400;
        cursor: pointer;
        transform: translateY(-5px);
        transition: all 0.3s;
    }
}

@media only screen and (min-width: 320px) and (max-width: 1000px){
 .projects {
    padding-top: $vertical-space-mobile;
    margin-bottom: 0px;
    &__content {
    margin-top: 30px;

    }
 }
}
</style>