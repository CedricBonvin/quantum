<template>
   <section>
        <div class="box">
            <h2>NOUS TROUVER</h2>
            <div class="boxFrameAndIInfo">
                <div>
                    <p>SITUATION</p>
                    <iframe class="iframe" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=moubra%20escalade+(escalade%20Moubra)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe>
                </div>
                <div class="info">
                    <i class=" iconeInfo fas fa-info-circle"></i>
                    <div class="boxInfo">
                        <p class="address">Quantum Dev<br> Route de la Moubra 73 <br> 3963 France</p>
                        <div>
                            <p> <i class=" iconeContact fas fa-phone-alt"></i> +33 (5) 797 78 787</p>
                            <p><i class=" iconeContact fas fa-envelope-open"></i> info@quantum-Dev.fr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>

<script>
export default {
    name : "situation"
}
</script>

<style scoped>
    section{
        margin: 50px auto;
        background: rgb(243, 243, 243);
        padding: 80px 0;
        margin-top: 100px;
    }
    .box{
        width: 80%;
        margin: auto;
    }
    .info{
        margin: 50px auto;
    }
    h2{
        font-size: 40px;
        opacity: .8;
        padding-bottom: 50px;
        text-decoration: underline;
    }
  
    .boxIframe p{
        font-weight: bold;
    }
    .iframe{
        width: 100%;
        height: 300px;
        border: solid 1px rgb(255, 255, 255);
    }
    .boxFrameAndIInfo{
        width: 100%;
        
    }
    .iconeInfo{ 
        display: block;   
        font-size: 70px;
        margin: auto;
        text-align: center;
        padding-bottom: 30px;
        color: teal;
    }
    .boxInfo{
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
    }
    .address, .boxInfo p{
        line-height: 1.8;
        font-size: 20px;
    }
    .iconeContact{
        font-size: 30px;
        opacity: .8;
        margin-right: 20px;
    }
    input{
        padding: 5px;
    }

    @media screen and (max-width : 900px){
        section{
             padding: 20px 0;
             margin: 50px auto;
        }
        h2{
            font-size: 25px;
         
        }
       .boxFrameAndIInfo{
           display: flex;
           flex-flow: column;
       }
       .box{
           width: 90%;
       }
       .boxIframe{
           width: 100%;
       }
       .boxInfo{
           display: block;
        margin: auto;
        width: 100%;   
       }
       .boxInfo p{
           width: 100%;
           text-align: center;
       }
       .address{
           margin-bottom: 50px;
       }
    }
    
</style>