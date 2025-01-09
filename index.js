const containerFahter = document.querySelector('.Header-module--telephoneLink--7c9e9.is-hidden-mobile');
const numberPhone = '3177161588';

const btnWhats = () => {
    containerFahter.innerHTML=``;
    containerFahter.href=`https://api.whatsapp.com/send?phone=57${numberPhone}&text=Hola deseo más información sobre WallStreet`

    const img = document.createElement('IMG');
    img.classList.add('btnWhatsApp');
    img.scr="https://cdn-icons-png.freepik.com/256/2496/2496112.png?semt=ais_hybrid";

    containerFahter.appendChild(img)

}

btnWhats()


