<template>
   <main class="page">
       <section class="header">
           <div class="boxh1">
               <h1>QUANTUM DEV</h1>
           </div>
       </section>

       <intro />
       <hr>

       <section-presentation />
       <hr>

       <section-icone-1 />
        <hr>

       <service-informatique />
       <hr>

       <section-web />
       <hr>
 
       <section-logo />
   </main>
</template>

<script>
import Intro from '../components/page-accueil/intro.vue'
import SectionIcone1 from '../components/page-accueil/section-icone1.vue'
import SectionLogo from '../components/page-accueil/section-logo.vue'
import sectionPresentation from '../components/page-accueil/section-presentation.vue'
import SectionWeb from '../components/page-accueil/section-web.vue'
import ServiceInformatique from '../components/page-accueil/service-informatique.vue'
export default {
  components: { Intro, sectionPresentation, SectionIcone1, ServiceInformatique,  SectionWeb, SectionLogo},
    name : "accueil"
}
</script>

<style scoped>
    .header{
        position: relative;
        width: 100%;
        height: 300px;
        background: url('../assets/images/header.jpg') no-repeat;
        background-size: cover;
        border-bottom: 10px solid var(--color-primary);
    }
    .boxh1{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;   
        transform: translate(-50% , -50%);
         
    }
    h1{
      background: rgba(0, 0, 0, 0.644);
        color: white;
        letter-spacing: 5px; 
        padding: 20px;
        font-size: 20px;
    }

    @media screen and (min-width : 600px){
        .header{
            width: 100%;
        height: 600px;
        }
        h1{
            font-size: 40px;
        }
       
    }
</style>