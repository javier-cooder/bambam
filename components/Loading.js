import { Circle } from "better-react-spinkit";
  

function Loading(){  
    return(
        <center style = {{ display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img
                    src = "/logoA.png"
                    alt = ""
                    style = {{marginBotton: 10 } }
                    height = {200}
                    width =  {200}       
                />

                <Circle color="#FF4E62" size={60} ></Circle>
            </div>
        </center>
        
       
    );
}

export default Loading;