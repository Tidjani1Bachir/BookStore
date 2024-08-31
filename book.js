// {/* <div className="flex min-h-screen w-full flex-col bg-muted/40">
// <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
//   <div className="mb-8 flex items-center justify-between">
//     <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Book Store</h1>
//     <div className="relative">
//       <button variant="outline" size="sm" className="flex items-center gap-2">
//         {/* <ShoppingCartIcon className="h-5 w-5" /> */}
//         <span>Cart totalItems</span>
//       </button>
//       {/* {totalItems > 0 && (
//         <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
//           {totalItems}
//         </div>
//       )} */}
//     </div>
//   </div>
  
// </main>
//  <div className="fixed inset-x-0 bottom-0 z-10 bg-background shadow-lg md:inset-x-auto md:right-6 md:bottom-6 md:rounded-lg md:shadow-xl">
//   <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
//     <div className="flex items-center gap-2">
//       <ShoppingCartIcon className="h-6 w-6" />
//       <span className="text-lg font-semibold">Cart</span>
//     </div>
//     {cart.length > 0 && (
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-1">
//           <span className="text-muted-foreground">Total:</span>
//           <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
//         </div>
//         <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setCart([])}>
//           <Trash2Icon className="h-5 w-5" />
//           <span>Clear Cart</span>
//         </Button>
//       </div>
//     )}
//   </div>
//   {cart.length > 0 && (
//     <div className="max-h-[300px] overflow-y-auto border-t px-4 py-3 md:px-6 md:py-4">
//       {cart.map((item) => (
//         <div key={item.id} className="mb-4 flex items-center justify-between">
//           {/* <div className="flex items-center gap-4"> */}
//             <img
//               src="/placeholder.svg"
//               alt={item.title}
//               width={50}
//               height={70}
//               className="rounded-lg object-cover"
//               style={{ aspectRatio: "50/70", objectFit: "cover" }}
//             />
//             <div>
//               <h4 className="text-lg font-semibold">{item.title}</h4>
//               <p className="text-muted-foreground">{item.author}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <Button variant="outline" size="icon" onClick={() => removeFromCart(item)}>
//                 <MinusIcon className="h-4 w-4" />
//               </Button>
//               <span className="text-lg font-semibold">{item.quantity}</span>
//               <Button variant="outline" size="icon" onClick={() => addToCart(item)}>
//                 <PlusIcon className="h-4 w-4" />
//               </Button>
//             </div>
//             <span className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div> 
// </div> */}