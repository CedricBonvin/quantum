<template>
    <section>
        <div class="conth2">
            <h2 class="titleSection">DESIGN DE LOGO</h2>
            <p>NOTRE SERVICE DESIGN SE RÉJOUIRA DE CRÉER VOTRE PROPRE LOGO PERSONALISÉ !</p>
        </div>
        <div class="col">
            <img src="@/assets/images/logo-medecine.png" alt=" logo médecine">
            <img src="@/assets/images/logo-quantum.webp" alt=" logo quantum">
            <img src="@/assets/images/logo-oiseaux.png" alt=" logo oiseaux">
        </div>
    </section>
</template>

<script>
export default {
    name : "section-logo"
}
</script>

<style scoped>
    .col{
        width: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        padding: 30px 0;
    }
    section{
        margin-bottom: 50px;
    } 
    p{
        font-weight: bold;
        opacity: .8;
        font-size: 20px;
        margin: 30px auto;
        text-align: center;
    }
    .conth2{
        width: 90%;
        margin: auto;
    }
    img{
        width: 95%;
        max-width: 300px;
        display: inline-block;
        margin: auto;
    }

    @media screen and (min-width : 600px){
        p{
            width: 50%;
            font-size: 25px;
            margin: 50px auto;
        }
        .col{
            padding: 30px 0;
        }
        img{
            width: 30%;
        }
    }
</style>