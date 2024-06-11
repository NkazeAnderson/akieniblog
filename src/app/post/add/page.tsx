import Button from "@/components/Button";
import React from "react";

function AddPost() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[350px]">
        <h2 className="w-full text-center mb-6">Add Post</h2>
        <form className="space-y-4" action="">
          <div>
            <label className="text-xl font-bold my-2" htmlFor="title">
              Title
            </label>
            <br />
            <input
              className="w-full p-2 text-black rounded-lg"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div>
            <label className="text-xl font-bold my-2" htmlFor="body">
              Body
            </label>
            <br />
            <textarea
              className="w-full p-2 text-black rounded-lg"
              rows={5}
              id="body"
              name="body"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
