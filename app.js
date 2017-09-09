function mellange(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};
var maFeuille = "";
$.ajax({
    dataType: "json",
    url : "http://spreadsheets.google.com/feeds/list/" + maFeuille + "/od6/public/values?alt=json",

    //key=AIzaSyCg_T74YlCMxFZhPyZKMKDQM1BqzfFoFq8",

    success: function(data){
        console.log(data)
        var tableau_apprenants = data.feed.entry;
        mellange(tableau_apprenants);
        console.log(tableau_apprenants);
        var long = tableau_apprenants.length;
        for (var i = 0; i < long; i++) {
            $('#place'+i).html('<img src="'+ tableau_apprenants[i].gsx$url.$t + '"><br>' + tableau_apprenants[i].gsx$noms.$t + "<br>" + tableau_apprenants[i].gsx$prénoms.$t )
        }
    },
    error: function(){
        alert("Echec de la connexion !");
    }
});