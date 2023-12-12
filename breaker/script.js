var audio = document.getElementById("audioPlayer");
        var audioControl = document.getElementById("audioControl");

        // 터치 이벤트 처리
        audioControl.addEventListener("touchstart", function() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0; // 재생 시간을 초기화하여 다음 재생 시 처음부터 시작하도록 함
            }
        });