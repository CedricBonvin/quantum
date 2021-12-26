<template>
  <section class="contGutter">
      <h2 class="titleSection">INFORMATIQUE</h2>
      <h3>NOS SERVICES INFORMATIQUE</h3>
      <div class="box">
            <div class="col1">
                <img src="@/assets/images/ordi.png" alt="photo ordinateur">
            </div>
            <div class="col2">
                <i class="iconeChevron fas fa-chevron-circle-right"></i>
            </div>
            <div class="col3">
                <p class="paraHeader">Nous assurons votre support informatique. De la maintenance de vos équipements, à l'assistance pour l'utilisation de vos logiciels.</p>
                <ul>
                    <li>- CONSEIL</li>
                    <li>- DÉPANNAGE</li>
                    <li>- ASSISTANCE</li>
                    <li>- FORMATION</li>
                    <li>- SUR SITE OU À DISTANCE</li>
                </ul>
            </div>
      </div>
      <div class="epilogue">
          <i class="iconeInfo fas fa-info-circle"></i>
          <p><strong>Nous intervenons rapidement sur simple appel ou sur rendez-vous.</strong> <br>
             Tracas quotidien, panne ponctuelle ou assurance d’un technicien disponible, Quantum-Dev est à votre écoute et nous avons une solution adapté à chacun de vous. <br>
            « Rester concentré sur votre cœur de métier, on s’occupe du reste !</p>
        </div>
  </section>
</template>

<script>
export default {
    name : "servic-informatique"
}
</script>

<style scoped>
    
    h3{
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin: 50px 0;
        letter-spacing: 3px;
    }
    img{
        display: block;
        width: 50%;
        margin: auto;
    }
    .col1, .col3{
        width: 100%;
    }
    .col2{
        width: 100%;
        text-align: center;
        margin: 30px 0;
    }
    .iconeChevron{
       font-size: 50px;
       color: var(--color-primary);
       transform: rotate(90deg);
    }
    .paraHeader{
        font-size: 20px;
        font-weight: bold;
    }
    li{
        margin-top: 20px;
        line-height: 1.1;
        text-align: center;
    }
    .epilogue{
        font-size: 20px;
        margin-top: 50px;
        padding: 20px;
        border: solid 1px var(--color-primary);
        border-radius: 10px;
        background: rgb(245, 245, 245);
    }
    .iconeInfo{
        color: var(--color-primary);
        font-size: 50px;
        margin-bottom: 20px;
    }


     @media screen and (min-width : 900px){
         h3{
             font-size: 30px;
         }
        .box{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        img{
             width: 80%;
        }
        .col1, .col3{
            width: 40%;
        }
        .col2{
            width: 20%;
            
        }
        .iconeInfo{
            color: var(--color-primary);
            font-size: 50px;
            margin-bottom: 20px;
        }
        .iconeChevron{
            font-size: 100px;
            color: var(--color-primary);
            transform: rotate(0deg);
        }
    }
</style>