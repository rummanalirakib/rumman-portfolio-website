import React from 'react'
import './Testimonials.css'
import AFRIN from '../../assets/Ibtesham_afrin.jpg'
import SIAM from '../../assets/jaber_siam.jpg'
import JAHID from '../../assets/jahid_hasan.jpg'
import SIFAT from '../../assets/sifat_rabbi.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'


const data = [
  {
    avatar: AFRIN,
    name: 'Ibtasham Afrin (Persia)',
    position: 'Software Development Lead at Enosis Solutions',
    review: 'Rumman is technically very sound and hard working individual. During the time that Rumman worked under my supervision, he was professional and good team worker. His ability to think critically and creatively in challenging situations allowed him to solve problems in a manner that was both efficient and effective. I consider him an asset to any project or organization.'
  },
  {
    avatar: JAHID,
    name: 'Md Jahid Hasan',
    position: 'Senior Software Engineer at Enosis Solutions',
    review: 'Rumman is an excellent person and an outstanding colleague to work with. I have worked with him at Enosis Solutions. He is talented, professional and a quick learner. He is a decent, responsible and helpful team member for any team. His knowledge in the technical sector is remarkable. ' +
    'Overall, I wholeheartedly recommend Rumman for any technical role in any endeavor or organization.'
  },
  {
    avatar: SIAM,
    name: 'Jaber Al Siam',
    position: 'Senior Software Engineer at Enosis Solutions',
    review: 'Rumman is an exceptional colleague and an invaluable member of any team. I have had the pleasure of working with him at Enosis Solution and can attest to his hard work, dedication, and impressive technical skills. Rumman is a fast learner and always eager to take on new challenges. He has a strong sense of responsibility toward his work and consistently delivers high-quality results on time.' +

    'I have worked with Rumman on various projects, and he has always impressed me with his technical proficiency. He is highly skilled in C#, HTML, CSS, JavaScript, and SQL. He is also well-versed in the .NET framework, SQL Server Management, Azure Portal, and Git.' +

    'Rumman has excellent verbal and written communication skills and is a great team player. He is always willing to help his colleagues and has a keen eye for detail. His ability to analyze and understand task requirements is awe-inspiring.' +

    'Overall, I highly recommend Rumman for any technical role. He is a hardworking and talented professional who would be valuable to any organization.'
  },
  {
    avatar: SIFAT,
    name: 'Sifat Rabbi',
    position: 'Senior Full Stack Developer at Toptal',
    review: 'Rumman is one of the brightest people I get the chance to study with. At the time of my undergraduate, we studied together and learned many things from him. He has the ability to understand various concepts from the core and help others to understand those.' +

    'We were also in the same project group for a few times and he never failed to impress me with his project development skills.' +

    'Along with those as a person he is very helpful. He helps other people by sharing his knowledge.' +

    'I am very much confident that with his knowledge and skill, he will be able to fulfill his role. Anyone will be happy to get him on their team.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations Received</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'  
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={40}
        modules={[Pagination]}>
        {
          data.map(({avatar, name, position, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='recommender__avatar'>
                  <img src={avatar} alt={name} />
              </div>
              <h3 className='reviewer_name'>{name}</h3>
              <h5 className='reviewer_position'>{position}</h5>
              <small className='reviewer_review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials