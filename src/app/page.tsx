import './globals.css';
import Navbar from './Navbar';
import Head from 'next/head';

export default function Home(){
  return(
    <div><>
    <Head>
        <link
          href="https://db.onlinewebfonts.com/c/f1fcc5aed1e20fc0cdb9f8a7573625bd?family=Integral+CF+Regular"
          rel="stylesheet"
        />
      </Head>
      <div style={{ fontFamily: '"Integral CF Regular", sans-serif' }}></div>
      </>
    <br />
    <br />
    <div className="rectangle">
    <div className="text">
     <div className="t"></div>
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1><br />
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individually and cater to your sense of style</p>
        <br />
        <button>Shop Now</button>
    </div>
    <div id="mainImage">
      <img src="main.jpg" alt="error" />
    </div>
</div>

<div className="brands">
  <img src="versace.png" alt="Versace" />
  <img src="zara.png" alt="Zara" />
  <img src="gucci.png" alt="gucci" />
  <img src="prada.png" alt="prade" />
  <img src="Group.png" alt="calvinklein" />
</div>

<br />
<div id="newArrivals">
  <h1>NEW ARRIVALS</h1>
</div>

<div className="rectangle2">
  <span>
    <img src="tShirt.png" alt="t-shirt" />
    <h1>T-shirt with Tape Details</h1>
    <img className="stars" src="stars1.png" alt="#" />
    <img className="dollars" src="120.png" alt="" />
    </span>
  <span>
    <img src="jeans.png" alt="jeans" />
    <h1>Skinny Fit Jeans</h1>
    <img className="stars" src="starts2.png" alt="#" />
    <img className="dollars" src="240.png" alt="" />
    </span>
  <span>
    <img src="checkedShirt.png" alt="checkShirt" />
    <h1>Checked Shirt</h1>
    <img className="stars" src="starts3.png" alt="#" />
    <img className="dollars" src="$180.png" alt="" />
    </span>
  <span>
    <img src="sleeve.png" alt="sleeveShirt" />
    <h1>Sleeve Striped T-shirt</h1>
    <img className="stars" src="starts4.png" alt="#" />
    <img className="dollars" src="130.png" alt="" />
    </span>
</div>
</div>
);
}

