<script setup>
import { onMounted, ref, watch } from "vue";
import fetchData from "../service/service";

const beers = ref([]);
const isOpen = ref(false);
const beersObj = ref({})


const getDataToPopup = async (beerId) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
    const data = await res.json();
    beersObj.value = data[0];
    // console.log(beersObj.value)
    isOpen.value = true;
}

onMounted(() => fetchData(beers))

watch(() => console.log(beersObj.value))
</script>

<template>
    <ul class="flex flex-wrap justify-center w-screen items-center">
        <li @click="getDataToPopup(beer.id)" class="flex flex-col items-center text-center w-40 h-72 my-5 mx-4 justify-center border-[1px] border-solid border-black p-8 cursor-pointer" v-for="beer in beers" :key="beer.id">
            <img class="w-12 h-52 " :src="beer.image_url" alt="beer-img">
            <p class="text-center mt-5 text-sm font-bold">{{ beer.name }}</p>
        </li>
    </ul>
    <div v-show="isOpen" class="absolute inset-0 flex items-center justify-center p-10 bg-gray-700 bg-opacity-60 border-[1px] border-solid border-black">
        <button class="relative top-[-20%] left-[61.5%] flex font-bold" type="button" @click="isOpen = false">X</button>
        <div class="flex justify-center items-center bg-white w-[60%] h-[25rem] mx-10 p-10 rounded-md shadow-xl">
            <img class="w-20 h-60 mr-4" :src="beersObj.image_url" alt="img-beer">
            <div class="ml-4 flex flex-col">
                <h1 class="text-3xl font-extrabold">{{ beersObj.name }}</h1>
                <p>{{ beersObj.description }}</p>
            </div>
        </div>
    </div>
</template>