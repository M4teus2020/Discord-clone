<template>
    <RouterView />
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        RouterView,
    },
    methods: {
        async verifyRoute(): Promise<void> {
            const token: string | null = localStorage.getItem('token')

            if (token != null) {
                if (this.$route.name == 'login') {
                    this.$router.push({ path: '/' })
                }
            } else {
                if (this.$route.meta.requireLogin) {
                    this.$router.push({ path: '/login' })
                }
            }
        }
    },
    watch: {
        async $route(): Promise<void> {
            await this.verifyRoute()
        }
    }
})
</script>

<style lang="scss" scoped></style>
