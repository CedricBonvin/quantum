<template>
    <div class="topBar">
        <div class="logo">Quantum dev</div>
        <div class="topBarLeft">
            <div class="link collapse">
                <router-link class="LinkVertical" to="/">Accueil </router-link>
                <router-link class="LinkVertical" to="/tarif">Tarif </router-link>
                <router-link class="LinkVertical" to="/contact">Contact </router-link>
            </div>
            <i @click="hamburger($event)" class=" hamburger fas fa-bars"></i>
            

            <!-- <div class="boxLinkLogin ">
                <div @click="openSousMenuLogin($event)" class="linkSousMenu" v-if="this.$store.state.user.prenom"> {{ this.$store.state.user.prenom }} </div>
                <div @click="goLogin" class="linkSousMenu" v-else> Login</div>
                <div>
                    <ul v-if="loginSousMenu" class="sousMenuLogin">
                        <li @click="goMonCompte" >Mon compte</li>
                        <li @click="deconnexion" >Déconnexion</li>
                    </ul>
                </div>
            </div> -->


        </div>
         
    </div>
</template>

<script>
export default {
    name : "top-bar",
    data(){
        return{

            loginSousMenu : false,
        }
    },
    methods : {
        openSousMenuLogin(e){
            e.stopImmediatePropagation()
            this.loginSousMenu ? this.loginSousMenu = false : this.loginSousMenu = true
            document.querySelector(".link").classList.add("collapse")
        },
        closeSousMenu(){
            let html = document.querySelector("html")
            html.addEventListener("click",()=> {
                    this.loginSousMenu = false          
            })
        },  
        deconnexion(){
            this.$store.state.user = {}
            localStorage.removeItem("connection")
        },
        goLogin(){
            this.$store.state.displayLogin = true
        },
        goMonCompte(){
            this.$router.push({path : "/user"})
        },
        hamburger(e){
            e.stopImmediatePropagation()
           let hamburger = document.querySelector(".link")
           hamburger.classList.contains("collapse") ? hamburger.classList.remove("collapse") : hamburger.classList.add("collapse")
           this.loginSousMenu = false
        },
        closeMenu(){
            let html = document.querySelector("html")
            html.addEventListener("click",() => {
                document.querySelector(".link").classList.add("collapse")
                console.log()
            })
        }
    },
    mounted(){
        this.closeMenu()
        this.closeSousMenu()
    }
}
</script>

<style scoped>

    .topBar{
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(245, 245, 245);
        color: black;
    }
    .topBarLeft{
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
    a{
        
        color: black;
        text-decoration: none;
        transition: .3s;
    }
    /* a:hover{
        display: inline-block;
        transform: scale(1.1);
        color: red;
    } */
    .linkSousMenu{
        color: white;
        text-decoration: none;
        transition: .3s;
    }
    p{
        display: inline-block;
    }
    .linkSousMenu:hover{
        display: inline-block;
       transform: scale(1.1);
       color: red;
    }
    .logo{
        font-weight: bold;
        font-size: 1.2rem;
    }
    .user{
        cursor: pointer;
    }
    .boxLinkLogin{
        position: relative;
        margin-right: 20px;
    }
    .sousMenuLogin{
        position: absolute;
        z-index: 100000;
        bottom:  -100px;
        left: 0;
        display: flex;
        flex-flow: column;
        transform: translate(-43%, 0%);
        background: rgba(201, 201, 201, 0.664);
        color: black;
        font-weight: 500;
        list-style-type: none;
        transition: .2s;
    }
    .sousMenuLogin li{
        padding: 10px 20px;
    }
    .sousMenuLogin li:hover{
        
        cursor: pointer;
        color: green;
    }
    .link{
        position: fixed;
        top: 50px;
        right: 0;
        display: flex;
        flex-flow: column;
        font-weight: bold;
        background: rgb(245, 245, 245);   
    }
    .collapse{
        display: none;
    }
    .linkSousMenu{
        cursor: pointer;
    }
    .hamburger{
        font-size: 1.5rem;
        cursor: pointer;
        margin-right: 15px;
        color: black;
        
    }
    .LinkVertical{
        padding: 10px 15px;
    }
    .LinkVertical:hover{
        color: red;
        font-size: 1.2rem;
    }

    @media screen and (min-width: 600px){
        .hamburger{
            display: none;
            color: blue;
        }
        .link{
            display: block;
            position: inherit;
        }
        .linkSousMenu{
            padding-left: 15px;
        }
        .topBarLeft{
            display: flex;
        }
        .linkVertical{
            border-bottom: none;
        }
    }
</style>