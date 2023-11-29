export async function addRecord(payload) {
  let response = await fetch("https://kifayatidb.onrender.com/testimonial", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function getRecord() {
  let response = await fetch("https://kifayatidb.onrender.com/testimonial", {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(response);
  return await response.json();
}
export async function updateRecord(payload) {
  let response = await fetch(
    "https://kifayatidb.onrender.com/testimonial/" + payload.id,
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
    "https://kifayatidb.onrender.com/testimonial/" + payload.id,
    {
      method: "delete",
      headers: {
        "content-type": "application//json",
      },
    }
  );
  console.log(URL + "/" + payload.id);
  return await response.json();
}
