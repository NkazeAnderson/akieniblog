"use server";

import { post } from "@/utilities/useFetch";
import { revalidatePath } from "next/cache";

export async function createPost(prev: newPostBodyT, formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");
  if (typeof body == "string" && typeof title == "string" && body && title) {
    const res = await post("/posts", { title, body });
    revalidatePath("/");
    revalidatePath("/post/add");
    console.log(res);

    return res;
  }
  return { error: "required fields" };
}
