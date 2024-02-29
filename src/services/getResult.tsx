// ADD TYPE INSTEAD OF OBJECT

// TODO: add error handling

type Draw = {
  result: string;
  options: string[];
  createdAt: Date;
  expiresAt: Date;
  drawAt: Date;
};

export default async function getResult(id: string): Promise<Draw> {
  return fetch(`http://localhost:3001/result/${id}`, {}).then((response) => {
    console.log({ response });
    return response.json();
  });
}
