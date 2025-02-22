export default function Backgrountclr({Boxclr,clr}){
    return <>
      <div style={{
        width:'100px',
        height:'100px',
        backgroundColor:Boxclr,
      }}>
        <input placeholder="Enter color name..." onChange={clr}/>

      </div>
    </>
}