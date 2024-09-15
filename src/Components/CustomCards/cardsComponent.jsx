import CustomCards from "./cards"






const FirstComponent =()=>{
  return (
    <>
  <div className="jumbotron text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <CustomCards title={"Krishna"} text={"React Developer"}/>
      </div>
    </div>
  </div>
</>


  )
}
export default FirstComponent