$(function(){

    //HTMLを初期化
    $("table.tbl tbody").html("");

    //HTMLを生成
    data = $("#read_text").load("update_tweets.jsonl");
    data = data.split('\n');
    console.log(data);
    $(data).each(function(){
        $('<tr>'+
        '<th>'+'day'+'</th>'+
        '<td class="label"><span class="' + 'label' + '">' +
        this.user + '</span></td>'+
        '<td>' + this.text + '</td>'+
        '</tr>').appendTo('table.tbl tbody');
    })
});