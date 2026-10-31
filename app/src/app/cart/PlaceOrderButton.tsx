"use client";

import { useFormStatus } from "react-dom";

export function PlaceOrderButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return <button className="button-primary" type="submit" disabled={disabled || pending}>{pending ? "Mengirim pesanan..." : "Kirim pesanan"}</button>;
}
