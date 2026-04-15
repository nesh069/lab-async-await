// Write your code here!
const posts = [
  {
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
];

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  displayPosts(data);
}

function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p  = document.createElement("p");

    h1.textContent = post.title;
    p.textContent  = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

displayPosts(posts);

getPosts();