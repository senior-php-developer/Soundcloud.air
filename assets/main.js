//air.Introspector.Console.log('ww');

var appUpdater = new runtime.air.update.ApplicationUpdaterUI();

function checkUpdate() {
	appUpdater.updateURL = "http://tunes.airy.me/update.xml";
	appUpdater.addEventListener(runtime.air.update.events.UpdateEvent.INITIALIZED, onUpdate);
	appUpdater.addEventListener(runtime.flash.events.ErrorEvent.ERROR, onUpdateError);
	appUpdater.isCheckForUpdateVisible = false;
    appUpdater.initialize();
}
function onUpdate(event) {
	appUpdater.checkNow();
}

function onUpdateError() {
	
}

$(document).ready(function() {
  $("#loader").hide();
  
      checkUpdate();
  
   $("#search").keyup( function(event){
    if (event.keyCode == 13) Sc.initSearch();
    return false;
  });
   
  $("select").change( function(event){
    setTimeout(function(){
        Sc.initSearch();    
    },400);
    
    return false;
  }); 
  
  $("a", "#tags").click(function(event){
    event.preventDefault();
    $("#search input").val($(this).text());
    Sc.initSearch();
    return false;
  });
  $('#tags a').eq(0).click();
});

function mkTime(dur) {
    dur /= 1000;
	var m = parseInt(dur/60);
	var s = parseInt(dur % 60);
	var duration = (m > 9 ? m : '0'+m) +':'+ (s > 9 ? s : "0"+s);
	return duration;
}
