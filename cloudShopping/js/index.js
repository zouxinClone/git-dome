
window.onload = function(){

        var intDiff = parseInt(90000);//倒计时总秒数量
        var hour1 = document.getElementById("hour");
        var minute2 = document.getElementById("minute");
        var second3 = document.getElementById("second");

        function timer(intDiff){
            window.setInterval(function(){
                var day=0,
                    hour=0,
                    minute=0,
                    second=0;//时间默认值
                if(intDiff > 0){
                    day = Math.floor(intDiff / (60 * 60 * 24));
                    hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;
                hour1.value=hour+"时";
                minute2.value=minute+"分";
                second3.value = second+"秒";
                intDiff--;
            }, 1000);
        }

        timer(intDiff);


        var $ = function(id){return document.getElementById(id);}
        var orderlist = $("orderli");
        var order = $('order');

        order.onmouseover = function(){
            orderlist.style.display = "block";
            order.style.backgroundColor = '#c0c0c0';
        }
        orderlist.onmouseover = function(){
            orderlist.style.display = "block";
            order.style.backgroundColor = '#c0c0c0';
        }
        orderlist.onmouseout = function(){
            orderlist.style.display = "none";
            order.style.backgroundColor = '';
        }
        
         var navli = document.getElementsByClassName("nav_li");
         var nav_list = document.getElementById('nav_list');
         console.log(nav_list);
         for(var i = 0, len = navli.length; i < len; i ++){
            navli[i].onmouseover = function(){
                nav_list.style.display = "block";
            }
            navli[i].onmouseout = function(){
                nav_list.style.display = "none";
            }
         }

        //轮播swiper组件
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }