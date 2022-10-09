<template>
    <div class="modal-background">
        <div class="modal-block">
            <img style="float:right" @click="closeModal()" src="../assets/images/close-square.svg"><br>
            <div class="details">
                <div class="img-block"><img :src="itemViewed.image"></div>
                <h2 class="name"><b>{{itemViewed.name}}</b></h2><br>
                <h2 class="price">{{itemViewed.price}}</h2>
                <button>Add to Cart</button>
                <h5 class="description">{{itemViewed.description}}</h5>
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
            itemViewed: {}
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
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;

    left: 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

  }
  .modal {
    padding: 20px;
    width: 250px;
    position: absolute;
    border-radius: 8px;
    top: 55px;
    background: #fff;
    height: 250px;
    border: 3px solid green;
  }
  .modal-block {
    padding: 20px;
    width: 80%;
    border-radius: 8px;
    /*border: 3px solid green;*/
    height: 550px;
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