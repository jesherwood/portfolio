const mainBody=document.getElementsByTagName("body")[0];let darkMode=document.body.classList.contains("dark"),toggleButton=document.getElementsByClassName("dark-mode-text")[0];function toggleMode(){mainBody.classList.toggle("dark"),"#home"!==new URL(document.URL).hash&&window.location.hash||(document.documentElement.style.setProperty("--color","0, 0, 0"),document.documentElement.style.setProperty("--background-color","255, 255, 255")),(document.body.classList.contains("dark")&&"#home"===new URL(document.URL).hash||!window.location.hash)&&(document.documentElement.style.setProperty("--color","255, 255, 255"),document.documentElement.style.setProperty("--background-color","0, 0, 0"),toggleButton.style.setProperty("--color","255, 255, 255"),toggleButton.style.setProperty("--background-color","0, 0, 0")),"#work"===new URL(document.URL).hash&&(document.documentElement.style.setProperty("--color","165, 36, 34"),document.documentElement.style.setProperty("--background-color","240, 162, 2"),toggleButton.style.setProperty("--color","165, 36, 34"),toggleButton.style.setProperty("--background-color","240, 162, 2")),document.body.classList.contains("dark")&&"#work"===new URL(document.URL).hash&&(document.documentElement.style.setProperty("--color","178, 103, 94"),document.documentElement.style.setProperty("--background-color","22, 48, 43"),toggleButton.style.setProperty("--color","178, 103, 94"),toggleButton.style.setProperty("--background-color","22, 48, 43")),"#contact"===new URL(document.URL).hash&&(document.documentElement.style.setProperty("--color","0, 110, 144"),document.documentElement.style.setProperty("--background-color","169, 178, 172"),toggleButton.style.setProperty("--color","0, 110, 144"),toggleButton.style.setProperty("--background-color","169, 178, 172")),document.body.classList.contains("dark")&&"#contact"===new URL(document.URL).hash&&(document.documentElement.style.setProperty("--color","187, 214, 134"),document.documentElement.style.setProperty("--background-color","40, 0, 4"),toggleButton.style.setProperty("--color","187, 214, 134"),toggleButton.style.setProperty("--background-color","40, 0, 4"))}toggleButton.style.setProperty("--color","0, 0, 0"),toggleButton.style.setProperty("--background-color","255, 255, 255");let now=new Date,hour=now.getHours();hour<7||hour>20?mainBody.classList.toggle("dark"):darkMode&&mainBody.classList.remove("dark");const delayGrow=300,delayFade=2300;window.addEventListener("load",(e=>{setTimeout((function(){document.getElementsByClassName("hero-object")[0].style.transform="scale(50%)"}),300)})),window.addEventListener("load",(e=>{setTimeout((function(){document.getElementsByClassName("hero-container")[0].classList.add("fade-in")}),2300)}));const sections=document.querySelectorAll("section[id]");function navHighlighter(){window.pageYOffset;sections.forEach((e=>{e.offsetHeight}))}window.addEventListener("scroll",navHighlighter);let len=sections.length;function updateFragId(){for(let e=0;e<len;e++){let t={id:sections[e].id,rect:sections[e].getBoundingClientRect().y},o=document.body.classList.contains("dark");t.rect>-100&&t.rect<100&&t.id!==location.hash&&(fragmentId=t.id,window.location.hash=fragmentId,"#work"===new URL(document.URL).hash?(document.documentElement.style.setProperty("--color","165, 36, 34"),document.documentElement.style.setProperty("--background-color","240, 162, 2"),toggleButton.style.setProperty("--color","165, 36, 34"),toggleButton.style.setProperty("--background-color","240, 162, 2"),o&&(document.documentElement.style.setProperty("--color","178, 103, 94"),document.documentElement.style.setProperty("--background-color","22, 48, 43"),toggleButton.style.setProperty("--color","178, 103, 94"),toggleButton.style.setProperty("--background-color","22, 48, 43"))):"#contact"===new URL(document.URL).hash?(document.documentElement.style.setProperty("--color","0, 110, 144"),document.documentElement.style.setProperty("--background-color","169, 178, 172"),toggleButton.style.setProperty("--color","0, 110, 144"),toggleButton.style.setProperty("--background-color","169, 178, 172"),o&&(document.documentElement.style.setProperty("--color","187, 214, 134"),document.documentElement.style.setProperty("--background-color","40, 0, 4"),toggleButton.style.setProperty("--color","187, 214, 134"),toggleButton.style.setProperty("--background-color","40, 0, 4"))):(document.documentElement.style.setProperty("--color","0, 0, 0"),document.documentElement.style.setProperty("--background-color","255, 255, 255"),toggleButton.style.setProperty("--color","0, 0, 0"),toggleButton.style.setProperty("--background-color","255, 255, 255"),o&&(document.documentElement.style.setProperty("--color","255, 255, 255"),document.documentElement.style.setProperty("--background-color","0, 0, 0"),toggleButton.style.setProperty("--color","255, 255, 255"),toggleButton.style.setProperty("--background-color","0, 0, 0"))))}}function pauseScroll(){window.removeEventListener("scroll",updateFragId),setTimeout((()=>{window.addEventListener("scroll",updateFragId)}),500)}window.addEventListener("scroll",updateFragId),window.addEventListener("load",pauseScroll);const navItem=document.getElementsByClassName("nav-item");function navClick(){window.removeEventListener("scroll",updateFragId),navItem[0].addEventListener("click",(e=>{document.documentElement.style.setProperty("--color","0, 0, 0"),document.documentElement.style.setProperty("--background-color","255, 255, 255"),document.body.classList.contains("dark")&&(document.documentElement.style.setProperty("--color","255, 255, 255"),document.documentElement.style.setProperty("--background-color","0, 0, 0"))})),navItem[1].addEventListener("click",(e=>{document.documentElement.style.setProperty("--color","165, 36, 34"),document.documentElement.style.setProperty("--background-color","240, 162, 2"),document.body.classList.contains("dark")&&(document.documentElement.style.setProperty("--color","178, 103, 94"),document.documentElement.style.setProperty("--background-color","22, 48, 43"))})),navItem[2].addEventListener("click",(e=>{document.documentElement.style.setProperty("--color","0, 110, 144"),document.documentElement.style.setProperty("--background-color","169, 178, 172"),document.body.classList.contains("dark")&&(document.documentElement.style.setProperty("--color","187, 214, 134"),document.documentElement.style.setProperty("--background-color","40, 0, 4"))})),setTimeout((()=>{window.addEventListener("scroll",updateFragId)}),500)}const workObjects=document.getElementsByClassName("work-object");for(let e=0;e<workObjects.length;e++)workObjects[e].addEventListener("mouseenter",(t=>{let o=workObjects[e];console.log(workObjects);for(let e=0;e<workObjects.length;e++)workObjects[e].style.opacity="0.3",o.style.opacity="1"})),workObjects[e].addEventListener("mouseleave",(e=>{for(let e=0;e<workObjects.length;e++)workObjects[e].style.opacity="1"}));function openModal(){document.getElementsByClassName("lightbox")[0].style.display="block"}function closeModal(){document.getElementsByClassName("lightbox")[0].style.display="none"}function keyPress(e){"Escape"===e.key&&closeModal()}function contact(){pauseScroll(),document.getElementsByClassName("lightbox")[0].style.display="none","#contact"!==new URL(document.URL).hash&&(window.location.href="#contact")}let timerID,item=document.getElementsByClassName("contact-button")[0],counter=0,pressHoldEvent=new CustomEvent("pressHold"),pressHoldDuration=200;function pressingDown(e){requestAnimationFrame(timer),e.preventDefault(),console.log("Pressing!")}function notPressingDown(e){cancelAnimationFrame(timerID),counter=0,console.log("Not pressing!")}function timer(){console.log("Timer tick!"),counter<pressHoldDuration?(timerID=requestAnimationFrame(timer),counter++):(console.log("Press threshold reached!"),item.dispatchEvent(pressHoldEvent))}item.addEventListener("mousedown",pressingDown,!1),item.addEventListener("mouseup",notPressingDown,!1),item.addEventListener("mouseleave",notPressingDown,!1),item.addEventListener("touchstart",pressingDown,{passive:!0}),item.addEventListener("touchend",notPressingDown,!1),item.addEventListener("pressHold",doSomething,!1);let email=document.getElementsByClassName("contact-email")[0];function doSomething(e){if(console.log("pressHold event fired!"),emailText="amVzc2UuZS5zaGVyd29vZEBnbWFpbC5jb20=",email.style.display="block",email.innerHTML+='<a href="mailto:'+atob(emailText)+'" target="_blank"> click here to email me</a>',item.style.display="none","block"===window.getComputedStyle(email,null).display){setTimeout((function(e){email.innerHTML="",email.style.display="none",item.style.display="block"}),3e3)}}let date=new Date,year=date.getFullYear();document.getElementsByClassName("date-w")[0].innerHTML=year;
