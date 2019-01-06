$(function(){

    //HTMLを初期化
    $("table.tbl tbody").html("");

    //HTMLを生成
    $.get('update_tweets.jsonl', function(data) {
        console.log(data);    
        data = data.split('\n');
        $(data).each(function(){
            $('<tr>'+
            '<th>'+'day'+'</th>'+
            '<td class="label"><span class="' + 'label' + '">' +
            this.user + '</span></td>'+
            '<td>' + this.text + '</td>'+
            '</tr>').appendTo('table.tbl tbody');
        })
    });    
});