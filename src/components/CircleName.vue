<template>
    <div :style="bgcolor" class="circle">{{name[0]}}</div>
</template>

<script>
    export default {
        name: "CircleName",
        data() {
            return {
                bgcolor: ''
            }
        },
        props: {name: String},
        created() {
            this.bgcolor = 'background-color: #'+(Math.random()*0xFFFFFF<<0).toString(16);
        }
    }
</script>

<style lang="scss" scoped>
.circle {
    @apply w-20 h-20 rounded-full flex justify-center items-center text-5xl text-center text-white;
}
</style>