document.addEventListener("DOMContentLoaded", (event) => {
  insertHTMLPage2();
});


function insertHTMLPage2() {
  document.querySelector(".page2").innerHTML =
  `
  <div class = "skills-section">
        <div class = "skills-main">
          <img class="skills-image" src = "skillset image.jpg">
        </div>
        <div class="skills-profile">
          <div class="skills-profile1">
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-java-48.png">
              </div>
              <div>
                <div>
                  <p> Java </p>
                </div>
                <div>
                  <progress value="80" max="100"> </progress>
                  <div class="percent-num80"> 80% </div>
                </div>
              </div>
            </div>
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-python-48.png">
              </div>
              <div >
                <div>
                  <p> Python </p>
                </div>
                <div>
                  <progress value="80" max="100"> </progress>
                  <div class="percent-num80"> 80% </div>
                </div>
              </div>
            </div>
          </div>
          <div class="skills-profile2">
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-html-48.png">
              </div>
              <div>
                <div>
                  <p> HTML </p>
                </div>
                <div>
                  <progress value="85" max="100"> </progress>
                  <div class="percent-num85"> 85% </div>
                </div>
              </div>
            </div>
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-css-48.png">
              </div>
              <div >
                <div>
                  <p> CSS </p>
                </div>
                <div>
                  <progress value="85" max="100"> </progress>
                  <div class="percent-num85"> 85% </div>
                </div>
              </div>
            </div>
          </div>
          <div class="skills-profile3">
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-javascript-48.png">
              </div>
              <div >
                <div>
                  <p> JavaScript </p>
                </div>
                <div>
                  <progress value="70" max="100"> </progress>
                  <div class="percent-num70"> 70% </div>
                  
                </div>
              </div>
            </div>
            <div class="skill-name-progress">
              <div class="skill-img-name">
                <img src = "icons8-my-sql-48.png">
              </div>
              <div>
                <div>
                  <p> mySQL </p>
                </div>
                <div>
                  <progress value="75" max="100"> </progress>
                  <div class="percent-num75"> 75% </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
  
      </div>
        <div class="certifications">
          <div>
            <img class="certification-image" src ="certifications.jpg">
          </div>
          <div class="certifications-divide">
            <div class="hackerrank">
              <div class="certify-button">
                <div>
                  <h3> HackerRank Certification in Python </h3>
                </div>
                <div> 
                  <button onclick = "showCertificate('Hackerrank');"> View Certification </button>
                </div>
              </div>
              
              
              <ul class="para-size">
                <li> Completed the HackerRank Python Certification, showcasing proficiency in Python programming.</li>
              </ul>
            </div>
            <div class="prepInsta">
              <div class="certify-button">
                <div>
                  <h3> PrepSAT Hackathon </h3>
                </div>
                <div> 
                  <button  onclick = "showCertificate('PrepSat');"> View Certification </button>
                </div>
              </div>
              
              <ul class="para-size">
                <li> "PrepSAT" Hackathon organized by PrepInsta </li>
                <li> Secured a rank of 4032 out of 90,678 candidates.</li>
              </ul>
            </div>
            <div class="skilldzire">
              <div class="certify-button">
                <div>
                  <h3>SkillDzire Certification on Embedded Systems using Python</h3>
                </div>
                <div> 
                  <button  onclick = "showCertificate('SkillDzire');"> View Certification </button>
                </div>
              </div>
              <ul class="para-size">
                <li> Internship on Embedded Systems using Python.</li>
              </ul>
            </div>
          </div>
          
    
        </div>


  `;
}
function showCertificate(inputClass) {
  
  var page3Content = document.querySelector(".page3");
  page3Content.classList.add("hide-page3-content");

  var headerContent = document.querySelector(".header");
  headerContent.classList.add("hide-header-content");

  scrollToPage2();
  document.body.style.overflow = 'hidden';

  document.querySelector(".page2").innerHTML = `
  
  <div class="certificate-container">
      <div>
        <img class="certificate-container-image" src = ${inputClass}.png>
      </div>
      <div>
        <button onclick = "closeCertificate();" class="close-button"> X </button>
      </div>
    </div>
    `;
  

}



function closeCertificate() {

  var page3Content = document.querySelector(".page3");
  page3Content.classList.remove("hide-page3-content");

  var headerContent = document.querySelector(".header");
  headerContent.classList.remove("hide-header-content");

  
  document.body.style.overflow = '';
  insertHTMLPage2();



  
}



function scrollToPage1() {
  var page1 = document.querySelector(".intro-main");
  page1.scrollIntoView({ behavior: "smooth" });
}

function scrollToPage2() {
  var page2 = document.querySelector(".skills-section");
  page2.scrollIntoView({ behavior: "smooth" });
}

function scrollToPage3() {
  var page3 = document.querySelector(".page3");
  page3.scrollIntoView({ behavior: "smooth" });
}

function scrollToPage4() {
  var page4 = document.querySelector(".page4");
  page4.scrollIntoView({ behavior: "smooth" });
}