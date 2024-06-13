"use client";
import { createPost } from "@/actions";
import React, { ReactNode, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "./Button";

function FormFeedBack() {
  useFormState;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const initialFormState: { title: string; body: string; id?: number } = {
    title,
    body,
  };
  const [state, formAction] = useFormState(createPost, initialFormState);
  const { pending } = useFormStatus();
  useEffect(() => {
    setBody("");
    setTitle("");
  }, [state]);

  return (
    <>
      {pending && <p>Submiting</p>}
      {state.id && <p>Added {state.title}</p>}
      {Array.isArray(state) && <p>Error while submitting</p>}
      {state.error && state.error == "required fields" && (
        <p>Required fields missing</p>
      )}
      <form className="space-y-4" action={formAction}>
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
            value={title}
            placeholder="title"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
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
            placeholder="body"
            value={body}
            onChange={(e) => {
              setBody(e.currentTarget.value);
            }}
          />
        </div>
        <div className="w-full flex justify-center">
          <Button
            text={pending ? "Posting..." : "Submit"}
            type={pending ? undefined : "submit"}
          />
        </div>
      </form>
    </>
  );
}

export default FormFeedBack;
