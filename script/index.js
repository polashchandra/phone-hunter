const phoneHuntar=async (dataflid,isshow) =>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${ dataflid }`)
    const data= await res.json()
    const phonData= data.data
    phoneshow(phonData,isshow)
}

const phoneshow= phones =>{
    const cardflid=document.getElementById('card-section')
    cardflid.textContent=''

    const showalls=document.getElementById('showalll')
    if(phones.length > 12){
      showalls.classList.remove("hidden") 
    }
    else{
      showalls.classList.add("hidden")
    }
    phones=phones.slice(0,5)
    phones.forEach(phone=>{
        const cdiv=document.createElement('div');
        cdiv.classList=`card w-96 bg-base-100 shadow-xl`;
        cdiv.innerHTML=`
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button onclick="buynow('${phone.slug}')" class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
        cardflid.appendChild(cdiv)
    });
    lodingfing(false);
}

// buy new section
const buynow= async(id) => {
  const res= await fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089');
  const data= await res.json();
  const phone =data.data
  showPhonedetals(phone)
}
// modal
const showPhonedetals = (phone) => {
  const showditaal=document.getElementById('showdital')
  
  showditaal.innerHTML=`
  <img src="${phone.image}" alt="">
  <p><span class="text-xl"> Display:</span>${phone.mainFeatures.displaySize}</p>
  <p><span class="text-xl"> chipset:</span>${phone.mainFeatures.chipSet}</p>
  <p><span class="text-xl"> memory:</span>${phone.mainFeatures.memory}</p>
  <p><span class="text-xl"> stoarge:</span>${phone.mainFeatures.storage}</p>
  
  
  `
  console.log(phone);
  my_modal.showModal();
}











//seach function
const buttionflid= (isshow) => {
  lodingfing(true);
  const seachflid=document.getElementById('input-flid');
  const inputValu=seachflid.value;
  phoneHuntar(inputValu);
  
}
// const inputf = () =>{
//   lodingfing(true);
//   const inputs=document.getElementById('input-flid2');
//   const inputtext=inputs.value;
//   phoneHuntar(inputtext)

// }
//loading show
const lodingfing = (isload) => {
  const lodingflid=document.getElementById('lodingflid')
  if(isload){
    lodingflid.classList.remove('hidden')
  }
  else{
    lodingflid.classList.add('hidden')
  }
}
// showButton
const showbtn=() => {
  buttionflid(true);
}

// phoneHuntar()
