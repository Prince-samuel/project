import Image from "./Img";
import Navbar from "./Nav";


const Right = () => {
    return ( 
        <div className="right__side">
            <Navbar/>
            <div className="content">
                <div className="content__items">

                <div className="text__area">
                        
                        <h2>Welcome <br /> to the &lt;Creek/&gt;</h2>
                        <p>
                            TechCreek is a habitat for the teeming 
                            population of youths making sense of 
                            their lives with their digital skills and
                            competencies, and actively involved in 
                            the development of the ‘new economy’ 
                            from Rivers State.               
                        </p>


                    </div>




                     <Image/> 
                
                </div>
               


            </div>
           
        </div>
     );
}
 
export default Right;