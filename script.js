document.addEventListener('DOMContentLoaded', () => {

    console.log("JS Loaded Successfully");


    // PRODUCTS
    const products = [
        "Chavanprash",
        "Shatavari Kalp",
        "Suvarna Prashan",
        "Hair Pack",
        "Hair Oil",
        "Face Pack",
        "Massage Oil",
        "Diwali Kit"
    ];


    const productGrid = document.querySelector('.product-grid');


    if(productGrid){

        products.forEach(product=>{


            const slug = product
            .toLowerCase()
            .replace(/\s+/g,'-');


            const card=document.createElement('div');


            card.className="product-card";


            card.innerHTML=`

            <div class="product-img-wrapper">

                <img 
                src="assets/images/products/${slug}.jpg"
                class="product-img"
                alt="${product}"
                >

            </div>


            <h3 class="product-name">
                ${product}
            </h3>


            <p class="product-price">
                Premium Herbal Formula
            </p>


            <button class="btn-premium">
                Enquire Now
            </button>

            `;


            productGrid.appendChild(card);


        });

    }






    // NAVBAR

    const navbar=document.querySelector('.navbar');


    if(navbar){

        window.addEventListener('scroll',()=>{


            navbar.classList.toggle(
                'scrolled',
                window.scrollY>50
            );


        });

    }






    // MOBILE MENU


    const mobileToggle=
    document.getElementById('mobile-toggle');


    const mainNav=
    document.getElementById('main-nav');



    if(mobileToggle && mainNav){


        mobileToggle.onclick=()=>{

            mainNav.classList.toggle('active');

        };


    }








    // SMOOTH SCROLL


    document.querySelectorAll('a[href^="#"]')
    .forEach(link=>{


        link.onclick=(e)=>{


            e.preventDefault();


            let target=
            document.querySelector(
                link.getAttribute('href')
            );


            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }


        };


    });








    // LEAF ANIMATION


    function createLeaf(){


        const leaf=document.createElement("div");


        leaf.className="leaf";


        leaf.innerHTML="🍃";


        leaf.style.left=
        Math.random()*100+"vw";



        document.body.appendChild(leaf);



        setTimeout(()=>{

            leaf.remove();

        },8000);



    }



    setInterval(createLeaf,5000);








    // FADE ANIMATION


    const observer =
    new IntersectionObserver(items=>{


        items.forEach(item=>{


            if(item.isIntersecting){


                item.target.classList.add(
                    "show"
                );


            }


        });


    });



    document.querySelectorAll(
        '.product-card,.section-title,#about p'
    )
    .forEach(el=>observer.observe(el));



});
