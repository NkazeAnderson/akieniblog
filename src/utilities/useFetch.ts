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
