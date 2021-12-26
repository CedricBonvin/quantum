<template>
  <main class="page">
      <h1 class="titleH1">CONTACT</h1>
      <div class="text">Pour toutes questions veuillez remplir le formulaire ou nour contacter directement par téléphone.</div>  
      <forms />
      <trouver />
      
  </main>
</template>

<script>
import forms from '../components/page-contact/form-contact.vue'
import trouver from '../components/page-contact/nous-trouver.vue'
export default {
  components : {forms, trouver}

}
</script>

<style scoped>
  .text{
    opacity: .8;
    text-align: left;
    width: 80%;
    padding: 20px;
    border: solid 1px teal;
    border-radius: 20px;
    margin: 50px auto;
    font-size: 18px;
    background: rgb(248, 248, 248);
    
  }
</style>