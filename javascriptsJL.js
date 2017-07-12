//our object constructor
var Minecraft = function () {
    this.selectedTool;
};

    var images = {"dirt": "dirt.png",
        "grass": "grass.png",
        "tree": "tree.png",
        "leaf": "leaf.png",
        "rock": "rock.png"
    };
        Minecraft.prototype.setValues = function(array,value, blockType){
            for (var i=0; i<array.length; i++) {
                $("#" + array[i]).attr("data-value",value).css("background-size","contain").css("background-image", "url(./images/" + images[blockType] + ")");
            }
        };
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
                        id: r + "" + i}).text(r + ',' + i);
                }
            }
        };
        Minecraft.prototype.createClouds = function () {
            var cloudArr = ['13','14','15','16','24','25','26','35','27', '28','36','37'];
            for (var i=0; i<cloudArr.length; i++) {
                $("#" + cloudArr[i]).css("background-color", "white");
                // console.log("#" + cloudArr[i]);
            }
        };

        Minecraft.prototype.createGround = function () {
            var groundArr = ['80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','810',
                '811','812','813','814','815','816','817','818','910','911','912','913','914','914','915','916','917','918', '100', '101',
                '102','103','104','105','106','107','108', '109','110','111','112','113','114','115','116','117','118','119', '1010', '1011',
                '1012', '1013', '1014', '1015', '1016', '1017', '1018','1110', '1111', '1112', '1113', '1114', '1115', '1116', '1117', '1118'];
            this.setValues(groundArr, "dirt", "dirt");
        };

        Minecraft.prototype.createGrass = function () {
            var grassArr = ['70','71','72','73','74','75','76','77','78','79','710','711','712','713','714','714','715','716','717','718'];
            this.setValues(grassArr, "dirt", "grass");
        };

        Minecraft.prototype.createTree = function () {
            var barkArr = ['415','515','615'];
            this.setValues(barkArr, "tree", "tree");

            var leafArr = ['214','215','216','314','315','316'];
            this.setValues(leafArr, "tree", "leaf");
        };

        Minecraft.prototype.createRock = function () {
            var rockArr = ['613','614'];
            this.setValues(rockArr, "rock", "rock");
        };

        Minecraft.prototype.removeObject = function() {
            var self = this;
            console.log("outside click", this)
            $(".toolButton").click(function(event){
                $(".selected").removeClass("selected");
                $(this).addClass("selected");
                console.log("inside click",this);
                self.selectedTool = $(this);
            });

            $(".columns").click(function(){
                if(self.selectedTool.attr("data-mine") == $(this).attr("data-value")){
                    $(this).addClass("sky");
                    $("#storage").css("background-image",$(this).css("background-image"));
                }
            });
        };

        Minecraft.prototype.setUpGame = function() {
            this.createGrid();
            this.createClouds();
            this.createGround();
            this.createGrass();
            this.createTree();
            this.createRock();
        };

        var newGame = new Minecraft();
        newGame.setUpGame();
