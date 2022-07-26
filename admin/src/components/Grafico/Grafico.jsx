import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Grafico.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { grafico } from '../../redux/actions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 export default function Grafico () {
 const dispatch = useDispatch()
 const graf = useSelector(state => state.graficos);
 const userToken = localStorage.user
 
 useEffect(()=>{
 dispatch(grafico(userToken))
 }, [])
console.log(graf)

  
const data= [];
 graf.map(item =>{
  data.push({
    category: item.category,
    ventas: item.quantity,
  })
 })
 console.log(data);



    return (
      <div className='contenedor'>
        <SideBar />
       <div className='newcontenedor'>
          <div className='top'>
            <h1 className='title'> Gráfico de ventas</h1>
            </div>
        <ResponsiveContainer width="95%" height={500}>
        <BarChart className='barchart'
          data={data}
          barSize={20}
        >
          <XAxis dataKey="category" className='x' />
          <YAxis dataKey="ventas"/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="ventas" fill="#DD8643" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
        
         </div>
    
       </div>
      );
    }
    
  
    


    


