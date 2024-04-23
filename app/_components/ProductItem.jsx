import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDetail from "./ProductItemDetail";

function ProductItem({ product }) {
  // Check if product or its attributes are null or undefined
  if (!product || !product.attributes || !product.attributes.images || !product.attributes.images.data) {
    return null; // Or render a placeholder or error message
  }

  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:shadow-lg hover:scale-105 transition-all ease-in-out cursor-pointer">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product.attributes.images.data.attributes.url
        }
        height={200}
        width={500}
        alt="icon"
        className="h-[200px] w-[200px] object-contain"
      />

      <h2 className="font-bold text-lg">{product.attributes.name}</h2>
      <div className="flex gap-3">
        {product.attributes.sellingPrice && (
          <h2 className="font-bold">${product.attributes.sellingPrice}</h2>
        )}
        <h2 className={`font-bold text-gray-500 line-through`}>
          ${product.attributes.mrp}
        </h2>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="text-primary hover:text-white hover:bg-primary capitalize"
          >
            add to cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <ProductItemDetail product={product}/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
