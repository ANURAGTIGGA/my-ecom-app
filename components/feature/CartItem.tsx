"use client";
import Image from "next/image";
import { CartItemType } from "@/lib/types";

interface Props {
  item: CartItemType;
  onUpdate: (id: number, quantity: number) => void;
}

export default function CartItem({ item, onUpdate }: Props) {
  return (
    <div className="flex items-center border-b py-4">
      <Image
        src={item.image}
        alt={item.title}
        width={100}
        height={100}
        className="rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="font-bold">{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center gap-4">
        <p>${item.price * item.quantity}</p>
        <button onClick={() => onUpdate(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+</button>
        <button
          onClick={() => onUpdate(item.id, 0)}
          className="ml-4 text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
