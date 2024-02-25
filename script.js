const inputField = document.querySelector(".inputField");
const main=document.querySelector(".Resume_Builder");
const outputContainer=document.querySelector(".output_container");

let isHidden=true;

function hide()
{
    if(isHidden)
    {
        main.style.display="none";
        isHidden=false;
        outputContainer.style.display="block";
        outputContainer.innerHTML= `
        <div class="output">
            <div class="heading">
                <h1>${inputField["name"].value}</h1>
                <h4>${inputField["title"].value}</h4>
            </div>
            <div class="info">
                <div class="left">
                    <div class="box">
                        <h2>Objective</h2>
                        <p>${inputField["objective"].value}</p>
                    </div>
                     <div class="box">
                        <h2>Skills</h2>
                        <p>${inputField["skills"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Academic Details</h2>
                        <p>${inputField["academic details"].vlue}</p>
                     </div>
                    <div class="box">
                        <h2>Contact</h2>
                        <p>${inputField["contact"].value}</p>
                     </div>            
                </div>
                <div class="right">
                    <div class="box">
                        <h2>Work Experience</h2>
                        <p>${inputField["work experience"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Achievements</h2>
                        <p>${inputField["achievements"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Projects</h2>
                        <p>${inputField["project"].value}</p>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="print()">Print Resume</button>
        `;                
    }
    else{
        main.style.display="block";
        isHidden=true;
        outputContainer.style.display="none";
        outputContainer.innerHTML="";
    }
}