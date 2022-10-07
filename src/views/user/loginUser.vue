<template>
    <div class="content2 row body">
        <form class="form-box">
                    <!--<img src="https://i.im.ge/2022/10/03/1ZRfNr.vector5.png">-->
                    <img src="https://i.im.ge/2022/10/03/1KgBcK.logo1i.png">
                    <!--<img src="https://i.im.ge/2022/10/03/1K8Tvh.logo1ii.png">-->
                    <div class="all-input">
                        <input  type="email" class="email inp" name="email" required placeholder="Email"><br>
                        <input type="password" class="pass inp" name="password" required placeholder="Password"><br>
                        <input type="submit" class="log inp" name="login" value="login" @click="submit()">
                    </div>
                    <!-- <input type="checkbox"><h4>Remem</h4> -->
                    <h6>Forgot Password?</h6>
                </form>

        </div>
</template>

<script>
export default {
    methods: {
        submit() {
            this.$router.push('/splash')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');
* {
    margin: 0;
    padding: 0;
    font-family: 'Euclid Circular A';
}

.body {
    /*background: rgb(32,184,100);
    background: linear-gradient(23deg, rgba(32,184,100,1) 34%, rgb(29, 29, 29) 78%);*/
    background: black;
    height: 100vh;
}

form {
    margin: auto;
}


.box {
    /* background-color: rgb(182, 179, 179); */
    width: 30px;
    height: 400px;
    padding: 5px;
    display: flex;
    justify-content: center;
}

.form-box {
    margin-top: 150px;
    height: 400px;
    width: 350px;
    text-align: center;
    opacity: 0.98;
    border-radius: 20px;
}
.all-input {
    margin-top: 20px;
}
.inp {
    width: 300px;
    margin-bottom: 35px;
    height: 45px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    padding-left: 20px;
}
.email,  .pass {
    margin-bottom: 15px;
    background: rgb(32, 32, 32);
    transition: all 0.4s ease;
    color: #fff;
    /*border: 1px solid gray;*/
}
.email:focus, .pass:focus {
    transform: scale(1.03);
    padding: 8px;
    outline: none;
    border: none;
    border: 2px solid green;
    transition: all 0.4s ease;
}
img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transform: translateY(-70px);
}
.log {
    background-color: #20b864;
    color: #fff;
    /*font-family: Arial, Helvetica, sans-serif;*/
    font-size: 18px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}
h6 {
    color: #fff;
}
h6:hover {
    color: rgb(253, 238, 154);
}
</style>