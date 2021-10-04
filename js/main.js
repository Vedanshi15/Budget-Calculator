var monthlyincome = 0;
var expenses = 0;
var counter = 0;
let totalmonthlyincome = 0;
let totalsavedincome = 0;
$( "#section1" ).hide();
$( "#reset" ).hide();
$( "#goodincome" ).hide();
$( "#enoughincome" ).hide();
$( "#poorincome" ).hide();
$( "#lessincome" ).hide();
/* let backcounter = 0; */
function calculateBudget() {
    if(counter == 1) {
        monthlyincome = (parseFloat($("#salary").val()) || 0) + (parseFloat($("#otherincome").val()) || 0);
        $("#span1").html( "$" + monthlyincome);
        $( "#reset" ).show();       
    }    
    if(counter == 2) {        
        var expenses1 = (parseFloat(mortgage.value) || 0) + (parseFloat(rent.value) || 0) + (parseFloat(maintenance.value) || 0) + (parseFloat(homeinsurance.value) || 0) + (parseFloat(wge.value) || 0) + (parseFloat(cti.value) || 0) + (parseFloat(pc.value) || 0);
        $("#span2").html( "$" + expenses1);
        expenses = expenses + expenses1;
        $("#expenses").html( "$" + expenses);            
        totalsavedincome = monthlyincome - expenses;
        $("#savedincome").html( "$" + totalsavedincome);
        $( "#section1" ).show();		
    }
    if(counter == 3) {
        var expenses2 = (parseFloat(carpayment.value) || 0) + (parseFloat(carinsurance.value) || 0) + (parseFloat(gf.value) || 0) + (parseFloat(carrepairs.value) || 0);
        $("#span3").html( "$" + expenses2);
        expenses = expenses + expenses2;
        $("#expenses").html( "$" + expenses);            
        totalsavedincome = monthlyincome - expenses;
        $("#savedincome").html( "$" + totalsavedincome);
    }
    if(counter == 4) {
        var expenses3 = (parseFloat(ss.value) || 0) + (parseFloat(sl.value) || 0) + (parseFloat(ct.value) || 0);
        $("#span4").html( "$" + expenses3);
        expenses = expenses + expenses3;
        $("#expenses").html( "$" + expenses);            
        totalsavedincome = monthlyincome - expenses;
        $("#savedincome").html( "$" + totalsavedincome);	
    }
    if(counter == 5) {
        var expenses4 = (parseFloat(gh.value) || 0) + (parseFloat(entertainment.value) || 0) + (parseFloat(medical.value) || 0) + (parseFloat(ps.value) || 0) + (parseFloat(oe.value) || 0);
        $("#span5").html( "$" + expenses4);
        expenses = expenses + expenses4;
        $("#expenses").html( "$" + expenses);            
        totalsavedincome = monthlyincome - expenses;
        $("#savedincome").html( "$" + totalsavedincome);					
    }
    if(counter == 6) {
        var expenses5 = (parseFloat(ef.value) || 0) + (parseFloat(investments.value) || 0) + (parseFloat(retirement.value) || 0);
        $("#span6").html( "$" + expenses5);
        expenses = expenses + expenses5;
        $("#expenses").html( "$" + expenses);            
        totalsavedincome = monthlyincome - expenses;
        $("#savedincome").html( "$" + totalsavedincome);
        $("#next").hide();
        if (totalsavedincome>1000){
            $( "#goodincome" ).show();    
        }else if (totalsavedincome>500 && totalsavedincome <= 1000){
            $( "#enoughincome" ).show();
        }else if (totalsavedincome>=1 && totalsavedincome <= 500){
            $( "#poorincome" ).show();
        }else {
            $( "#lessincome" ).show();
        }
    }
    
    }

$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enablePagination: false,
        transitionEffectSpeed: 500,
        labels: {
            current: ""
        }
    });

    // Custome Button Jquery Step
    $('.forward').click(function(){
    	$("#wizard").steps('next');
        counter=counter+1;
        calculateBudget();

    })
    

    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
})



