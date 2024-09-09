import Container from "./@components/others/Container";
import Grid from "./@components/others/Grid";
import Navbar from "./@components/others/Navbar";
import ProductCard from "./@components/others/ProductCard/ProductCard";

export default function Home() {
    return(
      <div>
        {/* NAVBAR */}
        <Navbar brand='Your Brand'/>

        {/* HERO */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold z-10">Your Brand Name</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <a href="#featured">
                <button className="btn glass btn-primary">
                  View Products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 w-4">
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>


        {/* Featured Products */}
        <Container id="featured" st={{ marginTop: '20px' }}>
            <div className="flex gap-2 items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <h1 className='text-2xl font-bold'>FEATURED</h1>
            </div>
            <Grid lg={3}>
                <ProductCard details={{id: 1, name: 'Product 1', img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", description: ''}} />
                <ProductCard details={{id: 2, name: 'Product 2', img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", description: ''}}/>
                <ProductCard details={{id: 3, name: 'Product 3', img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", description: '', new: true}}/>
                <ProductCard details={{id: 4, name: 'Product 4', img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", description: ''}}/>
            </Grid>
        </Container>
      </div>
    )
}
