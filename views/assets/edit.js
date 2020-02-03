renderTodo = (id, cb) => {
  $.ajax({
    type: "GET",
    url: `api/find/${id}`
  }).then(todo => cb(todo));
};

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const todoId = urlParams.get("id");
  console.log(todoId);

  renderTodo(todoId, todo => {
    console.log(todo);
    $("#originalText").text(`"${todo[0].text}"`);
    $("#editText").attr("placeholder", todo[0].text);
  });

  $("#editSubmit").on("click", () => {
    const editedText = $("#editText").val();
    console.log(editedText);

    $.ajax({
      type: "patch",
      url: "api/update",
      data: {
        text: editedText,
        id: todoId
      }
    }).then(() => {
      window.location.href = "/";
    });
  });
});
