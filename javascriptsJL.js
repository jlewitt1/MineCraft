                        //our object constructor
var Minecraft = function () {

};

    var images = {"dirt": "dirt.png",
                  "grass": "grass.png",
                  "tree": "tree.png",
                  "leaf": "leaf.png"
    }

    Minecraft.prototype.setValues = function(array, blockType){
         for (var i=0; i<array.length; i++) { 
            $("#" + array[i]).attr("value", blockType).css("background-image", "url(./images/" + images[blockType] + ")");
         }
    }

    //create grid with coordinates
    Minecraft.prototype.createGrid = function(){
        for(var i = 0; i<19; i++){
            var rows = $("<div class = 'rows'></div>");
            $("#container").append(rows);
            $(rows).attr({
                y: i
            });
            for(var r=0; r<12; r++){
                var columns =  $("<div class = 'columns'></div>");
                $(".rows").append(columns);
                $(columns).attr({
                    id: r + "" + i
                }).text(r + ',' + i);
            }
        }
    };

    Minecraft.prototype.createClouds = function () {
         var cloudArr = ['13','14','15','16','24','25','26','35','27', '28','36','37',];
             for (var i=0; i<cloudArr.length; i++) {
                 $("#" + cloudArr[i]).css("background-color", "white");
                 // console.log("#" + cloudArr[i]);
             }
    };

    Minecraft.prototype.createGround = function () {
         var groundArr = ['80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','810',
         '811','812','813','814','815','816','817','818','910','911','912','913','914','914','915','916','917','918', 
         '100', '101','102','103','104','105','106','107','108', '109', '1010', '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018'];
             this.setValues(groundArr, "dirt");     
    };    

    Minecraft.prototype.createGrass = function () {
         var grassArr = ['70','71','72','73','74','75','76','77','78','79','710','711','712','713','714','714','715','716','717','718'];
         this.setValues(grassArr, "grass");
    }; 

    Minecraft.prototype.createTree = function () {
         var barkArr = ['415','515','615'];
         this.setValues(barkArr, "tree");
       
        var leafArr = ['214','215','216','314','315','316'];
        this.setValues(leafArr, "leaf");
    }; 

    // Minecraft.prototype.removeClickedElement = function() { //add event listener to remove the element when clicked
    //        $('.sidenav')            
    //         .on('click', '.toolbutton', function (eventObj) {
    //         $(this).removeClass(); });
    // };




var newGame = new Minecraft();
newGame.createGrid();
newGame.createClouds();
newGame.createGround();
newGame.createGrass();
newGame.createTree();
// newGame.removeClickedElement();