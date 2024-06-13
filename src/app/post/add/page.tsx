import { createPost } from "@/actions";
import Button from "@/components/Button";
import FormFeedBack from "@/components/FormFeedBack";
import React from "react";

function AddPost() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[350px]">
        <h2 className="w-full text-center mb-6">Add Post</h2>
        <FormFeedBack></FormFeedBack>
      </div>
    </div>
  );
}

export default AddPost;
