<template>
    <div class="flex w-full h-screen">
        <!-- SIDEBAR -->
        <div class="w-[4.5rem] bg-[#1e1f22] h-full flex flex-col align-center p-3 gap-2">
            <!-- DM -->
            <div class="bg-[#313338] text-[#dbdee1] rounded-full w-12 h-12 transition hover:bg-[#5865f2] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center">
                <svg 
                    aria-hidden="true" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30"
                    fill="none" v
                    viewBox="0 0 24 24">
                    <path 
                        fill="currentColor"
                        d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
                    >
                    </path>
                </svg>
            </div>
            <!-- DM -->

            <v-divider :thickness="2" class="w-8"></v-divider>

            <!-- SERVERS -->
            <div class="rounded-full w-12 h-12 transition overflow-hidden hover:rounded-2xl flex justify-center align-center">
                <img src="https://cdn.discordapp.com/icons/766449757706125392/fdd1c66b1547e0ad7036080d5e1cebbe.webp?size=96" alt=" " width="48" height="48" aria-hidden="true">
            </div>
            <!-- SERVERS -->

            <!-- ADD SERVER -->
            <div class="bg-[#313338] text-[#23a559] rounded-full w-12 h-12 transition overflow-hidden hover:bg-[#23a559] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"></path></svg>
            </div>
            <!-- ADD SERVER -->

            <!-- EXPLORE -->
            <div class="bg-[#313338] text-[#23a559] rounded-full w-12 h-12 transition overflow-hidden hover:bg-[#23a559] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path fill="currentColor" fill-rule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z" clip-rule="evenodd"></path></svg>
            </div>
            <!-- EXPLORE -->

        </div>
        <!-- SIDEBAR -->
        <!-- app -->
        <div>
            <div class="w-60 bg-[#2b2d31] h-full"></div>
        </div>
        <!-- app -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AppView'
})
</script>

<style lang="scss" scoped>
</style>