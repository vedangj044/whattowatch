const openProfile = (currElement) => {
  let a = document.createElement("a");
  let username = currElement.getAttribute("username");
  a.href = `https://github.com/${username}`;
  a.target = "_blank";
  a.click();
};
