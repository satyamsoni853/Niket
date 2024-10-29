import React from "react";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg'
import img8 from './img8.webp';
import img9 from './img9.webp';
import img10 from './img10.webp';
import img11 from './img11.webp';
import img12 from './img12.webp';



import "./Product.css";

function Product() {
  return (
    <div className="product-main">
         <h1 className="product-heading">Designed by Us, Crafted for You</h1>
        <div className="product">
      <div class="wrapper">
        <div class="card">
          <img
            src={img11}
            alt="Mountain"
          />
          <div class="info">
            <h1>Loose Pack</h1>
            <p>
             A Grade or Stocklot
            </p>
            <button>@Best rate</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img8}
            alt="Road"
          />
          <div class="info">
            <h1>Bunny Poko Pants</h1>
            <p>
              Baby Diaper:40pcs
            </p>
            <button> ₹399</button>
          </div>
        </div>
        <div class="card">
          <img
            src={img9}
            alt="Road"
          />
          <div class="info">
            <h1>Baby Diper</h1>
            <p>
            T Bunny Extra Absorb Diapers a pack of 50.
            </p>
            <button> ₹599</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img10}
          />
          <div class="info">
            <h1>Buuny pads</h1>
            <p>
            T Bunny Pads  a pack of 6.
            </p>
            <button> ₹36</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
    <div className="product">
      <div class="wrapper">
        <div class="card">
          <img
            src={img7}
            alt="Mountain"
          />
          <div class="info">
          <h1>Buuny pads</h1>
            <p>
             Bunny Pads  a pack of 6.
            </p>
            <button> ₹36</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img12}
            alt="Road"
          />
          <div class="info">
          <h1>Buuny Diper</h1>
            <p>
             Bunny Diper 
            </p>
            <button> @best rate</button>
          </div>
        </div>
        <div class="card">
          <img
            src={img1}
            alt="Road"
          />
          <div class="info">
          <h1>Buuny pads</h1>
            <p>
            A 280mm pads Pack of 6
            </p>
            <button> ₹35</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img2}
            alt="Protester"
          />
          <div class="info">
            <h1>Sanitary Napkin</h1>
            <p>
            Sanitary Napkin with Same Quality as Proease
              
            </p>
            <button> ₹36</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <br />
    <div>
    <div className="product">
      <div class="wrapper">
        <div class="card">
          <img
            src={img5}
            alt="Mountain"
          />
          <div class="info">
            <h1>Baby Diaper</h1>
            <p>
              Baby Diaper pack of 54.
            </p>
            <button> ₹599</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img4}
            alt="Road"
          />
          <div class="info">
            <h1>Baby Diaper</h1>
            <p>
             Baby Diaper Premium Pack.
            </p>
            <button> ₹399</button>
          </div>
        </div>
        <div class="card">
          <img
            src={img6}
            alt="Road"
          />
          <div class="info">
            <h1>Baby Diaper</h1>
            <p>
            White Labering of baby Diapers Pack of 75pcs.
            </p>
            <button>@Best Rate</button>
          </div>
        </div>

        <div class="card">
          <img
            src={img3}
            alt="Protester"
          />
          <div class="info">
            <h1>Baby Diaper</h1>
            <p>
              Baby Diaper pack of 40pcs.
            </p>
            <button> ₹399</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Product;
