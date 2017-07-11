
/**
 * Created by hillarosenberg on 2017/07/09.
 */

//main minecraft
function Minecraft () {
    
    this.createGrid = function(){
        for(var i = 0; i<25; i++){
            var rows = $("<div class = 'rows'></div>");
            $("#container").append(rows);
            $(rows).attr({
                y: i
            });
            for(var r=0; r<25; r++){
                var columns =  $("<div class = 'columns'></div>");
                $(".rows").append(columns);
                $(columns).attr({
                    x: r
                });
            }
        }
    }



}



var newGame = new Minecraft();
newGame.createGrid();

