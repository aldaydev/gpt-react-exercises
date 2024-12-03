import { useEffect, useState } from "react";

const DataFecher = ()=>{

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState('');

    useEffect(()=>{
        const fecher = async function(){
            try{
                let response = await fetch('https://jsonplaceholder.typicode.com/posts');
                let posts = await response.json();
                setLoading('CARGANDO...');
                const newData = posts.reduce((acc,curr)=>{
                    acc.push(curr.title);
                    return acc;
                },[]);
                setData(newData);
            }catch(error){
                console.log(error);
            }

        }
        fecher();
        setLoading('');
    },[reload])


    return(
        <section>
            <button onClick={()=>setReload(true ? false : true)}>RECARGAR</button>
            {loading !== '' && <p>{loading}</p>}
            <ul>
                {data.map((post, index) => {
                    return <li key={index}>{post}</li>
                })}
            </ul>
        </section>
    )
}

export default DataFecher;