<template>
    <div class="flex w-full h-screen">
        <!-- NAVBAR -->
        <div class="w-[4.5rem] bg-[#1e1f22] h-full flex flex-col align-center p-3 gap-2">
            <!-- DM -->
            <div
                class="bg-[#313338] text-[#dbdee1] rounded-full w-12 h-12 transition hover:bg-[#5865f2] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center"
            >
                <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    v
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
                    ></path>
                </svg>
            </div>
            <!-- DM -->

            <v-divider :thickness="2" class="w-8"></v-divider>

            <!-- SERVERS -->
            <div
                class="rounded-full w-12 h-12 transition overflow-hidden hover:rounded-2xl flex justify-center align-center"
            >
                <img
                    src="https://cdn.discordapp.com/icons/766449757706125392/fdd1c66b1547e0ad7036080d5e1cebbe.webp?size=96"
                    alt=" "
                    width="48"
                    height="48"
                    aria-hidden="true"
                />
            </div>
            <!-- SERVERS -->

            <!-- ADD SERVER -->
            <div
                class="bg-[#313338] text-[#23a559] rounded-full w-12 h-12 transition overflow-hidden hover:bg-[#23a559] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center"
            >
                <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"
                    ></path>
                </svg>
            </div>
            <!-- ADD SERVER -->

            <!-- EXPLORE -->
            <div
                class="bg-[#313338] text-[#23a559] rounded-full w-12 h-12 transition overflow-hidden hover:bg-[#23a559] hover:text-[#ffffff] hover:rounded-2xl flex justify-center align-center"
            >
                <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <!-- EXPLORE -->
        </div>
        <!-- NAVBAR -->

        <!-- App -->
        <div class="flex flex-grow">
            <!-- SIDEBAR -->
            <div class="w-60 h-full bg-[#2b2d31] flex flex-col shrink-0">
                <!-- TOPBAR -->
                <div class="h-12 elevation-low flex justify-center align-center px-2.5">
                    <button
                        class="h-7 px-1.5 bg-[#1e1f22] rounded text-sm text-[#949ba4] cursor-pointer w-full whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                        Encontre ou comece uma conversa
                    </button>
                </div>
                <!-- TOPBAR -->

                <!-- PRIVATE CHANELS -->
                <div class="grow p-2">
                    <ul>
                        <li
                            class="w-full rounded hover:bg-[#35373c] active:bg-[#3b3d44] flex gap-3"
                        >
                            <div class="w-8 h-8">
                                <svg
                                    aria-hidden="true"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                                        class=""
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
                                        class=""
                                    ></path>
                                </svg>
                            </div>
                            <span>Amigos</span>
                        </li>
                    </ul>
                </div>
                <!-- PRIVATE CHANELS -->

                <!-- PROFILE -->
                <div
                    class="h-[3.25rem] bg-[#232428] px-[6px] flex gap-2 align-center justify-between"
                >
                    <!-- USER -->
                    <div
                        class="hover-showtag pl-[2px] py-1 rounded-md hover:bg-[#3d3e45] flex flex-grow gap-2"
                    >
                        <!-- AVATAR -->
                        <div class="w-8 h-8 relative">
                            <div class="rounded-full overflow-hidden">
                                <img
                                    src="https://cdn.discordapp.com/avatars/208561912806506497/6cd59941edaa9eebb244407341d76731.webp?size=256"
                                    alt=" "
                                    aria-hidden="true"
                                />
                            </div>
                            <div
                                class="status-icon w-[10px] h-[10px] bg-[#23a55a] rounded-full absolute bottom-0 right-0"
                            ></div>
                        </div>
                        <!-- AVATAR -->

                        <!-- NAME/TAG -->
                        <div class="mt-[-2px]">
                            <div class="text-white text-sm">Felini</div>
                            <div class="text-[11px] h-4 overflow-hidden">
                                <div class="relative top-0 transition-all status-tag">
                                    <div class="status">Disponível</div>
                                    <div class="tag">matfelini</div>
                                </div>
                            </div>
                        </div>
                        <!-- NAME/TAG -->
                    </div>
                    <!-- USER -->

                    <!-- ACTIONS -->
                    <div class="flex">
                        <button
                            class="w-8 h-8 rounded-md hover:bg-[#3d3e45] flex align-center justify-center"
                            aria-checked="false"
                            aria-label="Silenciar"
                            type="button"
                        >
                            <svg
                                aria-hidden="true"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"
                                    class=""
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z"
                                    class=""
                                ></path>
                            </svg>
                        </button>

                        <button
                            class="w-8 h-8 rounded-md hover:bg-[#3d3e45] flex align-center justify-center"
                            aria-checked="false"
                            aria-label="Desativar áudio"
                            type="button"
                        >
                            <svg
                                aria-hidden="true"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 3a9 9 0 0 0-8.95 10h1.87a5 5 0 0 1 4.1 2.13l1.37 1.97a3.1 3.1 0 0 1-.17 3.78 2.85 2.85 0 0 1-3.55.74 11 11 0 1 1 10.66 0c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86A9 9 0 0 0 12 3Z"
                                    class=""
                                ></path>
                            </svg>
                        </button>

                        <button
                            class="w-8 h-8 rounded-md hover:bg-[#3d3e45] flex align-center justify-center"
                            aria-label="Configurações de usuário"
                            type="button"
                        >
                            <svg
                                aria-hidden="true"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                    clip-rule="evenodd"
                                    class=""
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <!-- ACTIONS -->
                </div>
                <!-- PROFILE -->
            </div>
            <!-- SIDEBAR -->

            <!-- CHAT -->
            <div class="w-full h-full">
                <!-- TOPBAR -->
                <div class="h-12 elevation-low"></div>
                <!-- TOPBAR -->
            </div>
            <!-- CHAT -->
        </div>
        <!-- App -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AppView'
})
</script>

<style lang="scss" scoped>
.elevation-low {
    box-shadow:
        0 1px 0 hsl(240 calc(1 * 7.7%) 2.5% / 0.2),
        0 1.5px 0 hsl(0 calc(1 * 0%) 0.8% / 0.05),
        0 2px 0 hsl(240 calc(1 * 7.7%) 2.5% / 0.05);
}
.status-icon {
    box-shadow: 0 0 0px 3px #232428;
}
.hover-showtag:hover {
    .status-tag {
        top: -16px;
    }
}
</style>
