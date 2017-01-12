var tempF = 0;
var tempC = 0;
var windMPH = 0;
var widKPH = 0;
var clouds = 0;
var precipitation = 0;
var time = 0;
var hour= 0;
var flag = 0;

$(document).ready(function(){
//        alert("add \"https://\" to front of address bar");
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var url2 = "https://api.apixu.com/v1/current.json?key=cd388fd6e21c4f9389704909161109&q="+lat + "," + lon;



                $.getJSON(url2, function(json){

                        var dataW = json; 
                        console.log(dataW);
                        tempF = dataW.current.temp_f;
                        tempC = dataW.current.temp_c;
                        windMPH = dataW.current.wind_mph + " "+ dataW.current.wind_dir;
                        windKPH = dataW.current.wind_kph + " " + dataW.current.wind_dir;

                        clouds = dataW.current.cloud;
                        precipitation = dataW.current.precip;
                        time = dataW.location.localtime;
                        timeArray = time.split(" ");
                        hour = timeArray[1].split(":"); 




                        $('#temp').html(tempF);
                        $('#humid').html(dataW.current.humidity);
                        $('#wind').html(windMPH);

                        if (precipitation > .2){

                            if (tempF > 32){
                                $("body").css("background" , "black url(https://www.skotcher.com/wall/ff80c7b16f328cbcf93a8f8fbf2dac35/anime-gif-gurren-lagann-kamina-rain.jpg) no-repeat center center fixed");

                            }else {

                                switch (hour[0]){
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                        $("body").css("background" , "black url(http://wallpaper.pickywallpapers.com/1920x1080/snowy-night-street.jpg) no-repeat center center fixed");
                                        break;
                                    case "5":
                                    case "6":
                                    case "7":
                                    case "8":
                                    case "9":
                                    case "10":
                                    case "11":
                                    case "12":
                                    case "13":
                                    case "14":
                                    case "15":
                                    case "16":
                                    case "17":
                                    case "18":
                                    case "19":
                                        $("body").css("background" , "black url(http://1.bp.blogspot.com/-QwPAQ2-uKWg/Usqs-M8_F5I/AAAAAAAA_mE/u_Deh1qRofQ/s1600/DSC02026-SNOW.gif) no-repeat center center fixed");
                                        break;
                                    case "20":
                                    case "21":
                                    case "22":
                                    case "23":
                                        $("body").css("background" , "black url(http://wallpaper.pickywallpapers.com/1920x1080/snowy-night-street.jpg) no-repeat center center fixed");
                                        break;
                                }//end of switch
                            }//end of temp evaluation
                        }//end of precipitation
                        else  // no rain/snow
                        {
                            if (tempF > 90){
                                switch (hour[0]){
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                        $("body").css("background" , "black url(http://www.centralpark.com/usr/photos/large/8b/night-on-the-pond.jpg) no-repeat center center fixed");
                                        break;
                                    case "5":
                                    case "6":
                                    case "7":
                                        $("body").css("background" , "url(http://www.drodd.com/images15/sunset22.jpg) no-repeat center center fixed");
                                        break;
                                    case "8":
                                    case "9":
                                    case "10":
                                    case "11":
                                    case "12":
                                    case "13":
                                    case "14":
                                    case "15":
                                    case "16":
                                    case "17":
                                    case "18":
                                        $("body").css("background" , "url(http://weknowyourdreams.com/images/desert/desert-06.jpg) no-repeat center center fixed");
                                        break;
                                    case "19":
                                    case "20":
                                        $("body").css("background" , "url(http://www.drodd.com/images15/sunset22.jpg) no-repeat center center fixed");
                                        break;
                                    case "21":
                                    case "22":
                                    case "23":
                                        $("body").css("background" , "black url(http://www.centralpark.com/usr/photos/large/8b/night-on-the-pond.jpg) no-repeat center center fixed");
                                        break;
                                }//end of switch

                            }//end of my if > 90
                            else if (tempF > 32){
                                switch (hour[0]){
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                        $("body").css("background" , "black url(http://www.centralpark.com/usr/photos/large/8b/night-on-the-pond.jpg) no-repeat center center fixed");
                                        break;
                                    case "5":
                                    case "6":
                                    case "7":
                                        $("body").css("background" , "url(http://www.drodd.com/images15/sunset22.jpg) no-repeat center center fixed");
                                        break;
                                    case "8":
                                    case "9":
                                    case "10":
                                    case "11":
                                    case "12":
                                    case "13":
                                    case "14":
                                    case "15":
                                    case "16":
                                    case "17":
                                    case "18":
                                        $("body").css("background" , "url(https://wallup.net/wp-content/uploads/2016/05/24/368899-photography-landscape-nature-lake-mountains-snow-clouds-trees-reflection-leaves-Pakistan.jpg) no-repeat center center fixed");
                                        break;
                                    case "19":
                                    case "20":
                                        $("body").css("background" , "url(http://www.drodd.com/images15/sunset22.jpg) no-repeat center center fixed");
                                        break;
                                    case "21":
                                    case "22":
                                    case "23":
                                        $("body").css("background" , "black url(http://www.centralpark.com/usr/photos/large/8b/night-on-the-pond.jpg) no-repeat center center fixed");
                                        break;
                                }//end of switch

                            }//end of else if
                            else {
                                switch (hour[0]){
                                    case "0":
                                    case "1":
                                    case "2":
                                    case "3":
                                    case "4":
                                        $("body").css("background" , "black url(http://img.wallpaperfolder.com/f/64E41E9E8C07/trees-snow-winter-night-stars.jpg) no-repeat center center fixed");
                                        break;
                                    case "5":
                                    case "6":
                                    case "7":
                                        $("body").css("background" , "url(http://cdn.pcwallart.com/images/winter-sunrise-wallpaper-4.jpg) no-repeat center center fixed");
                                        break;
                                    case "8":
                                    case "9":
                                    case "10":
                                    case "11":
                                    case "12":
                                    case "13":
                                    case "14":
                                    case "15":
                                    case "16":
                                    case "17":
                                    case "18":
                                        $("body").css("background" , "url(https://newevolutiondesigns.com/images/freebies/winter-wallpaper-12.jpg) no-repeat center center fixed");
                                        break;
                                    case "19":
                                    case "20":
                                        $("body").css("background" , "black url(http://wallpapercave.com/wp/7zAP6Af.jpg) no-repeat center center fixed");
                                        break;
                                    case "21":
                                    case "22":
                                    case "23":
                                        $("body").css("background" , "black url(http://img.wallpaperfolder.com/f/64E41E9E8C07/trees-snow-winter-night-stars.jpg) no-repeat center center fixed");
                                        break;

                                }//end of switch
                            }//else 
                        }//end no snow or rain else



                });//end of JSON call

                $('#units').click(function(){
                        flag=flag + 1;
                        if(flag % 2 ==1){
                        $('#temp').html(tempC);
                        $('#wind').html(windKPH);
                        $('#windTitle').html("Wind KPH Direction");
                        $('#tempTitle').html("Temp ºC");
                        }else {
                        $('#temp').html(tempF);
                        $('#wind').html(windMPH);
                        $('#windTitle').html("Wind MPH Direction");
                        $('#tempTitle').html("Temp ºF");
                        }
                        });

                //percipitation
                //time
                //temp
                //night rain, night snow, day rain, day snow
                // n/dcold n/dwarm n/dhot sunset sunrise



                //winter sunrise     http://cdn.pcwallart.com/images/winter-sunrise-wallpaper-4.jpg

                //winter sunset    http://7-themes.com/data_images/out/67/7001487-winter-sunset.jpg

                //snowy night        http://globe-views.com/dcim/dreams/winter/winter-01.jpg

                //winter day      https://newevolutiondesigns.com/images/freebies/winter-wallpaper-12.jpg

                //snowy day     http://7-themes.com/data_images/out/69/7006266-winter-forest-scenery.jpg

                //rain    https://www.skotcher.com/wall/ff80c7b16f328cbcf93a8f8fbf2dac35/anime-gif-gurren-lagann-kamina-rain.jpg
                //hot night

                //hot       http://weknowyourdreams.com/images/desert/desert-06.jpg

                //normal

                //sunset       http://www.drodd.com/images15/sunset22.jpg




        })//end of get current position function

        }//end of if geolocation



});//end of document ready

//    background: url(https://wallup.net/wp-content/uploads/2016/05/24/368899-photography-landscape-nature-lake-mountains-snow-clouds-trees-reflection-leaves-Pakistan.jpg) no-repeat center center fixed;

