<template>
    <div class="flex pt-32">
        <div class="relative md:max-w-2xl lg:max-w-3xl px-6 md:px-0  justify-center mx-auto w-full">
            <div class="form-control">
                <input @keyup.enter="search" v-model.trim="searchValue" @input="debounceSearch" id="search"
                       type="text"
                       class="input"
                       name="search">
                <label for="search"
                       :class="hasValue"
                       class="label">Search by name</label>
            </div>
            <svg class="absolute bottom-0 h-6 mb-2 right-0 w-6 mr-6 md:mr-0" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z"
                      fill="#808080"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                searchValue: '',
                result: {},
                debounce: null
            }
        },
        computed: {
            hasValue() {
                return this.searchValue.length > 0 ? '-mt-5' : 'mt-0'
            }
        },
        methods: {
            debounceSearch() {
                clearTimeout(this.debounce);
                this.debounce = setTimeout(this.search, 1000)
            },
            search() {
                if (this.searchValue.length > 0) {
                    axios.get(`https://swapi.dev/api/people/?search=${this.searchValue}`)
                        .then(response => {
                            this.result = response.data.results;
                            this.updateResults();
                        })
                        .catch(error => console.log(error))
                }
            },
            updateResults() {
                this.$emit('updateresults', this.result)
            }
        }


    }
</script>
<style lang="scss" scoped>
    .form-control {
        @apply flex flex-col border-b border-sw-graytext;
    }

    .form-control input:focus + label {
        @apply -mt-5;
    }

    .label {
        @apply text-lg text-sw-graytext font-normal absolute;
    }

    .input {
        @apply w-full bg-transparent outline-none text-white;
    }
</style>


