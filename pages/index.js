import Link from 'next/link';
import baseUrl from '../helpers/baseUrl';

const Home = ({products}) => {

  const productList = products.map(product =>{
    return(
      <div className="card pcard" key={product._id}>
        <div className="">
          <img className="card-image" src={product.mediaUrl} />
          <span className="card-title">{product.name}</span>
        </div>
        <div className="card-content">
        {product.price} 
           </div>
        <div className="card-action">
         <Link href={'/product/[id]'} as={`/product/${product._id}`}>
          Product Details 
         </Link>
         
        </div>
      </div>
    )
  })
  console.log(products);
  return(
    <div className="rootcard">
            {productList}
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();
  return  {
    props: {
      products:data
    }
  }
}

// export async function getServerSideProps(){
//   const res = await fetch(`${baseUrl}/api/products`);
//   const data = await res.json();
//   return  {
//     props: {
//       products:data
//     }
//   }
// }

export default Home;