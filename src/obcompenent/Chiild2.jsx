export default function Child2({ details }) {
    // let {data}=props
    console.log(details);

    return <>{
        details.map((d, i) => <p key={i}>
            NAME:{d.sname}
            AGE:{d.age}
            STATUS:{d.marriedstatus}
            STUDY:{d.Eduction}
        </p>)
    }

    </>
}