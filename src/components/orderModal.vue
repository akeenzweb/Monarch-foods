<template>
    <div class="modal-background">
        <div class="modal-block">
            <img style="float:right" @click="closeModal()" src="../assets/images/close-square.svg"><br>
            <hr>
            <div class="details">
                <h3>Order</h3>
                <ul v-for="(menu, index) in menuObject" :key="index">
                    <li>{{menu.name}}, ({{menu.quantity}})</li>

                </ul>
                <hr>
                <h3>Total: {{total}}</h3>
            </div>
        </div>
        <!--<div class="modal">
            cool<br> djjjjsj<br> jsdusdhsd<br> ruihudh4ud d34uihdu34u43hd 3dh4uhu3hd3 d3h4uih3uhf j3iuhuhdf uih5ufu3fuf
        </div>-->
    </div>
</template>

<script>
    export default {
        props: {
            menuObject: [],
            total: Number
        },
        created() {
            console.log("menuObject = ", this.menuObject)
        },
        methods: {
            closeModal () {
                this.$emit("closeModal")
            }
        }
    }
</script>

<style scoped>
.modal-background {
    width: 100%;
    height: 200%;
    background: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;

    left: 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

  }

  .modal-block {
    padding: 20px;
    width: 50%;
    border-radius: 8px;
    /*border: 3px solid green;*/
    /*height: 550px;*/
    background: #fff;
    position: absolute;
    top: 55px;
  }
  .details  {
    margin-top: 30px;
  }
  .details .img-block {
    width: 250px;
    height: 250px;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius:  30px 30px 30px 30px;
    margin: auto;
  }
.details img {
    transition: all 0.5s ease;
}
.details img:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
}
.details button {
    background:#fff;
    border: none;
    height: 35px;
    color: rgb(32,184,100);
    text-align: left;
    cursor: pointer;
    margin-top: -10px;
    margin-left: 5px;
    font-size: 20px;
}
.details .name {
    color: black;
    font-family: Poppins;
    font-size: 22px;
    margin-left: 10px;
    margin-top: 20px;
}
.details .price {
    color: rgb(255, 196, 0);
    margin-top: -25px;
    font-size: 20px;
    font-style: italic;
    margin-left: 10px;
}
.details .description {
    color: rgb(199, 196, 196);
    margin-top: 5px;
    font-size: 16px;
    font-style: italic;
    margin-left: 10px;
}
</style>