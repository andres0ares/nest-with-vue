<template>
    <div class="df-root">

        <h4>Algumas outras informações</h4>

        <form class="form" :onsubmit="() => enviar(sendData)">
          <label for="name">Nome</label>
          <input class="text-form" type="text" name="name" id="name" value="" autocomplete="off">
          <div class="check-div">
              <label class="check-label" for="checkbox">Estágio Concluido</label>
              <input class="check" type="checkbox" name="estagio" id="estagio">
          </div>
          <button class="btn-limpar" >Limpar</button>
          <button class="btn-enviar" type="submit" val>Enviar</button>
          
        </form>

    </div>
</template>

<script>

//const sendTest = sendData

export default {
    name: 'DisFormSection',
    setup: () => {

        const enviar = (sendData) => {
            var nameValue = document.getElementById("name").value
            var checked = document.getElementById("estagio").checked

            let obj = {
                name: nameValue,
                estagio: checked
            }
            
            sendData(obj)
            return false
        }

        return { enviar }
    },
    data: () => ({
       
    }),
    props: {
        sendData: Function
    }
}

</script>

<style scoped>

.df-root {
    padding: 10px 0;
    float: left;
    width: 100%;
}

.form {
    width: 80%;
    overflow: hidden;
    display: block;
    margin: 10px 10%;
}

.text-form {
    height: 30px;
    margin: 0 5%;
    border: 2px solid gray;
    border-radius: 6px;
    width: 90%;
    
}
.check-div {
    width: 30%;
}
.check {
    height: 25px;
    width: 25px;
    margin: 10px 0 0 0;
    background-color: #eee;
    border-radius: 15px;
}

.check-label {
    position: absolute;
    margin: 15px 0 0 30px;
}

.btn-enviar{
    color: #eaeaea;
    background-color: #4361ee;
    padding: 10px;
    border: 2px solid #4361ee;
    border-radius: 5px;
    margin: 10px;
    width: 100px;
}

.btn-limpar {
    width: 100px;
    color: #4361ee;
    padding: 10px;
    border: 2px solid #4361ee;
    border-radius: 5px;
    margin: 10px;
}
</style>
