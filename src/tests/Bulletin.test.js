import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import VendorPost from "../components/Profile/Bulletin/VendorPost";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("get posts data", async () => {
  const fakePosts = { content: "fake 1", date: "2020/1/20" };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePosts)
    })
  );
  await act(async () => {
    render(
      <VendorPost content={fakePosts.content} date={fakePosts.date} />,
      container
    );
  });
  expect(container.querySelectorAll("p")[0].textContent).toBe(
    "Date " + fakePosts.date
  );
  expect(container.querySelectorAll("p")[1].textContent).toBe(
    fakePosts.content
  );

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
