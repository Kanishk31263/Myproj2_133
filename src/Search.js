import React, { useEffect, useState } from 'react';
import { Employee } from './Employee';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
export const Search = () => {
    const [data3, setdata3] = useState([]);
    const [laod, setlaod] = useState(false);
    const [sty, setsty] = useState({
        incre:"",
        decre:''
        
    })


    async function fet() {
        let data = await fetch('https://retoolapi.dev/QsuqZW/data');
        let data2 = await data.json();
        data2.sort((a, b) => a.name.localeCompare(b.name));
        setdata3(data2);
        setlaod(true);

    }

    function sear(e) {

        let data4 = data3.filter(val => val.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            val.professsio.toLowerCase().includes(e.target.value.toLowerCase()));

        setdata3(data4);


    }


    function increase(e) {
        setdata3([...data3].sort(function (a, b) {
            return (a.id - b.id);
        }));
       setsty({
           incre:"action",
           decre:""
       })

    }

    function decrease() {
     
        setdata3([...data3].sort(function (a, b) {
            return (b.id - a.id);
        }));

        setsty({
            incre:"",
            decre:"action"
        })

    }


    function sorttype(e) {
        if (e.target.value === 'id')
            increase();
        else if (e.target.value === 'name') {
            setdata3([...data3].sort((a, b) => a.name.localeCompare(b.name)))
        }
        else
            setdata3([...data3].sort((a, b) => new Date(a.joinedOn) - new Date(b.joinedOn)));


    }
    function reload() {
        window.location.reload();
    }

    useEffect(() => {
        fet();

    }, [])

    return (
        <>
          

            <h3>Welcome to the portal</h3>
            <input type='search' onChange={sear} placeholder='search here' />
            <ArrowUpwardIcon onClick={increase} color={sty.incre}/>
            <ArrowDownwardIcon onClick={decrease} color={sty.decre} />
            <select onClick={sorttype}>
                <option name='id' value="id" >Id</option>
                <option name='name1' value="name">Name</option>
                <option name='date' value="date">Date</option>
            </select>
            <button onClick={reload}>Reset</button>
            {!laod
                ? <h1>...Loading</h1>
                : ""
            }
            {data3.map(a => {
                return (
                    <>
                        <div>
                            <Employee key={a.id} id={a.id} name={a.name} joinedOn={a.joinedOn} professsio={a.professsio} />
                        </div>

                    </>
                )
            }
            )}
          

        </>

    )
}
