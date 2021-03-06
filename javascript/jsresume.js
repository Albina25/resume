Vue.component('job-item', {
	props: ['job'],
	template: `
	<div>
	   <div class="main-inf-title" > 
	     <h3>{{ job.title }}</h3>
         <div class="years">{{job.year}}</div> 
        </div> 
        <div  class="main-inf"><h4>{{job.position}}</h4></div>
        <p class="marginbottom">{{job.value}}</p>
  </div>`
  })

  Vue.component('contacts-item', {
	props: ['contact'],
	template: `
            <div class="part-contact" >
              <div v-if="contact.id==1"><i class="fa fa-phone fa-lg"></i></div>
              <div v-else-if="contact.id==2"><i class="fa fa-whatsapp fa-lg"></i></div>
			  <div v-else-if="contact.id==3"><i class="fa fa-envelope"></i></div>
              <div v-else><i class="fa fa-map-marker fa-lg"></i></div>
                 <div>  <h4 class="contact-title">{{ contact.title }}</h4>
					<span v-if="contact.id==1" class="contact"> 
					<a href="tel:+79874991540">{{ contact.value }}</a></span> 
					<span v-else-if="contact.id==2" class="contact"> 
					<a href="https://wa.me/79874991540">{{ contact.value }}</a></span>
					<span v-else-if="contact.id==3" class="contact"> 
					<a href="https://gmail.com">{{ contact.value }}</a></span>
					<span v-else class="contact">{{ contact.value }}</span>
                 </div>
            </div>`
})

Vue.component('duty-item', {
	props: ['duty'],
	template: `
	<div>
	  <div class="marginbottom">
	   <p class="marginbottom">{{duty.value}}</p>
	  </div>
   </div>`
})

Vue.component('education-item', {
	props: ['education'],
	template: `
	<div>
	  <div class="main-inf-title">
	    <h3> {{education.title}}</h3>
	    <div class="years">{{education.year}}</div> 
      </div>
	  <div class="main-inf">
	
	  <p>{{education.faculty}}</p>
	  <p class="marginbottom">Специальность: {{education.specialty}}</p>
	  </div>
   </div>`
})

Vue.component('differences-item', {
	props: ['best'],
	template: `
	<div>
	<div class="main-inf-title">
	  <h3>{{best.title}}</h3>
	<div class="years">{{best.year}}</div> 
	</div>
	<div class="main-inf">
	  <p class="marginbottom">{{best.value}}</p>
	</div>
  </div>`
})

Vue.component('skills-item', {
	props: ['skill'],
	template: `
	<div class="skill" > 
	<span class="title">{{ skill.title }}</span>
		<progress class="progressbar" v-if="skill.id==1" max="100" value="70"></progress>
		<progress class="progressbar" v-if="skill.id==2" max="100" value="60"></progress>
		<progress class="progressbar" v-if="skill.id==3" max="100" value="40"></progress>
		<progress class="progressbar" v-if="skill.id==4" max="100" value="50"></progress>
		<progress class="progressbar" v-if="skill.id==5" max="100" value="30"></progress>
		<progress class="progressbar" v-if="skill.id==6" max="100" value="70"></progress>
		<progress class="progressbar" v-if="skill.id==7" max="100" value="50"></progress>	  
  </div>`
})

let app = new Vue({
	el: '#app',
	data:{
		name:'альбина кашапова',
		speciality:'Web developer',
		image:'foto/avatar.jpg',
		skills:[
		{id:1, title:'HTML', value:70},
		{id:2, title:'SCSS', value:60},
		{id:3, title:'JavaScript', value:40},
		{id:4, title:'Vue.js', value:50},
		{id:5, title: 'Nuxt.js', value:30},
		{id:6, title: 'GIT', value:70},
		{id:7, title:'English', value:50},
	    ],
	  	contacts:[
		{id:1, title:'телефон', value:'8-987-499-15-40'},
		{id:2, title:'WhatsApp', value:'8-987-499-15-40'},
		{id:3, title:'email', value:'axioma.25@gmail.com'},
        {id:4, title:'адрес', value:'Уфа, ул. Зои Космодемьянской, д.60'},
        ],
		duties: [
		{id:1, value:'Разработка сайтов для клиентов в команде программистов, их последующая поддержка.'}	
		],
        jobs:[
          {title:'Видеомонтажер', year:'2011-2017', 
		  position:'Создание мультимедиа контента' ,
          value:'Видеомонтаж свадебных фильмов, клипов, детских утренников и т.д. в программе Adobe Premiere. Производство обложки для коробки в программе Adobe Photosop.'
		},
          {title:'АО "Международный Аэропорт Уфа"', year:'2013-2019', 
          position:'Специалист автоматизированных систем регистрации' ,
          value:'Обучение персонала системам регистрации, принятие зачетов, допуск сотрудников к самостоятельной работе.' 
		}, 
		  {title:'ООО "Мегател"', year:'2019-по н/в',  
		  position: 'Специалист отдела разработки и поддержки',
		  value: 'Выявление причин отсутствия связи в области телеметрии, консультация клиентов, подготовка грамотного письменного/устного ответа.'
		}
        ],
		education:[
			{
			title:'УГАТУ (Уфимский Государственный Авиационный Технический Университет)',
			faculty:'Факультет информатики и робототехники',
			specialty:'Автоматизированные системы обработки информации и управления',
			year:'2003-2008'
			}
		],
		differences:[
			{title:'УГАТУ', year: '2008', 
			value: 'Победитель в студенческой научно-теоретической конференции "Неделя науки"'},
			{title: 'Международный Аэропорт Уфа', year:'2014',
		    value:'Победитель в номинации "Лучший специалист"'}
		]
		

	}
})