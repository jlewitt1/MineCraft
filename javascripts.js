
/**
 * Created by hillarosenberg on 2017/07/09.
 */

//main minecraft
function Minecraft () {

    //function to create the starting grid layout
    this.createGrid = function () {
        for (var i = 0; i < 20; i++) {
            var rows = $("<div class='rows'></div>")
            $("#container").append(rows);
            $(rows).attr({y: i});
            for (var k = 0; k < 20; k++) {
                var columns = $("<div class='columns'></div>")
                $("#container").append(columns);
                $(columns).attr({x: k});

            }
        }

    }

}







var newGame = new Minecraft();
newGame.createGrid();
