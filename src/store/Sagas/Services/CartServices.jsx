export async function addRecord(payload) {
  let response = await fetch("https://kifayatidb.onrender.com/cart", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function getRecord() {
  let response = await fetch("https://kifayatidb.onrender.com/cart", {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}
export async function updateRecord(payload) {
  let response = await fetch(
    "/https://kifayatidb.onrender.com/cart/" + payload.id,
    {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  return await response.json();
}
export async function deleteRecord(payload) {
  let response = await fetch(
    "/https://kifayatidb.onrender.com/cart/" + payload.id,
    {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return await response.json();
}
