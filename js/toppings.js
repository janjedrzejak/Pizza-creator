var i = [];
const sel_color = "#4BA2EA";
const un_sel_color = "#ddd";


i[0]=0;
$(document).ready(function(){
    $(".salami").click(function(){
        if(i[0] == 0) {
            $("#salami").animate({top: '0px'});
             this.style.backgroundColor = sel_color;
            i[0]++;
        } else { 
            i[0]=i[0]-1; $("#salami").animate({top: '-400px'}); 
            this.style.backgroundColor = un_sel_color;
        }
    });
});

i[1]=0;
$(document).ready(function(){
    $(".ham").click(function(){
        if(i[1] == 0) {
            $("#ham").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[1]++;
        } else { 
            i[1]=i[1]-1; $("#ham").animate({top: '-400px'});
            this.style.backgroundColor = un_sel_color; 
        }
    });
}); 

i[2]=0;
$(document).ready(function(){
    $(".tomatoes").click(function(){
        if(i[2] == 0) {
            $("#tomatoes").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[2]++;
        } else { 
            i[2]=i[2]-1; $("#tomatoes").animate({top: '-400px'}); 
            this.style.backgroundColor = un_sel_color;
        }
    });
}); 

i[3]=0;
$(document).ready(function(){
    $(".onion").click(function(){
        if(i[3] == 0) {
            $("#onion").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[3]++;
        } else { 
            i[3]=i[3]-1; $("#onion").animate({top: '-400px'});
            this.style.backgroundColor = un_sel_color;
        }
    });
}); 

i[4]=0;
$(document).ready(function(){
    $(".pieczarki").click(function(){
        if(i[4] == 0) {
            $("#pieczarki").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[4]++;
        } else { 
            i[4]=i[4]-1; $("#pieczarki").animate({top: '-400px'}); 
            this.style.backgroundColor = un_sel_color;
        }
    });
}); 

i[5]=0;
$(document).ready(function(){
    $(".paprica").click(function(){
        if(i[5] == 0) {
            $("#paprica").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[5]++;
        } else { 
            i[5]=i[5]-1; $("#paprica").animate({top: '-400px'});
            this.style.backgroundColor = un_sel_color;
        }
    });
}); 

i[6]=0;
$(document).ready(function(){
    $(".jalapeno").click(function(){
        if(i[6] == 0) {
            $("#jalapeno").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[6]++;
        } else { 
            i[6]=i[6]-1; $("#jalapeno").animate({top: '-400px'});
            this.style.backgroundColor = un_sel_color;
        }
    });
});

i[7]=0;
$(document).ready(function(){
    $(".cheese").click(function(){
        if(i[7] == 0) {
            $("#cheese").animate({top: '0px'});
            this.style.backgroundColor = sel_color;
            i[7]++;
        } else { 
            i[7]=i[7]-1; $("#cheese").animate({top: '-400px'});
            this.style.backgroundColor = un_sel_color;
        }
    });
});


i[8]=0;
$(document).ready(function(){
    $(".pizza_box").click(function(){
        if(i[7] == 0) {
            $("#box").animate({top: '-300px'});
            this.style.backgroundColor = sel_color;
            this.innerHTML = "anuluj zamówienie";
            document.getElementById("time").innerHTML = "Zamówienie zostało wysłane";
            i[7]++;
        } else { 
            i[7]=i[7]-1; $("#box").animate({top: '700px'});
            this.style.backgroundColor = un_sel_color;
            this.innerHTML = "zamów";
            document.getElementById("time").innerHTML = "Zamówienie zostało anulowane";
        }
    });
});
