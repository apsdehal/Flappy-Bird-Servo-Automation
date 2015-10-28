(function (Ω, MainScreen) {

    "use strict";

    var TitleScreen = Ω.Screen.extend({

        x: 0,
        y: 0,
        ac: 0,

        font: new Ω.Font("res/flapfont.png", 16, 22, "abcdefghijklmnopqrstuvwxyz"),

        init: function () {

        },

        tick: function () {
            this.ac = Math.min(this.ac + 0.1, 5);
            this.y += this.ac;

            if (Ω.input.pressed("jump")) {
                window.game.setScreen(new MainScreen(), {type: "inout", time:50});
            }
        },

        render: function (gfx) {

            var now = Date.now(),
                atlas = window.game.atlas;

            atlas.render(gfx, "bg_day", 0, 0);

            var ySin = Math.sin(now / 150) * 7;
            this.font.write(gfx, "btp bird", 80, gfx.h * 0.18);
            this.font.write(gfx, "btp bird", 80 - 1, gfx.h * 0.18 - 1);
            atlas.render(
                gfx,
                "btp_" + ((now / 100 | 0) % 3),
                gfx.w * 0.42,
                gfx.h * 0.38 + ySin - 5
            );


            atlas.render(gfx, "land", -((now / 6 | 0) % 288), gfx.h - 112);
            atlas.render(gfx, "land", 289 - ((now / 6 | 0) % 288), gfx.h - 112);

            atlas.render(gfx, "button_play", 85, gfx.h - 172);
        }
    });

    window.TitleScreen = TitleScreen;

}(window.Ω, window.MainScreen));
