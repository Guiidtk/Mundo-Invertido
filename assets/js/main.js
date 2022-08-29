import { getHellfireClubeSubscriptions, subscribeToHellfireClube } from "./firebase/hellfire-clube.js"

const txtName = document.getElementById('txtName')
const txtEmail  = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btncSubscribe = document.getElementById('btncSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btncSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        Character: txtCharacter.value,
     }

        const subscriptionID = await subscribeToHellfireClube(subscription)
    
        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''

        alert('Inscrito com sucesso: ${subscriptionID}')
})

async function loadData() {
  const subscriptions = await getHellfireClubeSubscriptions() 

  subscriptionsList.innerHTML = subscriptions.map(sub => '
    <li>
        ${sub.name}
    </li>
').join('')



}
