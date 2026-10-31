"use client";

import { updateOrderStatus } from "./actions";

export function OrderActions({ id, customerName }: { id: string; customerName: string }) {
  return <div className="order-actions">
    <form action={updateOrderStatus}><input type="hidden" name="id" value={id}/><input type="hidden" name="status" value="completed"/><button className="button-primary" type="submit">Tandai selesai</button></form>
    <form action={updateOrderStatus} onSubmit={(event) => { if (!window.confirm(`Batalkan pesanan ${customerName}?`)) event.preventDefault(); }}><input type="hidden" name="id" value={id}/><input type="hidden" name="status" value="cancelled"/><button className="text-button danger-button" type="submit">Batalkan pesanan</button></form>
  </div>;
}
