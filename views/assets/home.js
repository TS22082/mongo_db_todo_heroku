$(document).ready(function() {
  renderTodos();
});

$("#todoSubmit").on("click", function() {
  const todoText = $("#todoText").val();
  $("#todoText").val("");
  $.ajax({
    type: "POST",
    url: "/api/new",
    data: { text: todoText }
  }).then(() => {
    renderTodos();
  });
});

renderTodos = () => {
  $.ajax({
    type: "GET",
    url: "/api/all"
  }).then(todos => {
    $("#todoContainer").empty();
    console.log(todos);

    todos.forEach(todo => {
      $("#todoContainer").prepend(
        `
        <div class="col-sm-12">
          <div class="card col-sm-8 offset-sm-2 bg-light mb-3">
            <div class="card-body">
              <div class="text-center">
                <p>${todo.text}<p>
                <button id="editBtn" data-id=${todo._id} type="button" style="width:150px" class="btn btn-outline-success">Edit</button>
                <button id="deleteBtn" data-id=${todo._id} type="button" style="width:150px" class="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
        `
      );
    });
  });
};

$(document).on("click", "#editBtn", function() {
  const id = $(this).attr("data-id");
  console.log(id);
  window.location.href = `/edit?id=${id}`;
});

$(document).on("click", "#deleteBtn", function() {
  const id = $(this).attr("data-id");
  console.log(id);
  window.location.href = `/delete?id=${id}`;
});
