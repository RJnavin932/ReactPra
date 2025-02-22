import ChildLayout from "./Childlayout";

export default function TableLayout() {
    let tdata = {

        tableTite: 'Welcome',
        tablefooter: 'Exit',
        tableWidth: '500px',
        tableHeight: '300px',
        layoutdata:[
            {
                columndata: [
                    {
                        msg: 'hello',
                        bgcolor: 'red',
                        color: 'white',
                        talign: 'center'

                    },
                    {
                        msg: 'hello',
                        bgcolor: 'green',
                        color: 'white',
                        talign: 'center'

                    },
                    {
                        msg: 'hello',
                        bgcolor: 'red',
                        color: 'white',
                        talign: 'center'

                    },
                ]
            },
            {
                columndata: [
                    {
                        msg: 'hello',
                        bgcolor: 'red',
                        color: 'white',
                        talign: 'center'
                    },
                    {
                        msg: 'hello',
                        bgcolor: 'green',
                        color: 'white',
                        talign: 'center'
                    },
                    {
                        msg: 'hello',
                        bgcolor: 'red',
                        color: 'white',
                        talign: 'center'
                    },
                ]
            }
        ]
    }
    return <div>
       <table border={1} width={tdata.tableWidth} height={tdata.tableHeight} align="center">
            <thead>
                <tr>
                    <th colSpan={3}>{tdata.tableTite}</th>
                </tr>
            </thead>
            <tbody>
                {
                    tdata.layoutdata.map((d,i)=><ChildLayout key={i} {...d}/>)
                }
            </tbody>
            <tfoot>
                <tr><th colSpan={3}>{tdata.tablefooter}</th></tr>
                </tfoot>
        </table>
    </div>

}