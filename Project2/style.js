var startTime = 0;
    var interval;

    function startTimer() {
        startTime = Date.now();
        interval = setInterval(updateTimer, 10);
      }

    function updateTimer() {
        var elapsedTime = Date.now() - startTime;
        var ms = Math.floor(elapsedTime % 1000 / 10);
        var sec = Math.floor(elapsedTime / 1000 % 60);
        var min = Math.floor(elapsedTime / 60000);
        document.getElementById("timer").innerHTML = (min < 10 ? "0" + min : min) + ":" +
          (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms);
      }

      function stopTimer() {
        clearInterval(interval);
      }

      function resetTimer() {
        stopTimer();
        startTime = 0;
        document.getElementById("timer").innerHTML = "00:00:00";
      }
  