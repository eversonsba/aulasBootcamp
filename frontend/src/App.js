import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';
import Header from './components/Header';

function App(){
  const [projects,setProjects] = useState([]);
  
  useEffect(()=>{
    api.get('projects').then(response => {
      setProjects(response.data[0]);
   });
  },[]);

  async function handleAddProject(){
    //setProjects([...projects,`novo projeto ${Date.now()}`]);
    const response = await api.post('projects',{
      title : `Seguimos na luta ${Date.now()}`,
      owner : "Everson vitor"
    });

    const project = response.data[0];

    setProjects([...projects, project]);

  }

  return(
    <>   
      <Header title="Project" />
      
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar um projeto</button>
   </>
   );

}

export default App; 