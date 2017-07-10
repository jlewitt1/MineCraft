/**
 * Created by hillarosenberg on 2017/07/09.
 */

//main minecraft
function Minecraft () {

    //function to create the starting grid layout
    this.createGrid = function (){
        for (var rows = 0; rows < 20; rows++){
            for (var columns = 0; columns < 25; columns++) {
                $("#container").append("<div class='grid'></div>");

            }
        }
        $(".grid").width(960/25);
        $(".grid").height(960/25);
    }
}




var newGame = new Minecraft();
newGame.createGrid();
