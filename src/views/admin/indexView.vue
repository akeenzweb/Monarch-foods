<template>
    <div class="admin-page">
        <div class="header">Header</div>
        <div class="side-bar">
            <ul>
                <i class="fa fa-window-close" aria-hidden="true"></i>
                <li :class="orders ? 'active' : 'not-active'" @click="selectOrder()"><i class="fa fa-th " aria-hidden="true"></i>Orders</li>
                <li :class="menu ? 'active' : 'not-active'" @click="selectMenu()"><i class="fa fa-cutlery" aria-hidden="true"></i>Menu</li>
                <li :class="categories ? 'active' : 'not-active'" @click="selectCategories()"><i class="fa fa-sort-amount-asc" aria-hidden="true"></i>Category</li>
                <li :class="delivery ? 'active' : 'not-active'" @click="selectDelivery()"><i class="fa fa-rocket" aria-hidden="true"></i>Delivery</li>
                <li :class="chart ? 'active' : 'not-active'" @click="selectChart()"><i class="fa fa-pie-chart" aria-hidden="true"></i>Chart</li>
                <li :class="history ? 'active' : 'not-active'" @click="selectHistory()"><i class="fa fa-history" aria-hidden="true"></i>History</li>
                <li :class="logout ? 'active' : 'not-active'" @click="selectLogout()"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</li>
            </ul>
        </div>
        <div class="contents">
            <transition name="page"><orderAdmin v-show="orders" /></transition>
            <transition name="page"><menuAdmin v-show="menu" /></transition>
            <transition name="page" appear="" mode="in-out"><categoryAdmin v-show="categories" /></transition>
            <!--<h1>Orders jbljljbb nlwnlnbnlwflwewe lelknlknflknlkenlk knlnnlnlnkd lnlknlkdnlnlkd lknlknlqndlndln</h1>-->
        </div>
    </div>
</template>

<script>
import orderAdmin from '/src/components/orderAdmin.vue'
import menuAdmin from '/src/components/admin/menuAdmin'
import categoryAdmin from '/src/components/admin/categoryAdmin'
export default {
    data () {
        return {
            orders: true,
            menu: false,
            categories: false,
            delivery: false,
            chart: false,
            history: false,
            logout: false
        }
    },
    components: {
        orderAdmin,
        menuAdmin,
        categoryAdmin
    },
    methods: {
        selectOrder() {
            this.orders = true
            this.menu = false
            this.categories = false
            this.delivery = false
            this.chart = false
            this.history = false
            this.logout = false
        },
        selectMenu() {
            this.orders = false
            this.menu = true
            this.categories = false
            this.delivery = false
            this.chart = false
            this.history = false
            this.logout = false
        },
        selectCategories() {
            this.orders = false
            this.menu = false
            this.categories = true
            this.delivery = false
            this.chart = false
            this.history = false
            this.logout = false
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');

* {
    margin: 0px;
    padding: 0px;
    font-family: 'Euclid Circular A';
    overflow-x: hidden;
    overflow-y: hidden;
}
.admin-page {
    /*width: 500px;*/
    margin: auto;
    border: 1px solid green;
    /*position: relative;*/
    height: 100%;
}
.header {
    padding: 10px;
    color: #fff;
    background: rgb(32,184,100);
}
.active {
    background: rgb(32,184,100);
    color: #fff;
}
.not-active {
    color: rgb(32,184,100);
    background: #fff;
}
.side-bar {
    /*border: 1px solid red;*/
    width: 280px;
    /*position: absolute;*/
    top: 45px;
    height: 100vh;
    color: rgb(32,184,100);
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    display: inline-block;
    overflow-y: hidden;
}
.side-bar li {
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 24px;
    padding-bottom: 24px;
    border: 1px solid rgb(255, 255, 255);
    font-size: 20px;
    cursor:pointer;
}
.side-bar li:hover {
    opacity: 0.6;
    /*background: rgb(247, 247, 247);*/
    /*color: rgb(32,184,100);*/
    border: 1px solid green;
    transform: scale(1.03);
}
.fa {
    margin-right: 20px;
    transform: translateY(4px)
}
.contents {
    display: inline-block;
    position: absolute;
    left: 23%;
    width: 75%;
    height: 100%;
    /*height: 100vh;*/
    /*border: 3px solid red;*/
    overflow-y: scroll;
}
::-webkit-scrollbar {
    width: 10px;
    }

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
  ::-webkit-scrollbar-thumb {
  background: rgb(32,184,100);
  border-radius: 5px;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(-2000px);
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.page-leave-active {
  transition: all 0.8s ease;
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(2000px);
}
.page-enter-active {
  transition: all 0.8s ease;
}



@media screen and (max-width: 425px){
    * {
        overflow-x: hidden;
    }
    .admin-page {
        width: 100%;
        overflow-x: hidden;
    }
    .side-bar {
        width: 200px;
        position: absolute;
    }
    .contents {
        display: block;
        position: relative;
        z-index: -1;
        /*left: 23%;*/
    }
}

</style>