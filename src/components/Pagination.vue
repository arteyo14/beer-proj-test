<script setup>
import { ref } from "vue";
import fetchData from "../service/service";

const emits = defineEmits(['number'])

defineProps({
    totalPage: {
        type: Number
    }
})

</script>

<template>
    <div class="flex justify-center">
        <nav aria-label="Page navigation example">
            <ul class="flex flex-row list-style-none">
                <li class="page-item">
                    <a class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none" href="#">Previous</a>
                </li>
                <ul v-for="num of totalPage">
                    <li class="page-item">
                        <button @click="$emit('number', num)"  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" type="button">{{ num }}</button>
                    </li>
                </ul>
                <li class="page-item">
                    <a class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>