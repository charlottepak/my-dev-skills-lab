$('#skills tbody').on('click', 'button', function(e) {
    $(e.target).closest('tr').remove();
});


$('#add').click((event) =>{
    var bla = $('#myInput').val();
    var newRow =  `<tr>
                    <td><button class="btn btn-xs btn-danger">x</button></td>
                    <td>${bla}</td>
                </tr>`;
    $('#skills tbody').append(newRow);
})
$('#skills tbody').on('click', 'button', function(e) {
    $(e.target).closest('tr').remove();
});

