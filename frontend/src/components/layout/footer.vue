<template>
  <footer class="footer">
    <div class="col">
        <h3>Naviguation</h3>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/tarif">Tarif</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
    <div class="col">
        <h3>Partenaires</h3>
        <a href="https://www.cransmontana.ch/fr/accueil/" target="_blank">
            image logo
        </a>
        
    </div>
    <div class="col">
        <h3>Contact</h3>
        <address class="adress">
            Quantum-Dev<br> Route de la Moubra 73 <br> 3963 putain de francais <br> tél. +33 (0) 79 519 04 84 <br>info@quantum-dev.fr
        </address>
    </div>

  </footer>
</template>

<script>
export default {
    name : "footer-section"
}
</script>

<style scoped>

    .footer{
        width: 100%;
        background: black;
        color: white;
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        padding-top: 0;
        padding-bottom: 20px;
    }
    .adress{
        font-size: 14px;
        line-height: 1.4;
    }
    h3{
        padding-bottom: 1em;
        font-size: 14px;
        opacity: .5;
        margin-top: 20px;
    }
   
    ul{
        list-style-type: disc;
    }
    li{
        margin-left: 1em;
        font-size: 14px;
        line-height: 1.5rem;
    }
    a{
        color: white;
    }
    i{
        font-size: 2em;
    }
    .logoAccm{
        width: 80px;
    }
    .col:nth-child(2){
        text-align: center;
    }

    @media screen and (max-width : 600px){
        a{
            font-size: 14px;
        }
    }
</style>