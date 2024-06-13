const baseUrl = "https://jsonplaceholder.typicode.com";
export async function get(url: string) {
  try {
    const res = await fetch(`${baseUrl}${url}`);
    return res.json();
  } catch (error) {
    console.log(error);

    return [];
  }
}
export async function post(url: string, body: newPostBodyT) {
  try {
    const rawResponse = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();

    console.log("........................ Content");
    console.log(content);
    return content;
  } catch (error) {
    console.log(error);

    return [];
  }
}
