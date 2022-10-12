<template>
    <div class="success-page" style="text-align:center">
        <img src="../assets/images/check.gif">
        <h1 style="background:#fff;width:300px;font-size:40px;color:green;margin:auto">Your Order has been placed</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push('/success')
        }, 2200)
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