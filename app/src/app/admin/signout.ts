"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { clearLocalAdminSession } from "@/lib/local-store";

export async function signOut() {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  else await clearLocalAdminSession();
  redirect("/");
}
