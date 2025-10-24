import { useEffect, useState } from "react";
import { useFeedback } from "./feedbacks/Alerts";

function Movie_images (){
    const [Images,setImages]= useState([]);
    const {showAlert}= useFeedback();
    useEffect(()=>{
        async function fetchImages(){
             try{
                const response = await fetch("http://127.0.0.1:3000/api/v1/videos/images",{
                    method:"GET",
                    headers:{"content-Type":"application/json"}
                })
                const results = await response.json();
                console.log(results);

                if(results.status===true){
                    showAlert("Images loaded successfully","rgba(82,34,225,1)",4000)
                    setImages(results.images || []);
                }else{
                    showAlert("images failed to load");
                    setImages([]);
                }
              }catch(error){
                console.log(error);
                // showAlert("Something went wrong ..try again later","rgba(82, 34, 255, 1)",3000);
                setImages([]);
            }
        }

        fetchImages();
    },[]);//render only once
    return(
        <div className="pics">
            {Images.map((img,index)=>(
                <div className="pic" key={index}>
                    <img className="imgs" src={img.url} alt={img.title}/>
                    <label className ="name">{img.title}</label>

                </div>
            ))}
        </div>
    );
    
}

export default Movie_images;