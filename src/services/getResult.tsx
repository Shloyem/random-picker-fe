// TODO: add error handling
export default async function getResult(id: string): Promise<string> {
  return fetch(`http://localhost:3001/result/${id}`, {})
    .then((response) => {
      // console.log({ response });
      return response.json();
    })
    .then((jsonObject) => {
      // console.log({ jsonObject });
      return jsonObject.result;
    });
}
