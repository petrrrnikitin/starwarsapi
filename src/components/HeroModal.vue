<template>
    <div v-if="show">
        <div class="flex flex-col h-80 bg-sw-black">
            <div class="border-b-2 border-sw-border mb-20">
                <CircleName :name="name"/>
                <span>{{name}}</span>
            </div>
        </div>
        <ul>
            <li>Birth year {{birth_year}}</li>
            <li>Species {{species}}</li>
            <li>Gender {{gender}}</li>
            <li>Homeworld {{homeworld}}</li>
            <li>Films {{films}}</li>
        </ul>
    </div>
</template>

<script>
    import CircleName from "./CircleName";
    export default {
        name: "HeroModal",
        components: {CircleName},
        data() {
            return {
                show: false,
            }
        },
        methods: {
            showHero() {
                this.show = true;
            }
        },
        props: {name: String, species: Array, homeworld: String, birth_year: String, gender: String, films: Array},
    }
</script>

<style scoped>

</style>