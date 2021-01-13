<template>
    <router-link
        :to="$withBase(path)"
        :class="activate ? 'activate bar-button' : 'bar-button'"
    >
        <div class="svg">
            <template v-if="svg == 'home'">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home"
                >
                    <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
            ></template>
            <template v-if="svg == 'book'">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-book"
                >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path
                        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    ></path>
                </svg>
            </template>
            <template v-if="svg == 'user'">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </template>
        </div>
        <div class="name">{{ name }}</div>
    </router-link>
</template>

<script>
export default {
    name: "BarButton",
    props: ["svg", "name", "activate", "path"],
    data() {
        return {};
    },
};
</script>

<style scoped lang="stylus">
@import '../style/base-color';

.bar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 6px 22px;
    margin: 10px 0;
    height: 40px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    transition: all 0.3s;

    &:hover {
        background: color-blue-opacity;
        border-radius: 30px;
        color: color-blue;
    }
}

.svg {
    width: 30px;
    display: flex;
    align-items: center;
}

.name {
    width: 170px;
    text-align: left;
    font-size: 18px;
}

.activate {
    color: color-blue;
}
</style>