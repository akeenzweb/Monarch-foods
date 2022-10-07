<template>
    <div class="screen-view">
        <img class="logo" src="../assets/logo/logo1ii.png">
    </div>
</template>

<script>
    export default {
        created() {
            setTimeout(() => {
            this.$router.push('/')
          }, 5000)
        }
    }

</script>

<style>
.screen-view {
    margin: auto;
    position: relative;
    text-align: center;
    /*border: 1px solid green;*/
}
.logo {
    /*width: 100%;*/
    /*margin-top: 35%;*/
    animation: fade-in 3s;
    transition: all 0.4s ease;
}
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    40% {
        opacity: 0.5;
        transform: scale(1.02);
    }
    80% {
        opacity: 0.9;
        transform: scale(0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@media screen and (max-width: 425px) {
    .logo {
    width: 100%;
    margin-top: 35%;
}
}
</style>