<template>
    <section>
        <div class="container">
            <div class="titleForm">FORMULAIRE</div>
            <div class="boxFormulaire shadow">
                <h3>DEMANDE DE RENSEIGNEMENT</h3>
                <div class="col">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom">
                </div>
                <div class="col">
                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom">
                </div>
                <div class="col">
                    <label for="mail">E-mail</label>
                    <input type="text" id="mail">
                </div>
                <div class="col">
                    <label for="phone">Téléphone</label>
                    <input type="text" id="phone">
                </div>
                <div class="message">
                    <label for="message">Message</label>
                    <textarea name="message" id="message"  rows="10"></textarea>
                </div>
                <div class="boxButton">
                    <button class="button validButton">ENVOYER</button>
                </div>
            </div>
        </div>
      
    </section>
</template>

<script>
export default {
    name : "formulaire-contact"
}
</script>

<style scoped>
   .container{
        width: 80%;
   }
   .titleForm{
       font-size: 30px;
       font-weight: bold;
       opacity: .8;
   }
    .container{
        max-width: 1200px;
        margin: auto;
    }
    .boxFormulaire{
       
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        padding: 20px;
    }
    h3{
        width: 100%;
        padding-bottom: 25px;
        opacity: .8;
        text-decoration: underline;
        text-align: left;
        
    }
    .col{
        width: 50%;
        display: flex;
        flex-flow: column;
        margin: 10px 0;
    }
    .message{
        width: 100%;
        margin-top: 50px;
    }
    textarea{
        width: 80%;
        background: rgb(247, 247, 247);
        padding: 10px;
    }
    label{
        display: block;
        text-align: left;
    }
    input{
        width: 200px;
        border: none;
        background: rgb(238, 238, 238);
        padding: 3px;
    }
    .boxButton{
        width: 100%;
        display: flex;
        justify-content: right;
        padding-top: 20px;
    }

    @media screen and (max-width : 600px){
        .container{
            width: 90%;
        }
        .boxFormulaire{
            width: 90%;
            margin: auto;
        }
       h3{
           font-size: 20px;
           padding-bottom: 40px;
       }
       .col{
           width: 100%;
       }
       input{
           width: 100%;
           margin: 0;
           padding: 5px;
       }
       textarea{
           width: 80%;
       }
       hr{
           margin: 20px auto;
       }
    }
</style>