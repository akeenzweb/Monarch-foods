<template>
    <div class="payment-page">
        <div style="text-align:center"><i style="transform: scale(4);margin-top:250px;color: rgb(32,184,100)" class="fa fa-university" aria-hidden="true"></i></div>
        <ul class="payment">
            <li>
                <!--<i class='fas fa-coins'></i>-->
                <img src="../assets/images/chip.jpeg">

                <h2>Monarch Chip</h2>
            </li>
            <li>
                <img src="../assets/images/cash.jpeg">
                <h2>Cash</h2>
            </li>
        </ul>

    </div>
</template>

<style scoped>

.payment-page {
    padding: 20px;
    /*background: rgb(32,184,100);*/
}
.payment {
    margin-top: -130px;
    text-align: center;
    /*border: 2px solid red;*/
    margin-left: -20px;
}
.payment li {
    display: inline-block;
    list-style: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 130px;
    border-radius: 8px;
    /*height: 300px;*/
}
.payment img, .fa {
    width: 130px;
    height: 130px;
}
.payment li:nth-child(1) {
    float: left;
}

h2 {
    font-size: 14px;
}


</style>