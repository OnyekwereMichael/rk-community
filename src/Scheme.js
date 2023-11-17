
import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';


function Scheme() {
const dave = [
    {
        name: "michael",
        age: 23,
        gender: "boy"
    },
    {
        name: "precious",
        age: 25,
        gender: "girl"
    },
    {
        name: "bethel",
        age: 20,
        gender: "boy"
    },
    {
        name: "dave",
        age: 33,
        gender: "man"
    },
    {
        name: "suku",
        age: 43,
        gender: "man"
    },
    {
        name: "glory",
        age: 33,
        gender: "woman"
    },
]

    return (
<section className='myswipe'>

<Swiper className="mySwiper" spaceBetween={20} slidesPerView={4} >
       {dave.map((items, index)=>(
        <SwiperSlide key={index}>
            <div>
                {items.name}
            </div>
            <div>
                {items.age}
            </div>
            <div>
                {items.gender}
            </div>
        </SwiperSlide>
       ))}
        
      </Swiper>

      <div>
        
      </div>
</section>

  
   )



 

    

    
   
  }

  export default Scheme;