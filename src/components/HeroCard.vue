<template>
    <transition name="hero">
        <div class="hover:shadow-sw flex w-full cursor-pointer rounded-lg h-80 bg-sw-black" v-if="!loading">
            <div class="flex flex-col mx-auto items-center mt-20">
                <CircleName :name="name"/>
                <span class="text-white py-3 text-lg">{{name}}</span>
                <span v-for="specie in speciesValue" class="text-sw-graytext text-sm">{{specie}} </span>
            </div>
        </div>
    </transition>
</template>

<script>
    import CircleName from "./CircleName";

    export default {
        name: "HeroCard",
        data() {
            return {
                loading: true,
                speciesValue: []
            }
        },
        components: {CircleName},
        props: {name: String, species: Array},
        created() {
           if (this.species.length > 0){
               this.species.forEach(specie => {
                   axios.get(specie.replace(/^http:\/\//i, 'https://'))
                       .then(response => this.speciesValue.push(response.data.name))
                       .catch(error => console.log(error))
               })

           }
        },
        mounted() {
            this.loading = false;
        }

    }
</script>

<style lang="scss" scoped>
    .hero-enter-active, .hero-leave-active {
        transition: all 1s ease;
    }

    .hero-enter, .hero-leave-to {
        opacity: 0;
        transform: translateY(100px);
    }
</style>