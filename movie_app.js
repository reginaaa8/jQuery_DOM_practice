
$("#add-btn").on("click", function (e) {
    // prevent page refresh upon form submission
    e.preventDefault();

    // extract input values 
    let movieName = $("#movie-name").val();
    let myRating = $("#rating").val();

    // create row in table with movie rating information and a delete button
    let ratingRow = `
    <tr>
        <td>${movieName}</td>
        <td>${myRating}</td>
        <td><button>Delete button</button></td>
    </tr>`
    // append rating row to table body 
    $("tbody").append(ratingRow);

    //   clear input once form is subitted 
    movieName = $("#movie-name").val("");
    myRating = $("#rating").val("");

    // add event listener to delete button to delete rating row 
    $("tr button").on("click", function (e) {
        e.target.parentElement.parentElement.remove();
    });
});






// Alternate solution using UUIDs - incomplete!!! (need to extract and add input values)

// $("#add").on("click", function (e) {
//     e.preventDefault();
//     let my_uuid = self.crypto.randomUUID();
//     let my_tr = `<tr id=${my_uuid}></tr>`

//     $("tbody").append(my_tr);
//     $('#' + my_uuid).append($("<td>", { text: "HELLO!" })).addClass("rating");
//     $('#' + my_uuid).append($("<td>", { text: "HELLO!" }));
//     $('#' + my_uuid).append($("<button>", { text: "Delete Button" }));

// })