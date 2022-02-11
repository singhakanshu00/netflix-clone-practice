  
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

  next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });

  const carousel2 = document.getElementById("carousel2"),
  content2 = document.getElementById("content2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");

  next2.addEventListener("click", e => {
    carousel2.scrollBy(width + gap, 0);
    if (carousel2.scrollWidth !== 0) {
      prev2.style.display = "flex";
    }
    if (content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
      next2.style.display = "none";
    }
  });
  prev2.addEventListener("click", e => {
    carousel2.scrollBy(-(width + gap), 0);
    if (carousel2.scrollLeft - width - gap <= 0) {
      prev2.style.display = "none";
    }
    if (!content2.scrollWidth - width - gap <= carousel2.scrollLeft + width) {
      next2.style.display = "flex";
    }
  });

  const carousel3 = document.getElementById("carousel3"),
  content3 = document.getElementById("content3"),
  next3 = document.getElementById("next3"),
  prev3 = document.getElementById("prev3");

  next3.addEventListener("click", e => {
    carousel3.scrollBy(width + gap, 0);
    if (carousel3.scrollWidth !== 0) {
      prev3.style.display = "flex";
    }
    if (content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
      next3.style.display = "none";
    }
  });
  prev3.addEventListener("click", e => {
    carousel3.scrollBy(-(width + gap), 0);
    if (carousel3.scrollLeft - width - gap <= 0) {
      prev3.style.display = "none";
    }
    if (!content3.scrollWidth - width - gap <= carousel3.scrollLeft + width) {
      next3.style.display = "flex";
    }
  });

  const carousel4 = document.getElementById("carousel4"),
  content4 = document.getElementById("content4"),
  next4 = document.getElementById("next4"),
  prev4 = document.getElementById("prev4");

  next4.addEventListener("click", e => {
    carousel4.scrollBy(width + gap, 0);
    if (carousel4.scrollWidth !== 0) {
      prev4.style.display = "flex";
    }
    if (content4.scrollWidth - width - gap <= carousel4.scrollLeft + width) {
      next4.style.display = "none";
    }
  });
  prev4.addEventListener("click", e => {
    carousel4.scrollBy(-(width + gap), 0);
    if (carousel4.scrollLeft - width - gap <= 0) {
      prev4.style.display = "none";
    }
    if (!content4.scrollWidth - width - gap <= carousel4.scrollLeft + width) {
      next4.style.display = "flex";
    }
  });

  const carousel5 = document.getElementById("carousel5"),
  content5 = document.getElementById("content5"),
  next5 = document.getElementById("next5"),
  prev5 = document.getElementById("prev5");

  next5.addEventListener("click", e => {
    carousel5.scrollBy(width + gap, 0);
    if (carousel5.scrollWidth !== 0) {
      prev5.style.display = "flex";
    }
    if (content5.scrollWidth - width - gap <= carousel5.scrollLeft + width) {
      next5.style.display = "none";
    }
  });
  prev5.addEventListener("click", e => {
    carousel5.scrollBy(-(width + gap), 0);
    if (carousel5.scrollLeft - width - gap <= 0) {
      prev5.style.display = "none";
    }
    if (!content5.scrollWidth - width - gap <= carousel5.scrollLeft + width) {
      next5.style.display = "flex";
    }
  });
  let width = carousel.offsetWidth;
  window.addEventListener("resize", e => (width = carousel.offsetWidth));


  function change1(e) {
    const card =document.querySelector(".one");
    if(card.style.display =="block"){
      card.style.display ="none"
    }
    else{ 
    card.style.display ="block";
  }
    let src = e.src;

    const img = document.querySelector(".one-img");
    let i = document.createElement("img");
    i.src =src.substring(21, src.length);
    img.removeChild(img.firstChild);
    img.appendChild (i);
  };

  function change(e) {
    const card =document.querySelector(".two");
    if(card.style.display =="block"){
      card.style.display ="none"
    }
    else{ 
    card.style.display ="block";
  }
    let src = e.src;

    const img = document.querySelector(".two-img");
    let i = document.createElement("img");
    i.src =src.substring(21, src.length);
    img.removeChild(img.firstChild);
    img.appendChild (i);
  };

  function change3(e) {
    const card =document.querySelector(".three");
    if(card.style.display =="block"){
      card.style.display ="none"
    }
    else{ 
    card.style.display ="block";
  }
    let src = e.src;

    const img = document.querySelector(".three-img");
    let i = document.createElement("img");
    i.src =src.substring(21, src.length);
    img.removeChild(img.firstChild);
    img.appendChild (i);
  };
  function change4(e) {
    const card =document.querySelector(".four");
    if(card.style.display =="block"){
      card.style.display ="none"
    }
    else{ 
    card.style.display ="block";
  }
    let src = e.src;

    const img = document.querySelector(".four-img");
    let i = document.createElement("img");
    i.src =src.substring(21, src.length);
    img.removeChild(img.firstChild);
    img.appendChild (i);
  };
  function change5(e) {
    const card =document.querySelector(".five");
    if(card.style.display =="block"){
      card.style.display ="none"
    }
    else{ 
    card.style.display ="flex";
  }
    let src = e.src;

    const img = document.querySelector(".five-img");
    let i = document.createElement("img");
    i.src =src.substring(21, src.length);
    img.removeChild(img.firstChild);
    img.appendChild (i);
  };

 function showVideo() {
    const playbdy = document.querySelector(".play");
    playbdy.style.display = "flex";
    playbdy.addEventListener("click", ()=>{
      playbdy.style.display = "none";
    });
 }