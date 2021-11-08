function navbar(){
    return ` <div class="m-5 border-double border-2 h-16 flex bg-black-600">
    <a href="#">  <div class=" ml-40 text-4xl font-mono pl-6 pr-6 bg-red-700 underline mt-2 hover:text-red-500 " > Flipkart</div></a> 
    <input class=" border-1 border-black-600 pl-6 pr-6 " type="text" placeholder=" Search for products,Brands and More">
    <button class="pl-6 pr-6 ">Search</button>
      <a href="#"><div class="pl-6 pr-6 mt-5">Profile</div></a>
    <a href=""> <div class="pl-6 pr-6 mt-5 ">More</div></a>
    <a href="#"><div class="pl-6 pr-6 mt-5">Cart</div></a>  
    `
}
export default navbar