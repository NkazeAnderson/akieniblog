type postT = { userId: number; id: number; title: string; body: string };
type userT = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
type commentT = {
  id: number;
  name: string;
  postId: number;
  email: string;
  body: string;
};

type newPostBodyT = Record<string, string | number | boolean>;
