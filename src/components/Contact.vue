<template>

    <!-- section contact -->
    <div id="contact" class="section  bg--500 contact">
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="contact__title sm:text-3xl text-2xl capitalize font-bold primary-font title-font mb-4 text-gray-900">
                        <span class="text-3xl text-red-400 pb-3 ">06.</span>
                        Me contacter
                    </h1>
                    <p class="contact__description lg:w-2/3 mx-auto leading-relaxed text-base secondary-font">
                        Envoyer moi un message dès maintenant
                    </p>
                </div>
                <div class="contact__content lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Nom</label>
                                <input type="text" id="name" name="name" v-model="values.name" @blur="validate('name')"
                                    @keypress="validate('name')"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                <span class="pt-2 text-red-400">{{ errors.name }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" v-model="values.email"
                                    @blur="validate('email')" @keypress="validate('email')"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span class="pt-2 text-red-400">{{ errors.email }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="subject" class="leading-7 text-sm text-gray-600">Sujet</label>
                                <input type="text" id="subject" name="subject" v-model="values.subject"
                                    @blur="validate('subject')" @keypress="validate('subject')"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span class="pt-2 text-red-400">{{ errors.subject }}</span>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" v-model="values.message"
                                    @blur="validate('message')" @keypress="validate('message')"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                <span class="pt-2 text-red-400">{{ errors.message }}</span>
                            </div>
                        </div>
                        <div class="contact__button pt-6 bg--400 w-full flex justify-center">
                            <!-- boutton d'envoi de l'email -->
                            <Button text="Envoyer" :blank="false" class="uppercase" @click="sendMeEmail()" />
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a href="mailto:wacnsoukpoe@gmail.com" class="text-red-400">wacnsoukpoe@email.com</a>
                            <p class="leading-normal my-5">
                                Quebec, Canada
                            </p>

                            <p class="leading-normal my-9">
                                Designed & build by wilfried n'soukpoe
                            </p>
                            <span class="inline-flex">
                                <SocialLinks />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
// components
import Button from "./Button.vue";
import SocialLinks from "./SocialLinks.vue";

import { object, string } from "yup";
export default {
    components: { Button, SocialLinks },
    data() {
        const contactSchema = object().shape({
            email: string().required("Email requis").email("Entrez un email valide"),
            name: string().required("Nom requis"),
            subject: string().required("Sujet requis"),
            message: string().required("Message requis"),
        });
        return {
            values: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
            errors: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
            contactSchema,
        };
    },

    methods: {
        validate(field) {
            this.contactSchema
                .validateAt(field, this.values)
                .then(() => {
                    this.errors[field] = "";
                })
                .catch((err) => {
                    this.errors[field] = err.message;
                });
        },
        sendMeEmail() {
            this.contactSchema
                .validate(this.values, { abortEarly: false })
                .then((res) => {
                    this.errors = {};

                    this.axios.post(`${import.meta.env.VITE_MAILTRAP_API_URL}/api/send`, {
                        from: {
                            email: this.values.email,
                            name: this.values.name
                        },
                        to: {
                            email: "wacnsoukpoe@gmail.com", 
                            name: "Wilfried N'SOUKPOE"
                        }, 
                        subject: this.values.subject, 
                        text: this.values.message
                    }, {
                        headers: {
                            "authorization": "Bearer " + import.meta.env.VITE_MAILTRAP_KEY
                        }
                    }).then(res => {
                        // console.log("tout marche bien")
                        this.$swal( "Succès", "Message envoyé", "success",)
                    }, err => {
                        // console.log("bon il y'a une erreur", err)
                        this.$swal("Erreur", "Erreur lors de l'envoi du message", "error")
                    })
                })
                .catch((err) => {
                    err.inner.forEach((error) => {
                        this.errors[error.path] = error.message;
                    });
                });
        },
    },
};
</script>
<style lang="scss">
.contact {
    
    z-index:1 ;
    &__button {
        z-index: 1;
    }
}
</style>