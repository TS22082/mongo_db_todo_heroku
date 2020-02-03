getTodo = (id, cb) => {
  $.ajax({
    type: "GET",
    url: `/api/find/${id}`
  }).then(todo => {
    cb(todo);
  });
};

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const todoId = urlParams.get("id");
  console.log(todoId);

  getTodo(todoId, todo => {
    console.log(todo);
    $("#todoText").text(`"${todo[0].text}"`);
  });

  $(document).on("click", "#btnDelete", function() {
    $.ajax({
      type: "DELETE",
      url: `api/delete/${todoId}`
    }).then(() => {
      window.location.href = "/";
    });
  });
});
