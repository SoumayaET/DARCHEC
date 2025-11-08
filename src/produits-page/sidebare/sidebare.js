import './sidebare.css'
import Category from "./category/category"
import Price from "./price/price"
import Colors from "./colors/colors"
export default function Sidebare({ handleChange }) {
  return (
    <>
      <section className="sidebare" style={{backgroundColor:"white"}}>
        
          <Category handleChange={handleChange}  />
          <Price handleChange={handleChange}  />
          <Colors handleChange={handleChange}  />
      </section>
    </>
    
  )
}
