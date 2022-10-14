<template>
    <div class="overlay shadow-sm">
        <Logo />
    </div>
    <!-- portfolio page -->
    <div class="index w-full  h-auto">

        <!-- header -->
        <Header />

        <!-- about -->
        <About />

        <!-- experiences -->
        <Experience />



        <!-- Project -->
        <Project />

        <!-- education -->
        <Education />

        <!-- contact -->
        <Contact />
    </div>
</template>
<script>
import ScrollTrigger from "gsap/ScrollTrigger";
import client from "../backend/pocketbase"
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";
import Education from "@/components/Education.vue";
import Project from "@/components/Project.vue";
import gsap from "gsap"
import Logo from "../components/Logo.vue";
gsap.registerPlugin(ScrollTrigger)


export default {
    components: { Header, About, Experience, Contact, Education, Project, Logo },
    data() {
        return {

        }
    },
    async created() {
        // await client.admins.authViaEmail(import.meta.env.VITE_POCKETBASE_ADMIN_EMAIL, import.meta.env.VITE_POCKETBASE_ADMIN_PASSWORD);
        // console.log("je suis le client et je répond peut être bien, qui sait ", client.records.getList("tests"))
    },
    mounted() {
        const tl = gsap.timeline()
        tl.to(".overlay", {
            duration: 2,
            translateY: "-100%",
            ease: "Expo.easeInOut"
        })
            .from(".navbar__logo", {
                opacity: 0,
                y: 20,
                duration: 0.2,
                ease: "Expo.easeInOut",
            })
            .from("nav li", {
                opacity: 0,
                y: 20,
                duration: 0.2,
                ease: "Expo.easeInOut",
                stagger: 0.1
                // delay: el.dataset.index * 0.13
            })

            .from(".navbar__resume ", {
                opacity: 0,
                y: 20,
                duration: 0.2,
                ease: "Expo.easeInOut",
                // delay: el.dataset.index * 0.13
            })

            .from(".header__animation ", {
                opacity: 0,
                y: 20,
                duration: 0.2,
                ease: "Expo.easeInOut",
                stagger: 0.2
            })
        gsap.from(".about", {
            duration: 1.5,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".about__title"
        })

        gsap.from(".experience__title", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".experience__title"
        })
        gsap.from(".job", {
            duration: 2,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            stagger: 0.3,
            scrollTrigger: ".experience__title"

        })
        gsap.from(".education__title", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".education__title"
        })
        gsap.from(".school", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            stagger: 0.2,
            scrollTrigger: ".education__title"

        })
        gsap.from(".projects__title", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".projects__title"
        })
        gsap.from(".project", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            stagger: 0.2,
            scrollTrigger: ".projects__title"

        })

        gsap.from(".contact__title , .contact__description", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".contact__title"
        })

        gsap.from(".contact__content", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "Expo.easeInOut",
            scrollTrigger: ".contact__title"
        })

    },
}
</script>
<style lang="scss" >
@import "../assets/scss/variables";

.overlay {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;

}

html {
    scroll-behavior: smooth;
}

.index {
    background-color: $ligth-bg;
    font-family: $primary-font;
}

.primary-color {
    color: #EC7063;
}

body {
    background-color: #ddd;
    padding: 30px;
    height: auto;

}

// laptop
@media only screen and (min-width: 320px) and (max-width: 1320px) {
    body {
        background-color: white;
        padding: 0px;
        height: auto;

    }
}
</style>