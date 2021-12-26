<template>
  <section class="contGutter">
        <h2 class="titleSection">QUATUM-DEV</h2>
        <div class="container">
            <div class="left col">
                <img src="@/assets/images/figurine-bureau.webp" alt="">
            </div>
            <div class="col col2">
                <ul>
                    <li>- ANGAGEMENT</li>
                    <li>- PROFESSIONALISME</li>
                    <li>- ACCOMPAGNEMENT</li>
                    <li>- SOLUTION SUR MESURE</li>
                    <li>- RÉACTIVITÉ</li>
                </ul>
            </div>
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  
    img{
        width: 100%;
    }
    /* .container{
        display: flex;
        align-items: center;
    } */
    .col{
        width: 100%;
    }
    .col2{
        display: flex;
        justify-content: center;
    }
    li{
        list-style-type: none;
        font-size: 20px;
        line-height: 2;
        font-weight: bold;
        opacity: .8;
    }
    .contGutter{
        margin-top: 50px;
    }


     @media screen and (min-width : 600px){

        .contGutter{
            margin-top: 100px;
        }
        li{
            font-size: 20px;
            line-height: 2.5;
        }
        .container{
            display: flex;
            align-items: center;
        }
    }

    @media screen and (min-width : 900px){

        .contGutter{
            margin-top: 100px;
        }
        li{
            font-size: 25px;
            line-height: 2.5;
        }
        .container{
            display: flex;
            align-items: center;
        }
    }
</style>