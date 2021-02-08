console.log("up and running");

$(document).ready(function(){
    
    $(".click-me").click(clickBait())
    function clickBait(){
        $(".ingredients").hide()
        alert("Knew you couldn't resist!")
        console.log("You clicked a button!")
    }

})
