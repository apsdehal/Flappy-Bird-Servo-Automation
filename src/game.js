(function (Ω) {

    "use strict";

    var OmegaGame = Ω.Game.extend({

        canvas: "#board",

        fps: false,
        best: 0,
        preset_dt: 1/60,

        atlas: new Ω.SpriteAtlas("csv", "res/flappyAtlas/atlas"),

        init: function (w, h) {

            this._super(w, h);

            Ω.evt.progress.push(function (remaining, max) {
                console.log((((max - remaining) / max) * 100 | 0) + "%");
            });

            Ω.input.bind({
                "jump": ["space",  "touch"] ,
                "touch": "touch",
                "escape": "escape",
                "left": "left",
                "right": "right",
                "up": "up",
                "down": "down"
            });

        },

        load: function () {

            this.setScreen(new TitleScreen());

        }

    });

    window.OmegaGame = OmegaGame;

}(Ω));
