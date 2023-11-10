import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../estilos/estilo.css';
import axios from 'axios'
import {Button, TextField, Grid, Paper  } from '@mui/material';
import Materias from '../components/materias-cursadas';
import SendIcon from '@mui/icons-material/Send';

import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}




function RegisterUserPage() {
  const paperStyle = {
    width: '50%',
    margin: "0 auto",
    borderRadius: 20,
    backgroundColor: "aliceblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  };
  const [roadmap,setRoadmap] = useState([])
  const navigate = useNavigate()
  const [materias, setMaterias] = useState([]);
  const [formularioContestado, setFormularioContestado] = useState(false);
  const [numeroSemestres, setNumeroSemestres] = useState(0);
  const goToMenu =  ()=>{
    navigate('/menu')
  }
  useEffect(() => {
    axios.get("http://localhost:3000/api/materias")
    .then(response => {
      const materiasOrdenadas = response.data; // Supongamos que la API devuelve las materias en orden
      setMaterias(materiasOrdenadas);
    })
    .catch(error => {
      console.error('Error al obtener las materias:', error);
    });
  }, []);

  
  const anadirAlRoadmap = (materiasCursadas) => {
    
    setRoadmap((prevRoadmap) => {
      const nuevaEntrada = materiasCursadas.join(' ');
      return prevRoadmap ? `${prevRoadmap}, ${nuevaEntrada}`.replace(/^, /, '') : nuevaEntrada;
    });
  };
  const handleNumeroSemestresChange = (e) => {
    setFormularioContestado(true);
    let inputValue = parseInt(e.target.value, 10); // Convierte el valor a un número entero
    if (inputValue < 0) {
      inputValue = 0;
    } else if (inputValue > 10) {
      inputValue = 10;
    }
    setNumeroSemestres(inputValue);
  };

  ///////////////////////////////////////////////////////////////////Esto debe de enviar, pero todavia no hace eso
  const [userId, setuserId] = useState("");
  
    
    useEffect(() => {
      const fetchData = async () => {
        const user = sessionStorage.getItem('user');
        try {
          const response = await axios.post("http://localhost:3000/api/user", {
            id: user
          });
  
          const data = response.data;
          setuserId(data[0].id);
        } catch (e) {
          console.log(e);
        }
      };
  
      fetchData();
    }, []); 
  
  const apiUrl = 'http://localhost:3000/api/materiasRoadmap';

const handleGuardarMaterias = () => {
  console.log(userId);
  console.log(roadmap);
  console.log(numeroSemestres);
  axios
	.post(apiUrl, {
		roadmap: roadmap,
		id: userId,
		semestres: numeroSemestres,
	})
	.then(response => {
		if (response.data.success) {
      console.log("Usuario registrado exitosamente");
      console.log(response.data);
  
  }
	})
	.catch(function (error) {
		console.error(error);
	});
};
////////////////////////////////////////////////////////aun no envia datos
  return (
   <>
  <Grid>
  <Paper style={paperStyle}>

  <Button
  variant="contained"
  style={{ marginTop: '20px', marginBottom: '10px',fontSize: '1rem', padding: '1rem 1rem'  }}
  className="btnstyl"
  onClick={goToMenu}
  startIcon={<HomeIcon />} 
>
  Volver al menú
</Button>
        <div className="QuestionarioTitulo">
          <h2 className='questionario'>Questionario de materias</h2>
          <h4 className='questionario1'>Selecciona las materias cursadas, por favor</h4>
        </div>
        
       
       
  <div className='CuestionarioMateria'>
          <Materias
            semestre='1'
            materias={materias
              .filter((materia) => [1, 2, 3, 4, 5, 6].includes(materia.id))
              .map((materia) => materia.namem)}
              anadirAlRoadmap={anadirAlRoadmap}
              
          />
  </div>
  <div className='CuestionarioMateria'>
        <Materias
          semestre='2'
          materias={materias
            .filter((materia) => [7, 8, 9, 10, 11].includes(materia.id))
            .map((materia) => materia.namem)}
            anadirAlRoadmap={anadirAlRoadmap}
        />
</div>

<div className='CuestionarioMateria'>
        <Materias
          semestre='3'
          materias={materias
            .filter((materia) => [12, 13, 14, 15, 16, 17].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='CuestionarioMateria'>
        <Materias
          semestre='4'
          materias={materias
            .filter((materia) => [18, 19, 20, 21, 22].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='CuestionarioMateria'>
        <Materias
          semestre='5'
          materias={materias
            .filter((materia) => [23, 24, 25, 26, 27].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='CuestionarioMateria'>
        <Materias
          semestre='6'
          materias={materias
            .filter((materia) => [28, 29, 30].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='CuestionarioMateria'>
        <Materias
          semestre='7'
          materias={materias
            .filter((materia) => [31, 32, 33, 34].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='CuestionarioMateria'>
        <Materias
          semestre='8'
          materias={materias
            .filter((materia) => [35, 36, 37, 38].includes(materia.id))
            .map((materia) => materia.namem)}
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>






<TextField
  label="Número de Semestres"
  type="number"
  InputProps={{
    inputProps: {
      min: 0,
      max: 10,
    },
  }}
  value={numeroSemestres}
  onChange={handleNumeroSemestresChange}
  style={{ marginTop: '20px', marginBottom: '20px', width: '400px'  }}
/>


<Button variant="contained"  style={{ marginTop: '10px', marginBottom: '20px' ,fontSize: '1rem', padding: '1rem 1rem'  }} className="btnstyl" endIcon={<SendIcon />} onClick={handleGuardarMaterias} disabled={!formularioContestado}>
            Registrar materias
          </Button>
         
          </Paper>
 </Grid>
   </>
  )
}

export default RegisterUserPage;