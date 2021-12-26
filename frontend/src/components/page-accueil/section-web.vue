<template>
   <section class="contGutter">
       <h2 class="titleSection">DÉVELOPEMENT WEB</h2>
       <div class="section">
           <div class="col col2">
               <img src="@/assets/images/web.jpg" alt="phto web">
           </div>
           <div class="col col1 shadow">
               <p>Que vous souhaitiez avoir pignon sur web
                    ou que vous ayez déjà un site,
                    nous vous aidons à développer votre visibilité sur Internet,
                    et vous accompagnons vers cette transition numérique,
                    où l'humain reste au cœur du projet.
                </p>
                <button class="button validButton">NOS CRÉATIONS</button>
           </div>
           
       </div>
   </section>
</template>

<script>
export default {
    name : "section-web"
}
</script>

<style scoped>
   
    h2{
        margin-bottom: 50px;
    }
    .col{
        width: 100%;
    }
    .col1{
        /* background: rgb(243, 243, 243); */
        padding: 30px;
        margin-top: 30px;

    }
    img{
        display: block;
        width: 100%;
        max-width: 500px;
        margin: auto;
    }
    button{
        margin: 30px 0;
        font-size: 20px;
        background: rgb(42, 156, 255);
    }
    p{
        line-height: 1.4;
        font-size: 18px;
    }


    @media screen and (min-width : 900px){
        .section{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .col{
            width: 40%;
            order: 1;
        }
        .col1{
            margin: 0;
        }
        .col2{
            order: 2;
        }

    }
</style>