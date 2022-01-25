var ms_render_delay = 40;
var time_cache = new Date().toTimeString().slice(0,8);

function render_time() {
    var time = new Date().toTimeString().slice(0,8);
    if (time !== time_cache) {
      document.getElementById("clock-digits-p").innerHTML = time;
      time_cache = time;
    }
}

function render_loop() {
  setInterval(function(){
    render_time();
  }, ms_render_delay);
}

render_loop();
