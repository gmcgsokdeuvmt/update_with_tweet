$(function(){

    //HTMLを初期化
    $("table.tbl tbody").html("");

    //HTMLを生成
    $.get('update_tweets.jsonl', function(data) {
        data = data.split('\n')
        data.pop()
        data = data.map(function(x) {
            return JSON.parse(x);
        });
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