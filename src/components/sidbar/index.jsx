import react, { Component } from 'react'

export default class sidebar extends Component {
//listagem de módulos 
    state ={
        module:[
            {id:1, title: 'Iniciando com React' ,lessons: [
            {id:1, title: 'Primeira aula'},
            {  id:2, title: 'segunda aula' },

        ],
    },
    {
        id:2, title:'Aprendendo Redux', lessons:[
        {id:3, title: 'Terceira Aula'},
        
        {id:4, title: 'Quarta aula'},

    ]
    }
            
        ]
    };
render(){
   //percorrendo os módulos 

   const {modules} = this.state;
   return(
       <aside>
           {modules.map(module=>(
               <div key={module.id}>
                   <strong>
                       {module.title}
                   </strong>
                   <ul>
                       {module.lessons.map(lesson=>(
                           <li key={lesson.id}> 
                           {lesson.title}
                           </li>
                       ))}
                   </ul>
               </div>
           ))}
       </aside>
   )
}
}