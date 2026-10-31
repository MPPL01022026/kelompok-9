"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { setLocalAdminSession, verifyConfiguredLocalPassword } from "@/lib/local-store";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  if (!supabase) {
    if (!process.env.LOCAL_ADMIN_PASSWORD) redirect("/admin/login?error=setup");
    if (email !== (process.env.LOCAL_ADMIN_EMAIL ?? "admin@localhost") || !verifyConfiguredLocalPassword(password)) redirect("/admin/login?error=credentials");
    await setLocalAdminSession();
    redirect("/admin");
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/admin/login?error=credentials");
  redirect("/admin");
}
