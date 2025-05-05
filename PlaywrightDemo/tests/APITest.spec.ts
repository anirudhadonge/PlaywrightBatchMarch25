import test, { expect } from "@playwright/test";
import apiData from "./../TestData/APIData.json";
const data = {
  username: apiData.username,
  password: apiData.password,
};

test("Login to Application", async ({ request }) => {
  const response = await request.post(
    "https://bookcart.azurewebsites.net/api/Login",
    {
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      data: data,
    }
  );

  expect(response.ok()).toBeTruthy();

  const body = JSON.parse((await response.body()).toString());
  console.log(body.token);

  const responseList = await request.get("https://bookcart.azurewebsites.net/api/Book", {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: "bearer " + body.token,
    },
    timeout:30000
  });

  expect(responseList.ok()).toBeTruthy();

  const bookList = JSON.parse((await responseList.body()).toString());
  console.log(bookList);

  const bookID = bookList[0];

  const bookcart = await request.get("https://bookcart.azurewebsites.net/api/Book/"+bookID.bookId, {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization: "bearer " + body.token,
    },
    timeout:30000
  });

  expect(bookcart.ok()).toBeTruthy();

  const book = JSON.parse((await bookcart.body()).toString());
  console.log(book);
});
