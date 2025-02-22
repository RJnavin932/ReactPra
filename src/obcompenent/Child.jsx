export default function ChildCom(props){
    let {sname,age,work,marriedstatus}=props
    return<>
      <h2>Child</h2>
        <h4>NAME:{sname}</h4>
        <h4>AGE:{age}</h4>
        <h4>WORK:{work}</h4>
        <h4>MARRIEDSTASTUS:{marriedstatus}</h4>
    </>
}