const phoneHuntar=async () =>{
    const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data= await res.json()
    const phonData= data.data
    phoneshow(phonData)
}

const phoneshow= phones =>{
    const cardflid=document.getElementById('card-section')
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
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;
        cardflid.appendChild(cdiv)
    })
    
}

phoneHuntar()
