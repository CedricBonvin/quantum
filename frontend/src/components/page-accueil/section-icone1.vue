<template>
    <section>
        <div class="col">
            <i class="fas fa-check-circle"></i>
            <h2>RÉACTIVITÉ</h2>
            <p>Nous fraperons à votre porte avant d'avoir clancher le téléphone !</p>
        </div>
        <div class="col">
            <i class="fas fa-check-circle"></i>
            <h2>ACCOMPAGNEMENT</h2>
            <p>Nous vous accompagnerons tout au long de votre projet !</p>
        </div>
        <div class="col">
            <i class="fas fa-check-circle"></i>
            <h2>SOLUTIONS</h2>
            <p>Nous trouvons les solutions adaptées à votre projet !</p>
        </div>
    </section>
</template>

<script>
export default {
    name : "section-icone1"
}
</script>

<style scoped>
    section{
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        background: rgb(43, 43, 43);
        color: white;
        padding: 40px 0;
        
    }
    .col{
        width: 300px;
        margin: 20px 0;
    }
    i{
        font-size: 30px;
        color : var(--color-primary);
    }
    h2{
        margin: 20px 0;
    }
</style>