import React, { useState } from 'react'

export default function About() {
    // let style ={
    //     color:"white",
    //     backgroundColor:"black"
    // }
 
    const Toggle = ()=>{
        
    }
    
  
    const[style , mystyle] = useState({
        color:"black",
        backgroundColor:"white"   
    })
    const[btn, setbtn]=useState("enable dark mode")

    const ToggleEvent = ()=>{
        if(style.color == "white"){
            mystyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtn("enable light mode")
        }

        else{
            mystyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtn("enable dark mode")
        }
    }



    return (<>
        <div className='container my-3' style={style}>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button class="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne"  style={style} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item"  style={style}>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed"  style={style}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree"  style={style} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary' onClick={ToggleEvent}>{btn}</button>
            </div>
        </div>
        <button className='btn btn-dark' onClick={Toggle}>click </button>
        </>
    )
    
}
