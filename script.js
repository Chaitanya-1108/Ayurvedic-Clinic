document.addEventListener('DOMContentLoaded', () => {

    // 1. PRODUCT LIST MANAGEMENT
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


    const generateProducts = () => {

        const productGrid = document.querySelector('.product-grid');

        if (!productGrid) {
            console.log("Product grid not found");
            return;
        }


        products.forEach(product => {

            const card = document.createElement('div');

            card.classList.add('product-card');

            card.dataset.aos = "fade-up";


            const slug = product
                .toLowerCase()
                .replace(/\s+/g, '-');


            card.innerHTML = `
                <div class="product-img-wrapper">

                    <img 
                        src="assets/images/products/${slug}.jpg"
                        alt="${product}"
                        class="product-img"
                        loading="lazy"
                    >

                </div>


                <h3 class="product-name"
                    style="
                    font-size:1.25rem;
                    font-weight:600;
                    color:var(--primary-green);
                    ">
                    ${product}
                </h3>


                <p class="product-price"
                    style="
                    color:var(--accent-gold);
                    font-weight:700;
                    margin-top:10px;
                    ">
                    Premium Herbal Formula
                </p>


                <div style="margin-top:15px;">

                    <button 
                    class="btn-premium"
                    style="
                    padding:10px 20px;
                    font-size:0.9rem;
                    ">
                    Enquire Now
                    </button>

                </div>
            `;


            productGrid.appendChild(card);

        });

    };


    generateProducts();




    // 2. STICKY NAVBAR EFFECT

    const navbar = document.querySelector('.navbar');


    if(navbar){

        window.addEventListener('scroll',()=>{

            if(window.scrollY > 50){

                navbar.classList.add('scrolled');

            }else{

                navbar.classList.remove('scrolled');

            }

        });

    }




    // 3. MOBILE MENU

    const mobileToggle = document.getElementById('mobile-toggle');

    const mainNav = document.getElementById('main-nav');



    if(mobileToggle && mainNav){

        mobileToggle.addEventListener('click',()=>{

            mainNav.classList.toggle('active');

        });

    }





    // 4. SMOOTH SCROLL


    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


        anchor.addEventListener('click',function(e){

            e.preventDefault();


            if(mainNav && mainNav.classList.contains('active')){

                mainNav.classList.remove('active');

            }



            const targetId=this.getAttribute('href');


            if(targetId==="#"){

                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

                return;
            }


            const target=document.querySelector(targetId);



            if(target){


                const headerOffset=80;


                const position=
                target.getBoundingClientRect().top+
                window.pageYOffset-
                headerOffset;



                window.scrollTo({

                    top:position,

                    behavior:"smooth"

                });

            }

        });

    });







    // 5. LEAF ANIMATION


    const createLeaf=()=>{


        const leaf=document.createElement('div');


        leaf.className="leaf";


        leaf.innerHTML=`
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path 
            d="M12 2C12 2 4 10 4 15C4 18.3 6.7 21 10 21C11.1 21 12.1 20.7 13 20.2C13.9 20.7 14.9 21 16 21C19.3 21 22 18.3 22 15C22 10 14 2 14 2H12Z"
            fill="#2d6a4f"
            opacity="0.4"/>
        </svg>
        `;



        leaf.style.left=Math.random()*100+"vw";

        leaf.style.top="-50px";



        const duration=Math.random()*10+10;

        const drift=Math.random()*200-100;



        leaf.animate([

            {
            transform:`translate(0,0) rotate(0deg)`,
            opacity:0
            },


            {
            transform:`translate(${drift}px,50vh) rotate(180deg)`,
            opacity:0.5
            },


            {
            transform:`translate(${drift*2}px,110vh) rotate(360deg)`,
            opacity:0
            }


        ],{

            duration:duration*1000,

            easing:"linear"

        });



        document.body.appendChild(leaf);



        setTimeout(()=>{

            leaf.remove();

        },duration*1000);


    };



    setInterval(createLeaf,5000);







    // 6. FADE ANIMATION OBSERVER


    const fadeObserver=new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }


        });


    },{

        threshold:0.1

    });



    document
    .querySelectorAll('.product-card,.section-title,#about p')
    .forEach(el=>{


        el.style.opacity="0";

        el.style.transform="translateY(20px)";

        el.style.transition=
        "all 0.8s cubic-bezier(0.16,1,0.3,1)";


        fadeObserver.observe(el);


    });



});
