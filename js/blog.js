// Ajax call

$(document).ready(function () {
  let url = "https://jsonplaceholder.typicode.com/photos";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (res) {
      let blog = "";
      res.map((item) => {
        if (item.albumId === 1) {
          blog += `
              <div class="col-lg-3 mb-3" id="title">
                  <div class="card h-100">
                  <img src="${item.thumbnailUrl}" class="img-fluid card-img-top" alt="blog-img">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <p> ${item.title} </p>
                          <a href="${item.url}" class="text-decoration-none text-dark text-end">Read more ></a>
                      </div>
                  </div>
              </div>
              `;
        }
      });
      $("#blogs").append(blog);
    },
  });
});

// Search filter

document.querySelector("#searchInput").addEventListener("input", filterList);

function filterList() {
  const search = document.querySelector("#searchInput");
  const filter = search.value.toLowerCase();
  const listBlogs = document.querySelectorAll("#title");

  listBlogs.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
