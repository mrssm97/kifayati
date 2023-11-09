export async function addRecord(payload) {
  let response = await fetch("/product", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function getRecord() {
  let response = await fetch("/product", {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });
  return response.json();
}
export async function updateRecord(payload) {
  let response = await fetch("/product/" + payload.id, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function deleteRecord(payload) {
  let response = await fetch("/product/" + payload.id, {
    method: "delete",
    headers: {
      "content-type": "application//json",
    },
  });
  console.log(URL + "/" + payload.id);
  return await response.json();
}
