<template>
    <transition name="hero">
        <div class="flex w-full cursor-pointer rounded-lg h-80 bg-sw-black" v-if="!loading">
            <div class="flex flex-col mx-auto items-center justify-center">
                <CircleName :name="name"/>
                <span class="text-white py-3 text-lg">{{name}}</span>
                <span class="text-sw-graytext text-sm">SpeciesList </span>
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
          }
        },
        components: {CircleName},
        props: {name: String, species: Array},
        mounted() {
            this.loading = false;
        }

    }
</script>

<style lang="scss" scoped>
    .hero-enter-active, .hero-leave-active {
        transition: all 1s ease;
    }
    .hero-enter, .hero-leave-to
    {
        opacity: 0;
        transform: translateY(100px);
    }
</style>