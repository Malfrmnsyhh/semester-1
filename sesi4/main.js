        // function saklar() {
        //     let lampuoff = document.getElementById("lampu1");
        //     lampuoff.src = "/aset/on.gif";
        // }
        // function saklar1 () {
        //     let lampuon = document.getElementById("lampu1");
        //     lampuon.src = "/aset/off.gif";
        // }

        function saklar(params) {
            let lampu = document.getElementById("lampu1");
            if (params == "on"){
                lampu.src = "/aset/on.gif";
            } else{
                lampu.src = "/aset/off.gif"
            }
            return lampu;
        }