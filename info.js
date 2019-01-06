$(function(){

    //HTMLを初期化
    $("table.tbl tbody").html("");

    //HTMLを生成
    $.get('update_tweets.jsonl', function(data) {
        console.log(data);
        $(data).each(function(){
            record = JSON.parse(this);
            console.log(record);
            $('<tr>'+
            '<th>'+'day'+'</th>'+
            '<td class="label"><span class="' + 'label' + '">' +
            record.user + '</span></td>'+
            '<td>' + record.text + '</td>'+
            '</tr>').appendTo('table.tbl tbody');
        })
    });    
});