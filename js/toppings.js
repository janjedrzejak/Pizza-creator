var i = [];
const sel_color = "#f75e50";
const un_sel_color = "#ffffff";
const top_margin = "-500px";
const zero_position = "300px";

i[0]=0;
$(document).ready(function(){
    $(".salami").click(function(){
        if(i[0] == 0) {
            $("#salami").animate({top: zero_position});
             this.style.backgroundColor = sel_color;
             this.style.color = un_sel_color;
            i[0]++;
        } else { 
            i[0]=i[0]-1; $("#salami").animate({top: top_margin}); 
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
});

i[1]=0;
$(document).ready(function(){
    $(".ham").click(function(){
        if(i[1] == 0) {
            $("#ham").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[1]++;
        } else { 
            i[1]=i[1]-1; $("#ham").animate({top: top_margin});
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000"; 
        }
    });
}); 

i[2]=0;
$(document).ready(function(){
    $(".tomatoes").click(function(){
        if(i[2] == 0) {
            $("#tomatoes").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[2]++;
        } else { 
            i[2]=i[2]-1; $("#tomatoes").animate({top: top_margin}); 
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
}); 

i[3]=0;
$(document).ready(function(){
    $(".onion").click(function(){
        if(i[3] == 0) {
            $("#onion").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[3]++;
        } else { 
            i[3]=i[3]-1; $("#onion").animate({top: top_margin});
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
}); 

i[4]=0;
$(document).ready(function(){
    $(".pieczarki").click(function(){
        if(i[4] == 0) {
            $("#pieczarki").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[4]++;
        } else { 
            i[4]=i[4]-1; $("#pieczarki").animate({top: top_margin}); 
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
}); 

i[5]=0;
$(document).ready(function(){
    $(".paprica").click(function(){
        if(i[5] == 0) {
            $("#paprica").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[5]++;
        } else { 
            i[5]=i[5]-1; $("#paprica").animate({top: top_margin});
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
}); 

i[6]=0;
$(document).ready(function(){
    $(".jalapeno").click(function(){
        if(i[6] == 0) {
            $("#jalapeno").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[6]++;
        } else { 
            i[6]=i[6]-1; $("#jalapeno").animate({top: top_margin});
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
});

i[7]=0;
$(document).ready(function(){
    $(".cheese").click(function(){
        if(i[7] == 0) {
            $("#cheese").animate({top: zero_position});
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[7]++;
        } else { 
            i[7]=i[7]-1; $("#cheese").animate({top: top_margin});
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
});


i[8]=0;
$(document).ready(function(){
    $(".pizza_box").click(function(){
        if(i[8] == 0) {
            $("#pizza-box").animate({top: '550px'});
            this.innerHTML = "anuluj";
            i[8]++;
        } else { 
            i[8]=i[8]-1; $("#pizza-box").animate({top: '2048px'});
            this.innerHTML = "zamów!";
        }
    });
});
i[9]=0;
$(document).ready(function(){
    $(".fat").click(function(){
        if(i[9] == 0) {
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[9]++;
        } else { 
            i[9]=i[9]-1;
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
});
i[10]=0;
$(document).ready(function(){
    $(".thin").click(function(){
        if(i[10] == 0) {
            this.style.backgroundColor = sel_color;
            this.style.color = un_sel_color;
            i[10]++;
        } else { 
            i[10]=i[10]-1;
            this.style.backgroundColor = un_sel_color;
            this.style.color = "#000";
        }
    });
});
