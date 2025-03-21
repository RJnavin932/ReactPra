import { useEffect, useState } from "react"
import { data, dnum } from "./arrayofobj"


export default function Pagenation() {

    let [adata, setAdata] = useState(data);
    let [sdata, setSdata] = useState([]);
    let [dbtn, setDbtn] = useState([]);

    useEffect(() => {
        setSdata(() => adata.filter((d, i) => i >= 0 && i < dnum ? d : null));

        let arr = []
        for (let i = 1; i <= adata.length / dnum; i++) {
            arr.push(i)
            setDbtn(() => arr)
            console.log(arr);
        }
    }, [])

    let mydata = (tdata) => {
        setSdata(() => adata.filter((d, i) => i >= (tdata * dnum) - dnum && i < (tdata * dnum) ? d : null));
        console.log(tdata);
    }
    return <>
        <div>
            {sdata.map((d, i) =>
                <h3 key={i}>{d.id},{d.name},{d.age},{d.city},{d.work}</h3>)}

            {
                dbtn.map((d, i) => <button key={i} onClick={() => mydata(d)}>Show:{d}</button>)
            }
        </div>
    </>
}