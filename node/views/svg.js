var app = angular.module('svgApp', []);
app.controller('svgController',function ($scope) {
    console.log('I am in the controller');
    if (sessionStorage.length > 0) {
        $scope.logout= function(){
            console.log('triggered');
            sessionStorage.clear();
            location.href = "login.html";
        }
		regions=[
            {
                "region_name": "Lombardia",
                "region_code": "lom",
                "totalDevices": 1820

            },
            {
                "region_name": "Campania",
                "region_code": "cam",
                "totalDevices": 200
            },
            {
                "region_name": "Lazio",
                "region_code": "laz",
                "totalDevices": 9600
            },
            {
                "region_name": "Sicilia",
                "region_code": "sic",
                "totalDevices": 1000
            },
            {
                "region_name": "Veneto",
                "region_code": "ven",
                "totalDevices": 8000
            },
            {
                "region_name": "Emilia-Romagna",
                "region_code": "emi",
                "totalDevices": 450
            },
            {
                "region_name": "Piemonte",
                "region_code": "pie",
                "totalDevices": 350
            },
            {
                "region_name": "Puglia",
                "region_code": "pug",
                "totalDevices": 789
            },
            {
                "region_name": "Toscana",
                "region_code": "tos",
                "totalDevices": 3765
            },
            {
                "region_name": "Calabria",
                "region_code": "cal",
                "totalDevices": 1238
            },
            {
                "region_name": "Sardegna",
                "region_code": "sar",
                "totalDevices": 1603
            },
            {
                "region_name": "Liguria",
                "region_code": "lig",
                "totalDevices": 1127
            },
            {
                "region_name": "Marche",
                "region_code": "mar",
                "totalDevices": 155
            },
            {
                "region_name": "Abruzzo",
                "region_code": "abr",
                "totalDevices": 507
            },
            {
                "region_name": "Friuli-Venezia Giulia",
                "region_code": "fri",
                "totalDevices": 860
            },
            {
                "region_name": "Trentino-Alto Adige",
                "region_code": "tre",
                "totalDevices": 934
            },
            {
                "region_name": "Umbria",
                "region_code": "umb",
                "totalDevices": 239
            },
            {
                "region_name": "Basilicata",
                "region_code": "bas",
                "totalDevices": 6194
            },
            {
                "region_name": "Molise",
                "region_code": "mol",
                "totalDevices": 341
            },
            {
                "region_name": "Val d'Aosta",
                "region_code": "vao",
                "totalDevices": 844
            }
        ];


        var temp_array= regions.map(function(item){
            return item.totalDevices;
        });
        var highest_value = Math.max.apply(Math, temp_array);

        $(function() {

            for(i = 0; i < regions.length; i++) {

                $('#'+ regions[i].region_code)
                //.css({'fill': 'rgba(11, 104, 170,' + regions[i].totalDevices/highest_value +')'})
                .data('region', regions[i]);
            }

            $('.map g').mouseover(function (e) {
                var region_data=$(this).data('region');
                $('<div class="info_panel">'+
                    region_data.region_name + '<br>' +
                    'totalDevices: ' + region_data.totalDevices.toLocaleString("en-UK") +
                    '</div>'
                 )
                .appendTo('body');
            })
            .mouseleave(function () {
                $('.info_panel').remove();
            })
            .mousemove(function(e) {
                var mouseX = e.pageX, //X coordinates of mouse
                    mouseY = e.pageY; //Y coordinates of mouse

                $('.info_panel').css({
                    top: mouseY-50,
                    left: mouseX - ($('.info_panel').width()/2)
                });
            });

        });
        function totalDevices(min, max) {
    	   return Math.random() * (max - min) + min;
    	}


        console.log('here');
        //$scope.totalDeviceDivide;
        
        $("#content").hide();
        $(".map g>*").on("click",function(){
            $("#content").show();
        });



        $scope.clickedHere = function(data){
            console.log(data.target.parentElement.id);
            //.target.parentElement.id
            for (var i = 0; i < regions.length; i++) {
                if (regions[i].region_code==data.target.parentElement.id) {
                    $scope.currentObject = regions[i];
                    $scope.totalDeviceDivide = getTotalDevicesDividedIntoCategarory($scope.currentObject); 
                }
            }
        }
        var getTotalDevicesDividedIntoCategarory = function(currentObjectClicked){
            var wholetotalDevices= currentObjectClicked.totalDevices;
            var runningDevices= Math.round(Math.random() * (wholetotalDevices - 100) + 100);
            var  notRunningDevices = wholetotalDevices - runningDevices ;        
            return {"runningDevicestotalDevices":runningDevices,"notRunningDevicestotalDevices":notRunningDevices};
        }
    }else{
        alert('please signin to continue!');
        location.href = "login.html";
    }
});

