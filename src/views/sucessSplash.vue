<template>
    <div class="success-page" style="text-align:center"><img src="../assets/images/check.gif"></div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push('/success')
        }, 4000)
    }
}
</script>

<style scoped>
.success-page {
    background: url('../assets/images/success-background.png');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
img {
    width: 300px;
    height: 300px;
    margin-top: 50%;
    /*transform: scale(1.5);*/
}
@media screen and (min-width:1024px) {
    img {
        margin-top: 10%;
    }
}


</style>