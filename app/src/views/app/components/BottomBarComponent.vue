<template>
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
            <BtnActionComponent 
                icon="Mic"    
            />
            <BtnActionComponent 
                icon="HeadPhone"    
            />
            <BtnActionComponent 
                icon="Cog"    
            />
        </div>
        <!-- ACTIONS -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BtnActionComponent } from '@/components'

export default defineComponent({
    name: 'BottomBarComponent',
    components: {
        BtnActionComponent,
    }
})
</script>

<style lang="scss" scoped>
.status-icon {
    box-shadow: 0 0 0px 3px #232428;
}
.hover-showtag:hover {
    .status-tag {
        top: -16px;
    }
}
</style>